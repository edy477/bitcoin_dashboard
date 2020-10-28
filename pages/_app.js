import '../styles/index.css'
/*
import store from "../components/Store/store";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
*/
/*
import { Provider } from 'react-redux'
import store from "../components/Store/store";

export default function App({ Component, pageProps }) {


  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}*/
import App from "next/app";
import React from "react";
import Layout from "../components/Layout";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default MyApp;