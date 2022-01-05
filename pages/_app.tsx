//import '../styles/globals.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
//import { AppProps } from 'next/dist/next-server/lib/router/router';
import { AppProps } from 'next/app';


const cache = new InMemoryCache();
console.log("process.env.NEXT_PUBLIC_BACKEND_URL:",process.env.NEXT_PUBLIC_BACKEND_URL);
//http://localhost:3005

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  cache,
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
  
  export default MyApp;