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
  console.log("Fetching characters");
  if (process.env.REACT_APP_SHOULD_USE_MOCKS === "true") {
    return fakeWaitingTime(require("./mocks/characters.json"));
  }

  const querystring = buildBaseQuerystrings();
  const response = await fetch(
    `${process.env.REACT_APP_MARVEL_API_URL_CHARACTERS}?${qs.stringify(
      querystring
    )}`
  );

  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to get characters");
};

export const getCharacterDetails = async characterId => {
  console.log("Fetching character ", characterId);
  if (process.env.REACT_APP_SHOULD_USE_MOCKS === "true")
    return fakeWaitingTime(require("./mocks/details.json"));

  const querystring = buildBaseQuerystrings();
  const response = await fetch(
    `${
      process.env.REACT_APP_MARVEL_API_URL_CHARACTERS
    }/${characterId}?${qs.stringify(querystring)}`
  );

  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to get details");
};

const buildBaseQuerystrings = () => {
  const ts = Math.floor(Date.now());

  return {
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
    ts: ts,
    hash: createAuthenticationHash(ts)
  };
};

const createAuthenticationHash = ts => {
  return md5(
    ts +
      process.env.REACT_APP_MARVEL_PRIVATE_KEY +
      process.env.REACT_APP_MARVEL_PUBLIC_KEY
  );
};
