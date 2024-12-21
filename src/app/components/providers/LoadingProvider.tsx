'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import LoadingSpinner from '../shared/LoadingSpinner';

interface LoadingContextType {
  showLoading: () => void;
  hideLoading: () => void;
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingCount, setLoadingCount] = useState(0);

  const showLoading = useCallback(() => {
    setLoadingCount(count => count + 1);
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setLoadingCount(count => {
      const newCount = count - 1;
      if (newCount <= 0) {
        setIsLoading(false);
        return 0;
      }
      return newCount;
    });
  }, []);

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading, isLoading }}>
      {children}
      {isLoading && <LoadingSpinner />}
    </LoadingContext.Provider>
  );
} 