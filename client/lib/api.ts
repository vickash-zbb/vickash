/**
 * API utility functions for making requests with correct base path
 */

/**
 * Get the correct API URL with base path
 * @param endpoint - API endpoint (e.g., 'contact', 'demo')
 * @returns Full API URL with base path
 */
export function getApiUrl(endpoint: string): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const apiUrl = `${baseUrl}api/${endpoint}`.replace(/\/+/g, '/');
  return apiUrl;
}

/**
 * Make an API request with proper error handling
 * @param endpoint - API endpoint
 * @param options - Fetch options
 * @returns Promise with response data
 */
export async function apiRequest<T = any>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const url = getApiUrl(endpoint);
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(url, { ...defaultOptions, ...options });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error');
    throw new Error(`API Error ${response.status}: ${errorText}`);
  }

  return response.json();
}

/**
 * POST request helper
 * @param endpoint - API endpoint
 * @param data - Data to send
 * @returns Promise with response data
 */
export async function apiPost<T = any>(endpoint: string, data: any): Promise<T> {
  return apiRequest<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * GET request helper
 * @param endpoint - API endpoint
 * @returns Promise with response data
 */
export async function apiGet<T = any>(endpoint: string): Promise<T> {
  return apiRequest<T>(endpoint, {
    method: 'GET',
  });
}
