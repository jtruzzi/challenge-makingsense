import expect from "expect";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { characterDetailsReducer } from "../reducers/characterReducer";

import {
  characterDetailsHasErrored,
  characterDetailsIsLoading,
  characterDetailsFetchDataSuccess,
  characterDetailsFetchData
} from "../actions/characterDetails";

export const mockStore = configureMockStore([thunk]);

describe("characterDetails reducer", () => {
  it("should return the initial state", () => {
    expect(characterDetailsReducer({}, {})).toEqual({});
  });

  it("should handle charactersHasErrored", () => {
    expect(
      characterDetailsReducer({}, characterDetailsHasErrored(true))
    ).toEqual({
      hasErrored: true
    });
  });

  it("should handle charactersIsLoading", () => {
    expect(
      characterDetailsReducer({}, characterDetailsIsLoading(true))
    ).toEqual({
      isLoading: true
    });
  });

  it("should handle charactersHasErrored", () => {
    const details = { id: 1 };
    expect(
      characterDetailsReducer({}, characterDetailsFetchDataSuccess(details))
    ).toEqual({ details: details });
  });

  it("characterDetailsFetchData", async () => {
    process.env.REACT_APP_SHOULD_USE_MOCKS = true;
    const store = mockStore();
    await store.dispatch(characterDetailsFetchData());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "CHARACTER_DETAILS_IS_LOADING",
      isLoading: true
    });
    expect(actions[1]).toEqual({
      type: "CHARACTER_DETAILS_FETCH_DATA_SUCCESS",
      details: require("../services/mocks/details.json")["data"]["results"]
    });
    expect(actions[2]).toEqual({
      type: "CHARACTER_DETAILS_IS_LOADING",
      isLoading: false
    });
  });
});
