import React from 'react';
import Home from '../src/components/home/index.jsx';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

let testCase = [
  {
    title: `renders <Home /> components`,
    data: {
      initState : {
        endpoint : {
          url: `www.ranhu.ca`
        }
      },
      response: {
          "name": "Tatooine", 
          "residents": [
              "https://swapi.co/api/people/1/"
          ], 
          "films": [
              "https://swapi.co/api/films/5/"
          ], 
          "created": "2014-12-09T13:50:49.641000Z", 
          "edited": "2014-12-21T20:48:04.175778Z", 
          "url": "https://swapi.co/api/planets/1/"
      }
    }
  }
]

describe('<Home />', () => {
  let store
  let mockStore = configureMockStore();


  

  beforeEach(() => {
    
    fetch.resetMocks()
  })

  testCase.forEach(item => {
    it(item.title, () => {
      fetch.mockResponseOnce(JSON.stringify(item.data.response))
      store = mockStore(item.data.initState);
      let component = mount(<Home store={store}/>)

      
    });
  })
 
});