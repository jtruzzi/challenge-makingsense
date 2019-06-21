import expect from "expect";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { charactersReducer } from "../reducers/characterReducer";

import {
  charactersHasErrored,
  charactersIsLoading,
  charactersFetchDataSuccess,
  charactersFetchData
} from "../actions/characters";

export const mockStore = configureMockStore([thunk]);

describe("characters reducer", () => {
  it("should return the initial state", () => {
    expect(charactersReducer({}, {})).toEqual({});
  });

  it("should handle charactersHasErrored", () => {
    expect(charactersReducer({}, charactersHasErrored(true))).toEqual({
      hasErrored: true
    });
  });

  it("should handle charactersIsLoading", () => {
    expect(charactersReducer({}, charactersIsLoading(true))).toEqual({
      isLoading: true
    });
  });

  it("should handle charactersHasErrored", () => {
    const characters = [{ id: 1 }, { id: 2 }];
    expect(
      charactersReducer({}, charactersFetchDataSuccess(characters))
    ).toEqual({ characters: characters });
  });

  it("charactersFetchData", async () => {
    process.env.REACT_APP_SHOULD_USE_MOCKS = "true";
    const store = mockStore();
    await store.dispatch(charactersFetchData());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "CHARACTERS_IS_LOADING",
      isLoading: true
    });
    expect(actions[1]).toEqual({
      type: "CHARACTERS_FETCH_DATA_SUCCESS",
      characters: require("../services/mocks/characters.json")["data"][
        "results"
      ]
    });
    expect(actions[2]).toEqual({
      type: "CHARACTERS_IS_LOADING",
      isLoading: false
    });
  });
});
