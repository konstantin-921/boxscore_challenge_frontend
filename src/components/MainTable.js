import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
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

  getSideTable = (league) => {
    const LEAGUE = {
      MLB: <MlbSideTable data={this.props.data} />,
      NBA: <NbaSideTable data={this.props.data} />
    }
    return LEAGUE[league]
  }
  
  getFooter = (league) => {
    const FOOTER = {
      MLB: <MlbFooter data={this.props.data} />,
      NBA: <NbaFooter data={this.props.data} />
    }
    return FOOTER[league]
  }
  
  render() {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    const { classes } = this.props
    const { league } = this.props.data
    const periodsAway = this.props.data.away_period_scores
    const periodsHome = this.props.data.home_period_scores
    const awayTeam = this.props.data.away_team.abbreviation
    const homeTeam = this.props.data.home_team.abbreviation
    const renderLeague = this.getSideTable(league)
    const footer = this.getFooter(league)
    return (
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
    );
  }
}

MainTable.propTypes = {
  data: PropTypes.shape({
    away_period_scores: PropTypes.arrayOf(PropTypes.number).isRequired,
    home_period_scores: PropTypes.arrayOf(PropTypes.number).isRequired,
    away_team: PropTypes.shape({
      abbreviation: PropTypes.string.isRequired,
    }).isRequired,
    home_team: PropTypes.shape({
      abbreviation: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(MainTable);