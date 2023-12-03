import { NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';

const Page: NextPage<AppProps> = ({ Component, pageProps }) => {
  // Your component logic here
  return <Component {...pageProps} />;
};

export default Page;
