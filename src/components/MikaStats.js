import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchMikaStats} from '../actions/fetchMikaStatsAction';

const Styles = styled(Container)`
  height: 100%;
  width: 100%;

  h3 {
    margin-top: 1em;
  }

  h5 {
    margin-bottom: 1em;
  }
`;

class MikaStats extends Component {

  componentDidMount = () => {
    this.props.fetchMikaStats();
  }

  render() {
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
          <Row>
            <Col>
              <h3 className="text-center">Mika Zibanejad's Stats from the 2018-2019 Season</h3>
              <h5 className="text-center">API Endpoint:
                <code>'https://statsapi.web.nhl.com/api/v1/people/8476459/stats?stats=statsSingleSeason&season=20182019'</code>
              </h5>
            </Col>
          </Row>
          <Col md={{span: 6, offset: 3}}>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>Mika Zibanejad Stats - 2018/2019</th>
              </tr>
            </thead>
          <tbody>
            <tr>
              <td>Assists:</td>
              <td>{assists}</td>
            </tr>
            <tr>
              <td>Blocks</td>
              <td>{blocked}</td>
            </tr>
            <tr>
              <td>Even Time on Ice</td>
              <td>{evenTimeOnIce}</td>
            </tr>
            <tr>
              <td>Even Time on Ice Per Game</td>
              <td>{evenTimeOnIcePerGame}</td>
            </tr>
            <tr>
              <td>Faceoff %</td>
              <td>{faceOffPct}</td>
            </tr>
            <tr>
              <td>Game Winning Goals</td>
              <td>{gameWinningGoals}</td>
            </tr>
            <tr>
              <td>Games</td>
              <td>{games}</td>
            </tr>
            <tr>
              <td>Goals:</td>
              <td>{goals}</td>
            </tr>
            <tr>
              <td>Hits</td>
              <td>{hits}</td>
            </tr>
            <tr>
              <td>Overtime Goals</td>
              <td>{overTimeGoals}</td>
            </tr>
            <tr>
              <td>Penalty Minutes</td>
              <td>{penaltyMinutes}</td>
            </tr>
            <tr>
              <td>PIM</td>
              <td>{pim}</td>
            </tr>
            <tr>
              <td>+/-</td>
              <td>{plusMinus}</td>
            </tr>
            <tr>
              <td>Points</td>
              <td>{points}</td>
            </tr>
            <tr>
              <td>Powerplay Goals</td>
              <td>{powerPlayGoals}</td>
            </tr>
            <tr>
              <td>Powerplay Points</td>
              <td>{powerPlayPoints}</td>
            </tr>
            <tr>
              <td>Powerplay Time on Ice</td>
              <td>{powerPlayTimeOnIce}</td>
            </tr>
            <tr>
              <td>Powerplay Time on Ice Per Game</td>
              <td>{powerPlayTimeOnIcePerGame}</td>
            </tr>
            <tr>
              <td>Shifts</td>
              <td>{shifts}</td>
            </tr>
            <tr>
              <td>Shorthanded Goals</td>
              <td>{shortHandedGoals}</td>
            </tr>
            <tr>
              <td>Shorthanded Points</td>
              <td>{shortHandedPoints}</td>
            </tr>
            <tr>
              <td>Shorthanded Time on Ice</td>
              <td>{shortHandedTimeOnIce}</td>
            </tr>
            <tr>
              <td>Shorthanded Time on Ice Per Game</td>
              <td>{shortHandedTimeOnIcePerGame}</td>
            </tr>
            <tr>
              <td>Shot %</td>
              <td>{shotPct}</td>
            </tr>
            <tr>
              <td>Shots</td>
              <td>{shots}</td>
            </tr>
            <tr>
              <td>Time on Ice</td>
              <td>{timeOnIce}</td>
            </tr>
            <tr>
              <td>Time on Ice Per Game</td>
              <td>{timeOnIcePerGame}</td>
            </tr>
          </tbody>
        </Table>
        </Col>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = state => ({
  mikaStats: state.fetchMikaStatsReducer
});

const mapDispatchToProps = dispatch => ({
  fetchMikaStats: () => dispatch(fetchMikaStats())
});

export default connect(mapStateToProps, mapDispatchToProps)(MikaStats);
