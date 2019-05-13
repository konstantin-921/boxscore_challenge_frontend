import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import NbaFooter from '../components/NbaFooter'

describe('NbaFooter component', () => {

  const props = {
    away_team: { last_name: 'JETS' },
    home_team: { last_name: 'PATRIOTS' },
    event_information: { status: 'completed' }
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<NbaFooter data={props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

})