import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import MlbFooter from '../components/MlbFooter'

describe('MlbFooter component', () => {

  const props = {
    away_team: { last_name: 'CUBS' },
    home_team: { last_name: 'CARDINALS' },
    away_batter_totals: { hits: 7, at_bats: 30 },
    home_batter_totals: { hits: 5, at_bats: 25 },
    event_information: { status: 'completed' }
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<MlbFooter data={props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

})