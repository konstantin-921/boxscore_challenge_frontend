import React from 'react'
import Grid from '@material-ui/core/Grid'

class NbaFooter extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: '100px' }}>
        <Grid container spacing={0} direction="row" alignItems="center" justify="center">
            <Grid item xs={4}>
              <div style={{textAlign: 'center', backgroundColor: 'blue', height: 80}}></div>
            </Grid>
            <Grid item xs={2}>
              <div style={{textAlign: 'center', backgroundColor: 'white', height: 80}}></div>
            </Grid>
            <Grid item xs={4}>
              <div style={{textAlign: 'center', backgroundColor: 'red', height: 80}}></div>
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default NbaFooter;