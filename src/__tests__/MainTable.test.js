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

  it('renders without crashing', () => {
    const wrapper = shallow(<MainTable data={props} />);
    const instance = wrapper.instance();
    expect(instance).not.toBe(null);
  });

  it('getSideTable was called', () => {
    const wrapper = shallow(<MainTable data={props} />)
    expect(wrapper.dive().instance().getSideTable('MLB')).toBeTruthy()
    expect(wrapper.dive().instance().getSideTable('NBA')).toBeTruthy()
  })

  it('getFooter was called', () => {
    const wrapper = shallow(<MainTable data={props} />)
    expect(wrapper.dive().instance().getFooter('MLB')).toBeTruthy()
    expect(wrapper.dive().instance().getFooter('NBA')).toBeTruthy()
  })

})