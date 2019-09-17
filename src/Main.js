import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchMika} from './actions/fetchMikaAction';
import {fetchMikaStats} from './actions/fetchMikaStatsAction';
import {fetchRoster} from './actions/fetchRosterAction';
import {fetchTeams} from './actions/fetchTeamsAction';

const Styles = styled(Container)`
  background: red;
  height: 100VH;
  width: 100%;
`;

class Main extends Component {

  componentDidMount = () => {
    this.props.fetchMika();
    this.props.fetchMikaStats();
    this.props.fetchTeams();
    this.props.fetchRoster();
  }

  render() {
    const data = this.props.teams.teams;

    const teams = data.map((team, key) => {
      return(
        <div key={key}>{team.name}</div>
      );
    });

    return(
      <Styles>
        <Container>
          {teams}
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = state => ({
  mika: state.fetchMikaReducer,
  mikaStats: state.fetchMikaStatsReducer,
  roster: state.fetchRosterReducer,
  teams: state.fetchTeamsReducer
});

const mapDispatchToProps = dispatch => ({
  fetchMika: () => dispatch(fetchMika()),
  fetchMikaStats: () => dispatch(fetchMikaStats()),
  fetchRoster: () => dispatch(fetchRoster()),
  fetchTeams: () => dispatch(fetchTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
