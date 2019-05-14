const server = () => {
  const socket = {
    string: JSON.stringify(
      {
        away_period_scores: [0, 0, 2, 1, 0, 0, 0, 0, 0],
        home_period_scores: [0, 2, 0, 0, 0, 0, 1, 0, 1],
        away_team: {
          abbreviation: "SEA"
        },
        home_team: {
          abbreviation: "LAA"
        },
        socket: true,
        api: false
    }
    ),
    on: (league, cb) => {
      const response = {
        data: socket.string
      };
      return cb(response)
    }
  }
  return socket
}

export default server;