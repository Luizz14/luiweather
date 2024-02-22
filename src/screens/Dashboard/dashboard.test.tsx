import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse'
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@__tests__/utils/customRender'
import { api } from '@services/api'
import { Dashboard } from '@screens/Dashboard'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse'

describe('Screen: Dashboard', () => {
  beforeAll(async () => {
    const city = {
      id: '1',
      name: 'Rio do Sul',
      latitude: -27.2156,
      longitude: -49.643,
    }

    await saveStorageCity(city)
  })

  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    render(<Dashboard />)

    await waitFor(() => expect(screen.findByText(/rio do sul/i)).toBeTruthy())
  })

  it('should be show another selected weather city', async () => {
    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })

    render(<Dashboard />)

    // await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const cityName = 'São Paulo'

    await waitFor(() =>
      act(() => {
        const search = screen.getByTestId('search-input')
        fireEvent.changeText(search, cityName)
      })
    )

    await waitFor(() =>
      act(() => {
        fireEvent.press(screen.getByText(cityName, { exact: false }))
      })
    )

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy()
  })
})
