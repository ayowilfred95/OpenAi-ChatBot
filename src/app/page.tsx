// pages/_app.js
import { AppProps } from 'next/app';
import Navbar from './components/Navbar';
import './globals.css';

function MyApp({ Component, pageProps}: AppProps) {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default MyApp;
