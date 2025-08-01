const API_URL = import.meta.env.VITE_COIN_API_URL;
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

const CoinChart = ({ coinId }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch(
        `${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`
      );
      if (!res.ok) throw new Error('Failed to fetch the data');
      const data = await res.json();
      const prices = data.prices.map(price => ({
        x: new Date(price[0]),
        y: price[1],
      }));
      setChartData({
        datasets: [
          {
            label: 'Prices (USD)',
            data: prices,
            fill: true,
            borderColor: 'green',
            backgroundColor: 'darkblue',
            tension: 0.3,
            pointRadius: 0,
          },
        ],
      });
      setLoading(false);
    };
    fetchPrices();
  }, [coinId]);

  return (
    <div style={{ marginTop: '30px' }}>
      {loading || !chartData ? (
        <Spinner />
      ) : (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: { mode: 'index', intersect: false },
            },
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 7,
                },
              },
              y: {
                ticks: {
                  callback: value => `$${value.toLocaleString()}`,
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default CoinChart;
