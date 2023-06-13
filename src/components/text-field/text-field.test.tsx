import { render } from '@testing-library/react'
import { AllProviders } from '@/tests/utils'
import TextField from '.'

describe('text-field', () => {
  it('field was rendered', async () => {
    render(<TextField />, {
      wrapper: AllProviders,
    })
  })
})
