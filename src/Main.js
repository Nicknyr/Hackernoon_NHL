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
  height: 100%;
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
    const teamData = this.props.teams.teams;

    const teams = teamData.map((team, key) => {
      return(
        <div key={key}>{team.name}</div>
      );
    });

    const rosterData = this.props.roster.roster;

    const roster = rosterData.map((roster, key) => {
      return(
        <div key={key}>{roster.person.fullName}</div>
      );
    });

    const mikaData = this.props.mika.mika;

    const mika = mikaData.map((mika, key) => {
      return(
        <div key={key}>
          <ul>
            <li>{mika.fullName}</li>
            <li>{mika.birthCity}</li>
            <li>{mika.birthCountry}</li>
            <li>{mika.currentAge}</li>
            <li>{mika.height}</li>
            <li>{mika.weight}</li>
            <li>{mika.primaryNumber}</li>
            <li>{mika.id}</li>
            <li>{mika.link}</li>
            <li>{mika.primaryPosition.name}</li>
            <li>{mika.currentTeam.name}</li>
          </ul>
        </div>
      );
    });

  const assists = this.props.mikaStats.assists;
  const blocked = this.props.mikaStats.blocked;
  const evenTimeOnIce = this.props.mikaStats.evenTimeOnIce;
  const evenTimeOnIcePerGame = this.props.mikaStats.evenTimeOnIcePerGame;
  const faceOffPct= this.props.mikaStats.faceOffPct;
  const gameWinningGoals = this.props.mikaStats.gameWinningGoals;
  const games = this.props.mikaStats.games;
  const goals = this.props.mikaStats.goals;
  const hits = this.props.mikaStats.hits;
  const overTimeGoals = this.props.mikaStats.overTimeGoals;
  const penaltyMinutes = this.props.mikaStats.penaltyMinutes;
  const pim = this.props.mikaStats.pim;
  const plusMinus = this.props.mikaStats.plusMinus;
  const points = this.props.mikaStats.points;
  const powerPlayGoals = this.props.mikaStats.powerPlayGoals;
  const powerPlayPoints = this.props.mikaStats.powerPlayPoints;
  const powerPlayTimeOnIce = this.props.mikaStats.powerPlayTimeOnIce;
  const powerPlayTimeOnIcePerGame = this.props.mikaStats.powerPlayTimeOnIcePerGame;
  const shifts = this.props.mikaStats.shifts;
  const shortHandedGoals = this.props.mikaStats.shortHandedGoals;
  const shortHandedPoints = this.props.mikaStats.shortHandedPoints;
  const shortHandedTimeOnIce = this.props.mikaStats.shortHandedTimeOnIce;
  const shortHandedTimeOnIcePerGame = this.props.mikaStats.shortHandedTimeOnIcePerGame;
  const shotPct = this.props.mikaStats.shotPct;
  const shots = this.props.mikaStats.shots;
  const timeOnIce = this.props.mikaStats.timeOnIce;
  const timeOnIcePerGame = this.props.mikaStats.timeOnIcePerGame;

    return(
      <Styles>
        <Container>
          {teams}
          <br/>
          {roster}
          <br/>
          {mika}
          <br/>
          {assists}
          <br/>
          {blocked}
          <br/>
          {evenTimeOnIce}
          <br/>
          {evenTimeOnIcePerGame}
          <br/>
          {faceOffPct}
          <br/>
          {gameWinningGoals}
          <br/>
          {games}
          <br/>
          {goals}
          <br/>
          {hits}
          <br/>
          {overTimeGoals}
          <br/>
          {penaltyMinutes}
          <br/>
          {pim}
          <br/>
          {plusMinus}
          <br/>
          {points}
          <br/>
          {powerPlayGoals}
          <br/>
          {powerPlayPoints}
          <br/>
          {powerPlayTimeOnIce}
          <br/>
          {powerPlayTimeOnIcePerGame}
          <br/>
          {shifts}
          <br/>
          {shortHandedGoals}
          <br/>
          {shortHandedPoints}
          <br/>
          {shortHandedTimeOnIce}
          <br/>
          {shortHandedTimeOnIcePerGame}
          <br/>
          {shotPct}
          <br/>
          {shots}
          <br/>
          {timeOnIce}
          <br/>
          {timeOnIcePerGame}
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
