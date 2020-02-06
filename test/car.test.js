import React from "react";
import Card from "../src/components/card/index.jsx";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
configure({ adapter: new Adapter() });

let testCase = {
  caseRender: {
    title: `renders <Card /> components`,
    data: {
      initState: {
        endpoint: {
          url: `www.ranhu.ca`
        }
      },
      response: {
        url: "https://swapi.co/api/planets/1/"
      },
      update: {
        url: `www.ranhutest.ca`
      }
    }
  },
  caseApiFail: {
    title: `renders <Card /> components when api fail`,
    data: {
      initState: {
        endpoint: {
          url: `www.ranhu.ca`
        }
      },
      response: [JSON.stringify([]), { status: 404 }]
    }
  }
};

describe("<Card />", () => {
  let store;
  let mockStore = configureMockStore();

  beforeEach(() => {
    fetch.resetMocks();
  });

  it(testCase.caseRender.title, async () => {
    fetch.mockResponseOnce(JSON.stringify(testCase.caseRender.data.response));
    store = mockStore(testCase.caseRender.data.initState);
    let wrapper = mount(
      <Provider store={store}>
        {" "}
        <Card url={testCase.caseRender.data.update.url} />
      </Provider>
    );
    expect(wrapper.find({ "test-id": "star-war-card-link" }).exists());
    wrapper.find({ "test-id": "star-war-card-link" }).simulate("click");

    expect(store.getActions()[0].url).toEqual(
      testCase.caseRender.data.update.url
    );
  });

  it(testCase.caseApiFail.title, async () => {
    fetch.mockResponses(testCase.caseApiFail.data.response);
    store = mockStore(testCase.caseRender.data.initState);
    let wrapper = mount(
      <Provider store={store}>
        {" "}
        <Card url={testCase.caseRender.data.update.url} />
      </Provider>
    );
    expect(wrapper.find({ "test-id": "star-war-card-link" }).exists());
  });
});
