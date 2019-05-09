import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  container: {
    textAlign: 'center',
    fontWeight: 'bold',
    height: '80px',
    color: '#ffffff',
    fontSize: '30px',
    lineHeight: '80px',
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

class NbaFooter extends React.Component {
  render() {
    const { classes, data } = this.props
    const teamAway = data.away_team.last_name
    const teamHome = data.home_team.last_name
    const statusGeneral = data.event_information.status === 'completed' ? 'FINAL' : 'In progress'
    return (
      <div style={{ marginBottom: '100px' }}>
        <Grid container spacing={0} direction="row" alignItems="center" justify="center">
            <Grid item xs={4}>
              <div className={classes.container} style={{ backgroundColor: 'blue' }}>{teamAway}</div>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.middleContainer}>{statusGeneral}</div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.container} style={{ backgroundColor: 'red' }}>{teamHome}</div>
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(NbaFooter);