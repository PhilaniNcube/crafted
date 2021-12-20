import { Fragment } from 'react';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
