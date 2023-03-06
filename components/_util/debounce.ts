const debounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: T) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
