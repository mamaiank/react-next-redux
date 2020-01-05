import React from 'react'
import App from 'next/app'
import Head , { Container } from 'next/head'




class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    return {
        pageProps: {
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        }
    };
  }

  render() {
    const { Component, pageProps , store } = this.props
    return (
      <>
      <Head>
        <title>HOME2ND</title>
      </Head>
    
      {/* <Container> */}
          <Component {...pageProps} />
      {/* </Container> */}
      
      </>
    )
  }
}


export default (MyApp);