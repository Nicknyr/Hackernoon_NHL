import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchRoster} from '../actions/fetchRosterAction';

const Styles = styled(Container)`
  height: 100%;
  width: 100%;

  h3 {
    margin-top: 1em;
  }

  h5 {
    margin-bottom: 1em;
  }

  .roster-ul {
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

class Roster extends Component {

  componentDidMount = () => {
    this.props.fetchRoster();
  }

  render() {
    const rosterData = this.props.roster.roster;

    const roster = rosterData.map((roster, key) => {
      return(
        <tr>
          <td key={key}>{roster.person.fullName}</td>
          <td key={key}>{roster.person.link}</td>
        </tr>
      );
    });

    return(
      <Styles>
        <Container>
          <Row>
            <Col>
              <h3 className="text-center">Retrieving Rangers Roster from the NHL API</h3>
              <h5 className="text-center">API endpoint: <code>'https://statsapi.web.nhl.com/api/v1/teams/3/roster'</code></h5>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={{span: 6, offset: 3}}>
              <Table striped bordered hover size="sm" variant="dark">
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>API ID</th>
                  </tr>
                </thead>
                <tbody>
                  {roster}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = state => ({
  roster: state.fetchRosterReducer
});

const mapDispatchToProps = dispatch => ({
  fetchRoster: () => dispatch(fetchRoster())
});

export default connect(mapStateToProps, mapDispatchToProps)(Roster);
