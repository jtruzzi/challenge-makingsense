## Marvel Superheores API Demo

### To run this site you need to have nodejs installed and run these commands in your terminal.

#### Clone the repository

    git clone XXX

#### Enter the projects folder

    cd marvel-superheroes

#### Install the dependencies

    yarn

#### Run the server

    yarn start

#### When marvel's API is offline (and i'm sure it will!), we can change **REACT_APP_MARVEL_API_URL_CHARACTERS** configuration to true, in the .env.development file to mock the results.

Have in mind that this will always return a fixed set of characters on the left panel, and the same details on the right panel.

_One second waiting time was added to the service to appreciate the loading progress bar on top of the page._

Libraries used:

    - react
    - redux/react-redux (unify state between components)
    - redux-thunk (action creator to handle state change when fetching apis)
    - glamor (styling)
    - react-bootstrap (grid)
    - md5 (hash creation to authenticate against marvel's API)
