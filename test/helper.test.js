import {fetchData} from '../src/utils/helper'


describe('Helper', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })

  it(`fetchData should throw exception when non 200 response `, async () => {
    fetch.mockResponses(
      [
        JSON.stringify([]),
        { status: 404 }
      ]
    )
    try {
      await fetchData();
    } catch (error) {
      expect(error.message).toEqual(`404`);
    }

  });
 
});