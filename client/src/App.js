// Import react
import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

// Import components
import Slides from "./screen/components/Slides";
import Articles from "./screen/components/Articles";

// Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const App = () => {
  return (
    <div className="App py-4">
      <Container>
        <Row>
          <Col>
            <h1 className="h3 text-center mb-5">
              Test for Front-End Engineer for K-Soft
            </h1>

            <Tabs defaultActiveKey="SLIDES">
              <Tab eventKey="SLIDES" title="SLIDES">
                <Slides />
              </Tab>
              <Tab eventKey="ARTICLES" title="ARTICLES">
                <Articles />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
