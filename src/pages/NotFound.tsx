import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="page-width">
        <section className="not-found">
          <div>
            <span className="eyebrow">A small detour</span>
            <h1>404</h1>
            <h2>This page has wandered off.</h2>
            <p>
              We couldn’t find the page you were looking for. Let’s get you
              back to the beginning.
            </p>
            <Link to="/" className="button button--navy">
            Return to Homepage
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFound;