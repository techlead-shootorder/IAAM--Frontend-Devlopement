const REMOTE_URL = process.env.STRAPI_REMOTE_URL || 'https://informed-ducks-126aad9773.strapiapp.com';

export const fetchRemoteData = async (endpoint: string, options = {}) => {
  try {
    const url = `${REMOTE_URL}/api${endpoint}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Remote Strapi API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching from remote Strapi:', error);
    throw error;
  }
};
