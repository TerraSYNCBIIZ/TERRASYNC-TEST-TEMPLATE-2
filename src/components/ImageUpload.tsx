'use client';

import React, { useState, useRef } from "react";
import { Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  onImageRemove: () => void;
  defaultImage?: string;
  className?: string;
}

export default function ImageUpload({
  onImageUpload,
  onImageRemove,
  defaultImage,
  className = ""
}: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(defaultImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onImageRemove();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`relative group cursor-pointer ${className}`}
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />

      {previewUrl ? (
        <div className="relative w-full h-full min-h-[200px] rounded-lg overflow-hidden">
          <Image
            src={previewUrl}
            alt="Uploaded image"
            fill
            className="object-cover"
          />
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      ) : (
        <div
          className={`flex flex-col items-center justify-center w-full h-full min-h-[200px] rounded-lg border-2 border-dashed transition-colors ${
            isDragging
              ? 'border-primary bg-primary/5'
              : 'border-gray-300 hover:border-primary/50 bg-gray-50'
          }`}
        >
          <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500">
            Click or drag image to upload
          </p>
        </div>
      )}
    </div>
  );
}
