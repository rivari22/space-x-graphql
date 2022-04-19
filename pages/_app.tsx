import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { clientGraphql } from "../graphql/setup";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={clientGraphql}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
