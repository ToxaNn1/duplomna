export const withAsync = async <T>(
  fn: (...args: any[]) => Promise<T>,
  ...args: any[]
): Promise<{ response: T | null; error: any }> => {
  try {
    const response = await fn(...args);
    console.log(response);
    return {
      response,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error,
    };
  }
};
