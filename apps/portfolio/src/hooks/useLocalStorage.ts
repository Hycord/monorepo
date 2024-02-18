import { useState } from "react";

export function useLocalStorage<T extends string>(
  key: string,
  defaultValue: T
) {
  const [value, setValue] = useState<T>(
    typeof localStorage === "undefined"
      ? defaultValue
      : (localStorage.getItem(key) as T) ?? defaultValue
  );

  const set = (val: T | ((v: T) => T)) => {
    if (typeof val === "function") {
      const data = val(value);
      localStorage.setItem(key, data);
      setValue(data);
    } else {
      localStorage.setItem(key, val);
      setValue(val);
    }
  };

  return [value, set] as const;
}
