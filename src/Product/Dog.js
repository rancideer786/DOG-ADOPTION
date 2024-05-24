// dogApi.js
const API_KEY = 'JyQZM1ZKEYvD+TPSVTthgQ==vayuywqFAZHfvcC5';
const DOG_API_URL = 'https://api.example.com/dogs';

async function fetchDogData() {
  try {
    const response = await fetch(`${DOG_API_URL}?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dog data:', error);
  }
}

export default fetchDogData;
