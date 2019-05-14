import React from 'react'
import { shallow } from 'enzyme'
import Main from '../components/Main'

describe('Main container', () => {

  const initialState = {
    dataMLB: {},
    dataNBA: {},
    error: null,
    loading: true,
  }

  const wrapper = shallow(<Main />)

  it('renders without crashing', () => {
    const instance = wrapper.instance()
    expect(instance).not.toBe(null)
  });

  it('initialize Main with initial state', () => {
    wrapper.setState(initialState)
    expect(wrapper.state()).toEqual(initialState)
  })
})