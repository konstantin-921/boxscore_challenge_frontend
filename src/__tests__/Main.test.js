import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import Main from '../components/Main'
 
jest.mock('axios')
 
it('should fetch a team list', async () => {
  const getSpy = jest.spyOn(axios, 'get')
  const mainInstance = shallow(
    <Main />
  );
  console.log(await getSpy())
  expect(getSpy).toBeCalled()
});