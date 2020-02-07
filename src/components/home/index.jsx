import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchData, analysisAttributes, randomPick } from "../../utils/helper";
import { URLS } from "../../utils/enum";
import StarWarCard from "../card/index.jsx";
import Spinner from "react-bootstrap/Spinner";
import {
  HomePageLoadingContainer,
  CategoryContainer,
  HeaderContainer,
  TitleContainer,
  HeaderTitle,
  HeaderContent,
  HeaderWrapper
} from "../../utils/styledComponent";
let Home = props => {
  const [data, setData] = useState({
    loading: false
  });

  /**
   * init component, if props.url exist, use it otherwise random pick a url
   */
  const init = async () => {
    setData({
      ...data,
      loading: true
    });

    let data = await fetchData(props.url ? props.url : randomPick(URLS));

    setData({
      ...data,
      ...analysisAttributes(props.url ? data : randomPick(data.results))
    });
  };

  useEffect(() => {
    init();
  }, [props.url]);

  /**
   * render non array data
   */
  const renerData = () => {
    return (
      <HeaderContainer>
        <Row>
          {data.single &&
            data.single.map(attr => {
              if (attr == `name` || attr == `title`) {
                return (
                  <Col sm={12} md={12} lg={12}>
                    <TitleContainer test-id="star-war-home-title">
                      {data.values[attr]}
                    </TitleContainer>
                  </Col>
                );
              } else {
                return (
                  <Col sm={12} md={12} lg={12}>
                    <HeaderWrapper><HeaderTitle>{attr}:</HeaderTitle> <HeaderContent>{data.values[attr]}</HeaderContent></HeaderWrapper>
                  </Col>
                );
              }
            })}
        </Row>
      </HeaderContainer>
    );
  };

  /**
   * render array data
   */
  const renderList = () => {
    return (
      data.list &&
      data.list.map(attr => {
        return (
          <Row>
            {data.values && data.values[attr] && data.values[attr].length > 0 && (
              <Col sm={12} md={12} lg={12}>
                <CategoryContainer>{attr.toUpperCase()}</CategoryContainer>
              </Col>
            )}
            {data.values &&
              data.values[attr] &&
              data.values[attr].length > 0 &&
              data.values[attr].map((url) => {
                return (
                  <Col sm={4} md={3} lg={3}>
                    <StarWarCard url={url} />
                  </Col>
                );
              })}
          </Row>
        );
      })
    );
  };

  return (
    <>
      <Container>
        {!data.loading && renerData()}
        {!data.loading && renderList()}
        {data.loading && (
          <HomePageLoadingContainer>
            <Spinner animation="border" variant="light" />
          </HomePageLoadingContainer>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    url: state.endpoint.url
  };
};

const mapDispatchToProps = dipatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
