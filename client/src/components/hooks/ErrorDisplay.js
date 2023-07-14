import { useState, useEffect } from 'react';

const ErrorDisplay = () => {
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (showError) {
      timeoutId = setTimeout(() => {
        setShowError(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showError]);
  return [showError, setShowError];
};

export default ErrorDisplay;
