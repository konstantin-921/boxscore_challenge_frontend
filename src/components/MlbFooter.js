import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  container: {
    textAlign: 'center',
    height: '80px', 
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#ffffff'
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
    // const status = data.event_information.
    console.log('====================================');
    console.log(this.props.data);
    console.log('====================================');
    return (
      <div style={{ marginBottom: '100px', width: '100%', minWidth: '410px', }}>
        <Grid container spacing={0} direction="row" alignItems="center" justify="center">
            <Grid item xs={5}>
              <div className={classes.container} style={{backgroundColor: 'blue'}}>
                <div style={{ paddingTop: 10 }}>{teamAway}</div>
                <div style={{ fontSize: '15px' }}>{hitsAway}-{batsAway}</div>
              </div>
              
            </Grid>
            <Grid item xs={2}>
              <div className={classes.container} style={{ backgroundColor: 'white', borderBottom: '0.5px solid #e0e0e0' }}>

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