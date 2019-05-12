import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import Main from '../components/Main'
 
jest.mock('axios')

describe('Main container', () => {

  const initialState = {
    dataMLB: {},
    dataNBA: {},
    error: null,
    loading: true,
  }

  const mainInstance = shallow(<Main />);

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('initialize Main with initial state', () => {
    mainInstance.setState(initialState)
    expect(mainInstance.state()).toEqual(initialState)
  })

  it('should fetch a team list', async () => {
    const getSpy = jest.spyOn(axios, 'get')
    const data = getSpy()
    const mlbData = await data[0]
    const nbaData = await data[1]
    mainInstance.setState({ dataMLB: mlbData, dataNBA: nbaData })
    expect(getSpy).toBeCalled()
    expect(mainInstance.state().dataMLB).toEqual(expect.objectContaining({
      away_period_scores: expect.any(Array),
      home_period_scores: expect.any(Array),
      away_team: expect.any(Object),
      home_team: expect.any(Object)
    }));
    expect(mainInstance.state().dataNBA).toEqual(expect.objectContaining({
      away_period_scores: expect.any(Array),
      home_period_scores: expect.any(Array),
      away_team: expect.any(Object),
      home_team: expect.any(Object)
    }));
  });
})