"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const KeyboardControlsContext = createContext<Set<string>>(new Set());

// Provider component
export const KeyboardControlProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [keys, setKeys] = useState(new Set<string>());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeys((prevKeys) => new Set([...prevKeys, event.key.toLowerCase()]));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(event.key.toLowerCase());
        return newKeys;
      });
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <KeyboardControlsContext.Provider value={keys}>
      {children}
    </KeyboardControlsContext.Provider>
  );
};

// Hook to consume the context
export const useKeyboardControls = () => {
  const keys = useContext(KeyboardControlsContext);
  return keys;
};
