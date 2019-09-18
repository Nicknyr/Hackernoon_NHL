import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table} from 'react-bootstrap';

const STYLES = styled('div')`
  p {
    font-size: 1.5em;
    margin: 2em;
  }
`;

const Intro = () => {
  return(
    <STYLES>
    <Container>
      <Row>
        <Col xs={12} md={{span: 8, offset: 2}}>
          <p className="text-center">A couple example API calls to the NHL API and examples of the data returned. This site is a companion to my Hackernoon article, <span><a href="https://hackernoon.com/retrieving-hockey-stats-from-the-nhls-undocumented-api-zz3003wrw">Retrieving Player Stats from the NHL's undocumented REST API.</a></span></p>
        </Col>
      </Row>
    </Container>
    </STYLES>
  );
}

export default Intro;
