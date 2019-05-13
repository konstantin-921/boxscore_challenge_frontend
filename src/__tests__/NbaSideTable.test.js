import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import NbaSideTable from '../components/NbaSideTable'

describe('NbaSideTable component', () => {

  const props = {
    away_totals: { points: 90 },
    home_totals: { points: 109 },
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<NbaSideTable data={props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

})