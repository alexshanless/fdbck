import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import Spinner from '../components/Spinner';
import CoinChart from '../components/CoinChart';
const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error('Failed to fetch  the data');
        const data = await res.json();
        console.log(data);
        setCoin(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);

  return (
    <div className='coin-details-container'>
      <Link to='/'>Go to home</Link>

      <h1 className='coin-details-title'>
        {coin ? `${coin.name} (${coin.symbol.toUpperCase()})` : 'Coin details'}
      </h1>

      {loading && <Spinner loading={loading} />}
      {error && <div className='error'>{error}</div>}

      {!loading && !error && (
        <>
          <div>
            <img
              src={coin.image.large}
              alt={coin.name}
              className='coin-details-image'
            />
            <p>{coin.description.en.split('. ')[0] + '.'}</p>
            <h3>Rank: #{coin.market_cap_rank}</h3>
            <h3>
              Current price: $
              {coin.market_data.current_price.usd.toLocaleString()}
            </h3>
            <h4>
              Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}
            </h4>
            <h4>24h High: ${coin.market_data.high_24h.usd.toLocaleString()}</h4>
            <h4>24h Low: ${coin.market_data.low_24h.usd.toLocaleString()}</h4>
          </div>
          <CoinChart coinId={coin.id} />
          <div className='coin-details-links'>
            {coin.links.homepage[0] && (
              <p>
                <a
                  href={coin.links.homepage[0]}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Official Website
                </a>
              </p>
            )}
            {coin.links.blockchain_site[0] && (
              <p>
                <a
                  href={coin.links.blockchain_site[0]}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blockchain Site
                </a>
              </p>
            )}
            {coin.categories.length > 0 && (
              <p>Categories: {coin.categories.join(', ')}</p>
            )}
          </div>
        </>
      )}

      {!loading && !error && !coin && <p>No data found</p>}
    </div>
  );
};

export default CoinDetailPage;
