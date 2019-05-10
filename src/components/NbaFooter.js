import React from 'react'
import PropTypes from 'prop-types'
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
              <div className={classes.container} style={{ backgroundColor: '#006400' }}>{teamAway}</div>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.middleContainer}>{statusGeneral}</div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.container} style={{ backgroundColor: '#8B0000' }}>{teamHome}</div>
            </Grid>
        </Grid>
      </div>
    );
  }
}

NbaFooter.propTypes = {
  data: PropTypes.shape({
    away_team: PropTypes.shape({
      last_name: PropTypes.string.isRequired,
    }).isRequired,
    home_team: PropTypes.shape({
      last_name: PropTypes.string.isRequired,
    }).isRequired,
    event_information: PropTypes.shape({
      status: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(NbaFooter);