export const API_BASE_URL = 'https://dummyjson.com';

export const apiInstance = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const url = `${API_BASE_URL}/${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    console.warn(`Ошибка HTTP в apiInstance: статус ${response.status}`);
  }

  return response.json();
};
