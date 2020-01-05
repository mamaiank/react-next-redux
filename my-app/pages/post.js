import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Layout from '../components/Layout';
import fetch from "isomorphic-unfetch";

const HtmlApp = (value) => {
  return (
    <>
      <Jumbotron>
        <h1>{value.data.title}</h1>
        <p className="content-html" dangerouslySetInnerHTML={{ __html: value.data.body }} />
      </Jumbotron>
    </>
  );
}

class Post extends Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    try {
      const [RES_DATA] = await Promise.all([
        fetch(
          "https://jsonplaceholder.typicode.com/posts/" +
          id,
          {
            method: "GET",
          }
        )
      ]);

      const RESULT_DATA = await RES_DATA.json();

      return {
        data: RESULT_DATA,
        dataStatus: true,
      };
    } catch (error) {
      console.log("ERROR From Catch ", error);
    }
  }
  render() {
    const { data, dataStatus } = this.props;
    return (
      <>
        <Layout>
          {dataStatus ? <HtmlApp data={data} /> : <h1>Loading</h1>}
        </Layout>
      </>
    );
  }
}

export default Post;