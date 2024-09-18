export default function getLocalStorageItem<T>(key: string, defaultValue:T):T {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
}
