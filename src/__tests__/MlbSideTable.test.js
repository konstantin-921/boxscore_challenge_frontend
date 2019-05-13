import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import MlbSideTable from '../components/MlbSideTable'

describe('MlbSideTable component', () => {

  const props = {
    away_batter_totals: { runs: 4, hits: 10 },
    home_batter_totals: { runs: 5, hits: 12 },
    away_errors: 3,
    home_errors: 2,
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<MlbSideTable data={props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

})