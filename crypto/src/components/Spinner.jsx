import { BarLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const Spinner = ({ color = 'green', loading }) => {
  return (
    <div>
      <BarLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Spinner;
