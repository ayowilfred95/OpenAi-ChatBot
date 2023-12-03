// pages/_app.js
import { AppProps } from 'next/app';
import Navbar from './components/Navbar';
import './globals.css';

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
};

