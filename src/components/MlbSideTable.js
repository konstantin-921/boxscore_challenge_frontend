import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

const styles = theme => ({
  tableCell: {
    paddingRight: 0,
    paddingLeft: 5,
    textAlign: 'center',
    border: '0.5px solid #e0e0e0',
    borderLeft: 'none',
    backgroundColor: '#f0f0f0',
    '&:last-child': {
      paddingRight: 0
    },
  },
});

class MlbSideTable extends React.Component {
  render() {
    const { classes } = this.props
    const data = this.props.data
    const runsAway = data.away_batter_totals.runs
    const runsHome = data.home_batter_totals.runs
    const hitsAway = data.away_batter_totals.hits
    const hitsHome = data.home_batter_totals.hits
    const errorAway = data.away_errors
    const errorHome = data.home_errors
    return (
      <Grid item xs={3}> 
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>R</TableCell>
              <TableCell className={classes.tableCell}>H</TableCell>
              <TableCell className={classes.tableCell}>E</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell}>{runsAway}</TableCell>
              <TableCell className={classes.tableCell}>{hitsAway}</TableCell>
              <TableCell className={classes.tableCell}>{errorAway}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>{runsHome}</TableCell>
              <TableCell className={classes.tableCell}>{hitsHome}</TableCell>
              <TableCell className={classes.tableCell}>{errorHome}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    );
  }
}

export default withStyles(styles)(MlbSideTable);