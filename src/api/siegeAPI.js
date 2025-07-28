// src/api/siegeAPI.js

const BASE_URL = 'https://example-r6-api.com'; // replace with real API

export async function fetchOperators() {
  const response = await fetch(`${BASE_URL}/operators`);
  if (!response.ok) throw new Error('Failed to fetch operators');
  return response.json();
}

export async function fetchMaps() {
  const response = await fetch(`${BASE_URL}/maps`);
  if (!response.ok) throw new Error('Failed to fetch maps');
  return response.json();
}

// Add other API functions here
