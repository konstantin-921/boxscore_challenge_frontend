import React from 'react'
import { shallow } from 'enzyme'
import MainTable from '../components/MainTable'

describe('MainTable component', () => {

  const props = {
    away_period_scores: [0, 0, 2, 1, 0, 0, 0, 0, 0],
    home_period_scores: [0, 2, 0, 0, 0, 0, 1, 0, 1],
    away_team: { abbreviation: "SEA" },
    home_team: { abbreviation: "LAA" }
  }

  it('initialize Main with initial state', () => {
    const mainTable = shallow(<MainTable data={props} />);
    console.log('====================================');
    console.log(mainTable.dive().instance().getSideTable('MLB'));
    console.log('====================================');
    expect(mainTable.dive().instance().getSideTable('MLB')).toBeTruthy();
  })

})