import React from 'react'
import axios from 'axios'
import socketIOClient from "socket.io-client"
import MainTable from './MainTable'

const socket = socketIOClient('http://localhost:4444/');
socket.on('news', function (data) {
  console.log(data);
});

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