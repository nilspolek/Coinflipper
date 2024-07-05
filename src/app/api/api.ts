const backend = 'http://localhost:3000/';

export async function getRandom(n: number, min: number, max: number) {
  const data = {
    jsonrpc: '2.0',
    method: 'generateIntegers',
    params: {
      apiKey: '69108fbd-3368-4cdb-b181-aedff90ee76b',
      n: n,
      min: min,
      max: max,
    },
    id: 1,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      'https://api.random.org/json-rpc/4/invoke',
      options,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    return responseData.result.random.data;
  } catch (error) {
    console.error('Error:', error);
    return 3;
  }
}

async function getCard() {
  const data = {
    jsonrpc: '2.0',
    method: 'generateIntegers',
    params: {
      apiKey: '69108fbd-3368-4cdb-b181-aedff90ee76b',
      n: 1,
      min: 1,
      max: 52,
    },
    id: 1,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      'https://api.random.org/json-rpc/4/invoke',
      options,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = [
      'Ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King',
    ];

    const suitIndex = Math.floor((responseData.result.random.data[0] - 1) / 13);
    const rankIndex = (responseData.result.random.data[0] - 1) % 13;

    const suit = suits[suitIndex];
    const rank = ranks[rankIndex];

    return `${rank} of ${suit}`;
  } catch (error) {
    console.error('Error:', error);
    return 3;
  }
}
export async function getNumbersFromAPI(apiEndpoint : string) {
  try {
    const response = await fetch(backend+apiEndpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.numbers;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;  // Return null or handle error appropriately
  }
}

