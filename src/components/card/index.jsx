import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchData, analysisAttributes } from "../../utils/helper";
import { setEndPoint } from "../../actions/index";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import {
  StarWarCardHeader,
  StarWarCardContent,
  StarWarCardTitle,
  StarWarCardContainer,
  LoadingContainer,
  ErrorWrapper
} from "../../utils/styledComponent";
let StarWarCard = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /**
   * init component
   */
  const init = async () => {
    let result = await fetchData(props.url).catch(e => {
      setError(true)
    });

    setData(analysisAttributes(result));
    setLoading(false);
  };

  /**
   * when props.url change init component
   */
  useEffect(() => {
    setLoading(true);
    init();
  }, [props.url]);

  /**
   * render non array data
   */
  const renderData = () => {
    return (
      <Row>
        {data.single &&
          data.single.map(attr => {
            /* istanbul ignore else */
            if (attr !== `name` && attr !== `title`) {
              return (
                <Col sm={12} md={12} lg={12}>
                  <StarWarCardContainer>
                    <StarWarCardTitle>{attr}</StarWarCardTitle> :{" "}
                    <StarWarCardContent>{data.values[attr]}</StarWarCardContent>
                  </StarWarCardContainer>
                </Col>
              );
            }
          })}
      </Row>
    );
  };

  return (
    <a
      test-id="star-war-card-link"
      style={{ cursor: "pointer" }}
      onClick={() => !error && props.setEndPoint({ url: props.url })}
    >
      <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", margin: `5px 0`}}>
        <StarWarCardHeader>
          {!error && data.values && (data.values.name || data.values.title)}
          {error && `Loading Error`}
        </StarWarCardHeader>
        <Card.Body>
          {!error && loading && (
            <LoadingContainer>
              <Spinner animation="border" variant="light" />
            </LoadingContainer>
          )}
          {!error && !loading && <Card.Text>{renderData()}</Card.Text>}
          {error && <ErrorWrapper src={`${window.location.origin.toString()}/public/error.jpg`}></ErrorWrapper>}
        </Card.Body>
      </Card>
    </a>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dipatch => {
  return {
    setEndPoint: data => dipatch(setEndPoint(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StarWarCard);
