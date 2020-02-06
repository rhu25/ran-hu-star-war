import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { fetchData, analysisAttributes, randomPick } from '../../utils/helper'
import { URLS } from '../../utils/enum'
import StarWarCard from '../card/index.jsx'
import Spinner from 'react-bootstrap/Spinner'
import {
    StarWarCardContainer,
    StarWarCardTitle,
    StarWarCardContent,
    HomePageLoadingContainer,
    CategoryContainer,
    HeaderContainer,
    TitleContainer
} from '../../utils/styledComponent'
let Home = (props) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const init = async () => {
        setLoading(true);
        let result = await fetchData(props.url);
        setData(analysisAttributes(result))
        setLoading(false);
    }

    const random = async () => {
        setLoading(true);
        let data = await fetchData(randomPick(URLS));
        setData(analysisAttributes(randomPick(data.results)));
        setLoading(false);
    }


    useEffect(() => {
        if (props.url){
            init()
        } else {
            random();
        }
    }, [props.url]);

    const fetchSingle = () => {
        return (
            <HeaderContainer>
                <Row>
                    {
                        data.single && data.single.map(attr => {
                            if (attr == `name` || attr == `title`){
                                return <Col sm={12} md={12} lg={12}>
                                    <TitleContainer>{data.values[attr]}</TitleContainer>
                                </Col>
                            } else {
                                return <Col sm={12} md={12} lg={12}>
                                    <StarWarCardContainer>
                                        <StarWarCardTitle>{attr}</StarWarCardTitle> : <StarWarCardContent>{data.values[attr]}</StarWarCardContent>
                                    </StarWarCardContainer>
                                </Col>
                            }
                        })
                    }
                </Row>
            </HeaderContainer>
        )

    }

    const fetchList = () => {
        return data.list && data.list.map(attr => {
            return (
                <Row>
                    {
                        data.values && 
                        data.values[attr] && 
                        data.values[attr].length && 
                        <Col sm={12} md={12} lg={12}><CategoryContainer>{attr}</CategoryContainer></Col>
                    }
                    {
                        data.values && 
                        data.values[attr] && 
                        data.values[attr].length && 
                        data.values[attr].map((url) => {
                            return <Col sm={4} md={3} lg={3}>
                                <StarWarCard url={url} />
                            </Col>
                        })
                    }
                </Row>
            )
            
        })
    }


    return (
        <>
        
            <Container>
                {!loading && fetchSingle()}
                {!loading && fetchList()}

                {
                    loading && <HomePageLoadingContainer>
                    <Spinner animation="border" variant="light" />
                </HomePageLoadingContainer>
                }
            </Container>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        url: state.endpoint.url
    }
}

const mapDispatchToProps = dipatch => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);