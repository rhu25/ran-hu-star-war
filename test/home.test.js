import React from 'react';
import Home from '../src/components/home/index.jsx';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';
configure({ adapter: new Adapter() });

let testCase = {
  caseRender : {
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
  },
  caseRandom : {
    title: `renders <Home /> components`,
    data: {
      initState : {
        endpoint : {
          url: false
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
}

describe('<Home />', () => {
  let mockStore = configureMockStore();
  beforeEach(() => {
      fetch.resetMocks()
  })

  it(testCase.caseRandom.title, async () => {
      fetch.mockResponseOnce(JSON.stringify(testCase.caseRandom.data.response))
      let store = mockStore(testCase.caseRandom.data.initState);
      let wrapper = mount(<Provider store={store}> <Home/></ Provider> )
      await wrapper.update();
      await wrapper.update();
      await wrapper.update();
      await wrapper.update();
      await wrapper.update();
      await wrapper.update();
      await wrapper.update();
      expect(wrapper.find({'test-id':"star-war-home-title"}).exists())
  });

  it(testCase.caseRender.title, async () => {
    fetch.mockResponseOnce(JSON.stringify(testCase.caseRender.data.response))
    let store = mockStore(testCase.caseRender.data.initState);
    let wrapper = mount(<Provider store={store}> <Home/></ Provider> )
    await wrapper.update();
    await wrapper.update();
    await wrapper.update();
    await wrapper.update();
    await wrapper.update();
    expect(wrapper.find({'test-id':"star-war-home-title"}).text()).toEqual(testCase.caseRender.data.response.name);
  }); 
 
});