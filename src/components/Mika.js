import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchMika} from '../actions/fetchMikaAction';

const Styles = styled(Container)`
  height: 100%;
  width: 100%;

  .mika-ul {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding-left: 0;


    li {
      text-align: left;
    }
  }
`;

class Mika extends Component {

  componentDidMount = () => {
    this.props.fetchMika();
  }

  render() {
    const mikaData = this.props.mika.mika;

    const mika = mikaData.map((mika, key) => {
      return(
        <tr key={key}>
          <td>{mika.fullName}</td>
          <td>{mika.birthCity}</td>
          <td>{mika.birthCountry}</td>
          <td>{mika.currentAge}</td>
          <td>{mika.height}</td>
          <td>{mika.weight}</td>
          <td>{mika.primaryNumber}</td>
          <td>{mika.id}</td>
          <td>{mika.link}</td>
          <td>{mika.primaryPosition.name}</td>
          <td>{mika.currentTeam.name}</td>
        </tr>
      );
    });

    return(
      <Styles>
        <Container>
          <Row>
            <h3>Retrieving Mika Zibanejad info from the NHL API</h3>
            <h4>API Endpoint: <code>'https://statsapi.web.nhl.com/api/v1/people/8476459'</code></h4>
          </Row>
          <Col xs={12} md={{span: 6, offset: 3}}>
            <Table striped bordered hover size="sm" variant="dark">
              <thead>
                <tr>
                  <th>Mika Zibanejad Info</th>
                </tr>
              </thead>
              <tbody>
                {mika}
              </tbody>
            </Table>
          </Col>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = state => ({
  mika: state.fetchMikaReducer
});

const mapDispatchToProps = dispatch => ({
  fetchMika: () => dispatch(fetchMika())
});

export default connect(mapStateToProps, mapDispatchToProps)(Mika);
