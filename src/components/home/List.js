import React, { Component } from "react";
import { css } from "glamor";
import { connect } from "react-redux";
import { charactersFetchData } from "../../actions/characters";
import Character from "./Character";

class List extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { characters, details, hasErrored, isLoading } = this.props;

    if (hasErrored) {
      return <p>No results</p>;
    }

    return (
      <>
        {!isLoading && (
          <div className={`${heroesListCss}`}>
            <h4>Marvel characters</h4>
            {characters &&
              characters.map((character, i) => (
                <Character
                  key={`characters-${i}`}
                  character={character}
                  selected={details && character && character.id === details.id}
                />
              ))}
          </div>
        )}
      </>
    );
  }
}

const heroesListCss = css({
  "> h4": {
    margin: "20px"
  },
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#000",
  color: "#FFF",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  width: "400px",
  overflowY: "scroll",
  boxShadow: "5px 0 6px -4px #888"
});

const mapStateToProps = state => {
  return {
    characters: state.charactersReducer.characters,
    details: state.characterDetailsReducer.details,
    hasErrored: state.charactersReducer.hasErrored,
    isLoading: state.charactersReducer.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(charactersFetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
