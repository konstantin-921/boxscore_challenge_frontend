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
    paddingRight: 10,
    paddingLeft: 10
  },
});

class NbaSideTable extends React.Component {
  render() {
    const { classes } = this.props
    const data = this.props.data
    const pointsAway = data.away_totals.points
    const pointsHome = data.home_totals.points
    return (
      <Grid item xs={1}> 
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>P</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell>{pointsAway}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{pointsHome}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </Grid>
    );
  }
}

export default withStyles(styles)(NbaSideTable);