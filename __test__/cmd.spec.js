const { pkmn } = require('../cmd/index')

describe('cmd (controllers)', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('pkmn should resolve data for correct response', async () => {
    const responseData = await pkmn('pikachu')
    expect(responseData[0].name).toBe('Pikachu')
  })
  it('pkmn should throw error for bad request', async () => {
    await pkmn('!!!').catch((error) => {
      expect(error.message).toBe(
        'AxiosError: Request failed with status code 404'
      )
    })
  })
})
