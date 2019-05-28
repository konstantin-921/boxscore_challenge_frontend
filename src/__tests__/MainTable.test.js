import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import MainTable from '../components/MainTable'
import mockApi from '../__mocks__/axios'
import mockSocket from '../__mocks__/socket.io-client'

jest.mock('axios')
jest.mock('socket.io-client')

describe('MainTable component', () => {

  const props = {
    league: 'MLB'
  }

  const initialState = {
    game: {
      away_period_scores: [0, 0, 2, 1, 0, 0, 0, 0, 0],
      home_period_scores: [0, 2, 0, 0, 0, 0, 1, 0, 1],
      away_team: {
        abbreviation: "SEA"
      },
      home_team: {
        abbreviation: "LAA"
      },
    },
    error: null,
    loading: true,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })
  
  it('initialize Main with initial state', () => {
    const wrapper = shallow(<MainTable {...props} />);
    expect(wrapper.dive().setState(initialState).state()).toEqual(initialState)
  })

  it('renders without crashing', () => {
    const wrapper = shallow(<MainTable {...props} />);
    const instance = wrapper.dive().instance();
    expect(instance).not.toBe(null);
  });

  it('getSideTable was called', () => {
    const wrapper = shallow(<MainTable {...props} />);
    expect(wrapper.dive().instance().getSideTable('MLB')).toBeTruthy()
    expect(wrapper.dive().instance().getSideTable('NBA')).toBeTruthy()
  })

  it('getFooter was called', () => {
    const wrapper = shallow(<MainTable {...props} />)
    expect(wrapper.dive().instance().getFooter('MLB')).toBeTruthy()
    expect(wrapper.dive().instance().getFooter('NBA')).toBeTruthy()
  })

  it('should socket a team list', () => {
    const wrapper = shallow(<MainTable {...props} />)
    const diveInstance = wrapper.dive()
    expect(diveInstance.state().game).toEqual(expect.objectContaining({
      away_period_scores: expect.any(Array),
      home_period_scores: expect.any(Array),
      away_team: expect.any(Object),
      home_team: expect.any(Object)
    }));
  });

  it('should fetch a team list', async () => {
    const wrapper = shallow(<MainTable {...props} />);
    const getSpy = jest.spyOn(axios, 'get')
    const data = getSpy()
    let game = await data
    expect(getSpy).toBeCalled()
    const diveInstance = wrapper.dive()
    return mockApi.get().then(()=> {
      expect(diveInstance.state().game).toEqual(expect.objectContaining({
        away_period_scores: expect.any(Array),
        home_period_scores: expect.any(Array),
        away_team: expect.any(Object),
        home_team: expect.any(Object)
      }));
    })
  });
})