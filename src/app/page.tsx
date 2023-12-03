import { NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import RootLayout from './layouts';  // Import your custom layout
import Navbar from './components/Navbar';  // Import your Navbar component
import './globals.css';

const Page: NextPage<AppProps> = ({ Component, pageProps }) => {
  // Your component logic here
  return (
    <RootLayout>
      <Navbar />
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default Page;
