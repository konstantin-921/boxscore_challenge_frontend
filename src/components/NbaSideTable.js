import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

const styles = theme => ({
  tableCell: {
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: 'center',
    border: '0.5px solid #e0e0e0',
    borderLeft: 'none',
    backgroundColor: '#f0f0f0',
    '&:last-child': {
      paddingRight: 5
    },
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
              <TableCell className={classes.tableCell}>P</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell className={classes.tableCell}>{pointsAway}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCell}>{pointsHome}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </Grid>
    );
  }
}

NbaSideTable.propTypes = {
  data: PropTypes.shape({
    away_totals: PropTypes.shape({
      points: PropTypes.number.isRequired,
    }).isRequired,
    home_totals: PropTypes.shape({
      points: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(NbaSideTable)