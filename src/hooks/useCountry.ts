import { useState, useEffect } from 'react';

interface IpApiResponse {
  country_code: string;
}

export const useCountry = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
          throw new Error('Failed to fetch country');
        }
        const data: IpApiResponse = await response.json();
        setCountry(data.country_code);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch country');
        setCountry('EG'); // Fallback to US if there's an error
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  return { country, loading, error };
};