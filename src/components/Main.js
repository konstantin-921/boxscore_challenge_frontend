import React from 'react'
import MainTable from './MainTable'

class Main extends React.Component {

  render() {
    return (
      <div style={{minWidth: '410px', maxWidth: '1000px', margin: 'auto'}}>
        <MainTable league='MLB' />
        <MainTable league="NBA" />
      </div>
    );
  }
}

export default Main