import React, { Component } from 'react';
import Home from '../components/Home';
import Layout from '../components/Layout';



class index extends Component {
    render() {
        return (
            <>
                <Layout>
                    <div className="App">
                        <Home />
                    </div>
                </Layout>
            </>
        );
    }
}

export default index;
