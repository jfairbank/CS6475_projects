import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { scenes } from '../data/scenes';

import {
  Button,
  Col,
  Jumbotron,
  Row,
} from 'react-bootstrap';

const Index = () => (
  <Jumbotron>
    <h2>CS6475 Projects</h2>

    <h3>Jeremy Fairbank</h3>

    <p>
      This site hosts my miscellaneous projects for CS6475 Computational
      Photography for the OMSCS program at Georgia Tech.
    </p>

    <p>
      To view a project, please click on a link in the header or below.
    </p>

    <hr />

    <h4>Photospheres:</h4>

    <Row>
      <Col xs={12} sm={4}>
        {scenes.map(scene => (
          <LinkContainer
            key={scene.name}
            to={`scene/${scene.name}`}
          >
            <Button
              bsSize="large"
              block
            >
              {scene.title}
            </Button>
          </LinkContainer>
        ))}
      </Col>
    </Row>
  </Jumbotron>
);

export default Index;
