import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  container: {
    textAlign: 'center',
    fontWeight: 'bold',
    height: '80px',
    color: '#ffffff',
    fontSize: '30px'
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '80px',
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0'
  }
});

class MlbFooter extends React.Component {

  render() {
    const { classes, data } = this.props
    const teamAway = data.away_team.last_name
    const teamHome = data.home_team.last_name
    const hitsAway = data.away_batter_totals.hits
    const batsAway = data.away_batter_totals.at_bats
    const hitsHome = data.home_batter_totals.hits
    const batsHome = data.home_batter_totals.at_bats
    const statusGeneral = data.event_information.status === 'completed' ? 'BTM' : 'BTL'
    const statusPeriod = data.event_information.status === 'completed' ? '9TH' : 'another'
    return (
      <div style={{ marginBottom: '100px' }}>
        <Grid container spacing={0} direction="row" alignItems="center" justify="center">
            <Grid item xs={5}>
              <div className={classes.container} style={{ backgroundColor: 'blue' }}>
                <div style={{ paddingTop: 10 }}>{teamAway}</div>
                <div style={{ fontSize: '15px' }}>{hitsAway}-{batsAway}</div>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.middleContainer}>
                <div>{statusGeneral}</div>
                <div>{statusPeriod}</div>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div className={classes.container} style={{ backgroundColor: 'red' }}>
                <div style={{ paddingTop: 10 }}>{teamHome}</div>
                <div style={{ fontSize: '15px' }}>{hitsHome}-{batsHome}</div>
              </div>
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MlbFooter);