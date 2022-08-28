import { useState, useCallback } from "react";

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (dataUrl: string, applyData: (data: []) => void) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(dataUrl);

        if (!response.ok) {
          throw new Error("Could not fetch data!");
        }

        const data = await response.json();
        applyData(data);
      } catch (err) {
        setError("Somethingwent wrong");
      }

      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useRequest;
