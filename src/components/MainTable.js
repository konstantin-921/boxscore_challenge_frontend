import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import socketIOClient from 'socket.io-client'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import MlbSideTable from './MlbSideTable'
import NbaSideTable from './NbaSideTable'
import MlbFooter from './MlbFooter'
import NbaFooter from './NbaFooter'

const styles = theme => ({
  tableCell: {
    paddingRight: 10,
    paddingLeft: 10,
    border: '0.5px solid #e0e0e0',
    textAlign: 'center'
  }
});

class MainTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      error: null,
      loading: true,
    }
  }

  componentDidMount() {
    const { league } = this.props
    const socket = socketIOClient('http://localhost:4444/')
    socket.on(league, function (response) {
      const game = JSON.parse(response.data)
      this.setState({
        game
      })
    }.bind(this));
    
    axios.get('http://localhost:4444/api/games', { params: { league }})
    .then(response => {
      this.setState({
        loading: false,
        game: response.data,
      })
    })
    .catch(err => {
      console.error(err);
      this.setState({
        error: err,
        loading: false
      })
    })
  }

  getSideTable = (league) => {
    const LEAGUE = {
      MLB: <MlbSideTable data={this.state.game} />,
      NBA: <NbaSideTable data={this.state.game} />
    }
    return LEAGUE[league]
  }
  
  getFooter = (league) => {
    const FOOTER = {
      MLB: <MlbFooter data={this.state.game} />,
      NBA: <NbaFooter data={this.state.game} />
    }
    return FOOTER[league]
  }
  
  render() {
    console.log('====================================');
    console.log('render');
    console.log('====================================');
    const { loading, game } = this.state
    if(loading) { return null }
    const { classes, league } = this.props
    const periodsAway = game.away_period_scores
    const periodsHome = game.home_period_scores
    const awayTeam = game.away_team.abbreviation
    const homeTeam = game.home_team.abbreviation
    const renderLeague = this.getSideTable(league)
    const footer = this.getFooter(league)
    return (
      <div>
        <React.Fragment>
          <Grid container spacing={0} direction="row" alignItems="center" justify="center">
            <Grid item xs={9}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableCell} style={{ backgroundColor: '#f0f0f0' }}></TableCell>
                      {periodsAway.map((item, index) => {
                        return <TableCell className={classes.tableCell} key={index}>{index + 1}</TableCell>
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className={classes.tableCell} style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>{awayTeam}</TableCell>
                      {periodsAway.map((item, index) => {
                        return <TableCell className={classes.tableCell} key={index}>{item}</TableCell>
                      })}
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCell} style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>{homeTeam}</TableCell>
                      {periodsHome.map((item, index) => {
                        return <TableCell className={classes.tableCell} key={index}>{item}</TableCell>
                      })}
                    </TableRow>
                  </TableBody>
                </Table>
            </Grid>
            {renderLeague}
          </Grid>
          {footer}          
        </React.Fragment>
      </div>
    );
  }
}

MainTable.propTypes = {
  league: PropTypes.string.isRequired,
};

export default withStyles(styles)(MainTable)