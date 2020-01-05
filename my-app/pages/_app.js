import React from 'react'
import App from 'next/app'
import Head , { Container } from 'next/head'
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../lib/redux/redux'

class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    return {
        pageProps: {
            // Call page-level getInitialProps
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        }
    };
  }


  render() {
    const { Component, pageProps , store } = this.props
    return (
      <>
      <Head>
        <title>React Next Redux</title>
      </Head>
      {/* <Container> */}
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      {/* </Container> */}
      </>
    )
  }
}

export default withRedux(initStore)(MyApp);