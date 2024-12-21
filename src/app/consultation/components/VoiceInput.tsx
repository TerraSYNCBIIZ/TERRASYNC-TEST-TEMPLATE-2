'use client';

import { useState, useCallback, useRef } from 'react';
import { MicrophoneIcon } from '@heroicons/react/24/outline';

interface VoiceInputProps {
  onResult: (text: string) => void;
  className?: string;
}

export default function VoiceInput({ onResult, className = '' }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
    setError(null);
  };

  const toggleListening = useCallback(() => {
    setError(null);

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError('Speech recognition is not supported in your browser. Please try Chrome, Edge, or Safari.');
      return;
    }

    if (isListening) {
      stopListening();
      return;
    }

    try {
      // Start listening
      setIsListening(true);

      // Create speech recognition instance
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();

      // Configure recognition
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        console.log('Voice recognition started');
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event: any) => {
        try {
          const lastResult = event.results[event.results.length - 1];
          const transcript = lastResult[0].transcript;

          if (lastResult.isFinal) {
            onResult(transcript);
          }
        } catch (err) {
          console.error('Error processing speech result:', err);
          setError('Error processing speech. Please try again.');
          stopListening();
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        let errorMessage = 'An error occurred with speech recognition. ';
        
        switch (event.error) {
          case 'network':
            errorMessage = 'Network error occurred. Please check your internet connection.';
            break;
          case 'not-allowed':
          case 'permission-denied':
            errorMessage = 'Microphone access was denied. Please allow microphone access and try again.';
            break;
          case 'no-speech':
            errorMessage = 'No speech was detected. Please try again.';
            break;
          case 'audio-capture':
            errorMessage = 'No microphone was found. Please check your microphone and try again.';
            break;
          default:
            errorMessage += 'Please try again.';
        }
        
        setError(errorMessage);
        stopListening();
      };

      recognition.onend = () => {
        console.log('Voice recognition ended');
        // Only try to restart if we're still supposed to be listening and there's no error
        if (isListening && !error && recognitionRef.current) {
          try {
            recognitionRef.current.start();
          } catch (err) {
            console.error('Error restarting recognition:', err);
            setError('Error restarting voice recognition. Please try again.');
            stopListening();
          }
        } else {
          stopListening();
        }
      };

      // Store recognition instance in ref
      recognitionRef.current = recognition;

      // Start recognition
      recognition.start();
    } catch (err) {
      console.error('Error initializing speech recognition:', err);
      setError('Error starting voice recognition. Please try again.');
      stopListening();
    }
  }, [isListening, onResult, error]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleListening}
        className={`p-2 rounded-full transition-all ${
          isListening ? 'bg-primary text-white' : 'hover:bg-gray-100'
        } ${error ? 'bg-red-100 hover:bg-red-200' : ''} ${className}`}
        title={error || (isListening ? 'Click to stop voice input' : 'Click to start voice input')}
      >
        <MicrophoneIcon 
          className={`h-5 w-5 ${isListening ? 'animate-pulse' : ''} ${error ? 'text-red-500' : ''}`} 
          aria-hidden="true" 
        />
        <span className="sr-only">
          {isListening ? 'Stop recording' : 'Start voice input'}
        </span>
      </button>
      {error && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 bg-red-50 text-red-600 text-sm rounded-lg p-2 shadow-lg">
          {error}
        </div>
      )}
    </div>
  );
} 