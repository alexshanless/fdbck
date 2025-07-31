import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className='about'>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        Please check the URL or return to the <Link to='/'>home page</Link>.
      </p>
    </div>
  );
};

export default NotFoundPage;
