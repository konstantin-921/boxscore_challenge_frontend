module.exports = {
  get: () => {
    return [ 
      Promise.resolve({
        away_period_scores: [0, 0, 2, 1, 0, 0, 0, 0, 0],
        home_period_scores: [0, 2, 0, 0, 0, 0, 1, 0, 1],
        away_team: {
          abbreviation: "SEA"
        },
        home_team: {
          abbreviation: "LAA"
        },
      }),
      Promise.resolve({
        away_period_scores: [26, 23, 22, 35],
        home_period_scores: [31, 28, 36, 26],
        away_team: {
          abbreviation: "OKC"
        },
        home_team: {
          abbreviation: "MIA"
        },
      })
    ]
  }
};