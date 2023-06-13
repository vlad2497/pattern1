import { render, screen } from '@testing-library/react'
import { AllProviders } from '@/tests/utils'
import Main from './index'

describe('main page', () => {
  it('movies list request loader was rendered', async () => {
    render(<Main />, { wrapper: AllProviders })
    expect(screen.getByRole('loader')).toBeInTheDocument()
  })

  // как-будто после первого теста запросы больше не идут

  it('main page was rendered after movies list request', async () => {
    render(<Main />, { wrapper: AllProviders })
    const mainPageTitle = await screen.findByText('main page')
    expect(mainPageTitle).toBeInTheDocument()
  })

  it('movies list was rendered', async () => {
    render(<Main />, { wrapper: AllProviders })
    const result = await screen.findAllByRole('movie-card')
    expect(result).toHaveLength(2)
  })
})

// как если бы обновили страницу

test('main page test', () => {
  it('movies list request loader was rendered test', async () => {
    render(<Main />, { wrapper: AllProviders })
    expect(screen.getByRole('loader')).toBeInTheDocument()
  })
})
