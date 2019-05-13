import React from 'react'
import axios from 'axios'
import socketIOClient from "socket.io-client"
import MainTable from './MainTable'

const socket = socketIOClient('http://localhost:4444/');
socket.on('news', function (data) {
  console.log(data);
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMLB: {},
      dataNBA: {},
      error: null,
      loading: true,
    }
  }

  componentDidMount() {
    socket.on('my other event', function(data){
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    });
    const p1 = axios.get('http://localhost:4444/api/games', { params: { league: 'MLB' }})
    const p2 = axios.get('http://localhost:4444/api/games', { params: { league: 'NBA' }})

    Promise.all([p1, p2])
    .then( ([res1, res2]) => {
      this.setState({
        loading: false,
        dataNBA: res2.data,
        dataMLB: res1.data
      })
    })
    .catch(err => {
      console.error(err);
      this.setState({
        error: err,
        loading: false
      })
    })
  }

  render() {
    const data = this.state;
    const { loading } = this.state;
    return (
      // <div>
      //   <MainTable league="NBA" />
      //   <MainTable league="MLB" />
      // </div>
      <div>
        {!loading ? 
        <React.Fragment>
          <div style={{minWidth: '410px', maxWidth: '1000px', margin: 'auto'}}>
            <MainTable league='MLB' data={data.dataMLB} />
            <MainTable league='NBA' data={data.dataNBA} />
          </div>
        </ React.Fragment> : null
        }
      </div>
    );
  }
}

export default Main