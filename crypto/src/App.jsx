import { useState, useEffect, use } from 'react';
const API_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fethcCoins = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fethcCoins();
  }, []);
  return (
    <div>
      <h1> Crypto Dash</h1>
    </div>
  );
};

export default App;
