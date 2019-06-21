import qs from "qs";

import md5 from "md5";

const fakeWaitingTime = async value => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });
};

export const getCharacters = async () => {
  if (process.env.REACT_APP_SHOULD_USE_MOCKS === "true") {
    return fakeWaitingTime(require("./mocks/characters.json"));
  }

  const querystring = {
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY
  };
  const response = await fetch(
    `${
      process.env.REACT_APP_MARVEL_API_URL_CHARACTERS
    }/characters?${qs.stringify(querystring)}`
  );

  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to get characters");
};

export const getCharacterDetails = async characterId => {
  if (process.env.REACT_APP_SHOULD_USE_MOCKS === "true")
    return fakeWaitingTime(require("./mocks/details.json"));

  const querystring = {
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY
  };
  const response = await fetch(
    `${
      process.env.REACT_APP_MARVEL_API_URL_CHARACTERS
    }/characters/${characterId}?${qs.stringify(querystring)}`
  );

  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to get details");
};

// Unused: Alternative to make the api call including timestamp and md5 hash
const buildBaseQuerystrings = () => {
  const ts = Math.floor(Date.now());

  return {
    apikey: process.env.REACT_APP_MARVEL_PRIVATE_KEY,
    ts: ts,
    hash: createAuthenticationHash(ts)
  };
};

// Unused: Alternative to make the api call including timestamp and md5 hash
const createAuthenticationHash = ts => {
  return md5(
    ts +
      process.env.REACT_APP_MARVEL_PRIVATE_KEY +
      process.env.REACT_APP_MARVEL_PUBLIC_KEY
  );
};
