import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from "react-redux";
import fetch from "isomorphic-unfetch";
import Layout from '../components/Layout';

const mapStateToProps = (state, ownProps) => ({
    isMobile: state.isMobile,
});

const HtmlApp = (value) => {
    return (
        <Container>
            <Row>
                {
                    value.data.map((result, key) => (
                        <Col xs={12} md={6} lg={4} key={key}>
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><a href={`/post/${result.id}`}>{result.title}</a></Card.Title>
                                    <span className="content-html" dangerouslySetInnerHTML={{ __html: result.body }} />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

class index extends Component {
    static async getInitialProps() {
        try {
            const [RES_DATA] = await Promise.all([
                fetch(
                    "https://jsonplaceholder.typicode.com/posts",
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
    resize() {
        if (this.props.isMobile != window.innerWidth <= 767) {
            this.props.dispatch({
                type: "CHANGE_STATE",
                stateName: "isMobile",
                value: window.innerWidth <= 767
            });
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
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

export default connect(mapStateToProps)(index);
