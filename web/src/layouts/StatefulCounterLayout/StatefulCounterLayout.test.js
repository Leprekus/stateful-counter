import { render } from '@redwoodjs/testing/web'

import StatefulCounterLayout from './StatefulCounterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StatefulCounterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StatefulCounterLayout />)
    }).not.toThrow()
  })
})
