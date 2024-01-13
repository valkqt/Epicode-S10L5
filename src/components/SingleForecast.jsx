import {Row, Col} from "react-bootstrap"

function SingleForecast(props) {
    return (
            <Row>
              <Col>{props.hour}</Col>
              <Col>{props.temp}</Col>
              <Col>{props.weather}</Col>
              <Col>{props.rain}</Col>
              <Col>{props.wind}</Col>
            </Row>
    );
  }
  
  export default SingleForecast;
  