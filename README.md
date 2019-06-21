## Marvel Superheores API Demo

#### Because marvel's API and development page and documentation were unstable during development, i created mocks based on the documentation so i could continue with the implementation. We can activate the mocks in the .env.development file by changing this key and value

     REACT_APP_SHOULD_USE_MOCKS=true

Have in mind that this will always return a fixed set of characters on the left panel, and always the same details on the right panel.

_One second waiting time was added to the service so the loading progress bar on top of the page can be seen._

Libraries used:

    - react
    - redux/react-redux (unify state between components)
    - redux-thunk (action creator to handle state change when fetching apis)
    - glamor (For styling. We could've used StyledComponents but it felt that not enough components were being reused)
    - react-bootstrap (Grid only)
    - md5 (hash creation to authenticate against marvel's API)

### To run this site you need to have nodejs installed and run these commands in your terminal.

#### Clone the repository

    git clone git@github.com:jtruzzi/marvel-superheros-demo.git

#### Enter the projects folder

    cd marvel-superheros-demo

#### Install the dependencies

    yarn

#### Run the server

    yarn start
