import React, { Component } from "react";
import { css } from "glamor";
import { connect } from "react-redux";
import { charactersFetchData } from "../../actions/characters";

class List extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { characters, hasErrored, isLoading } = this.props;

    if (hasErrored) {
      return <p>No results</p>;
    }

    if (isLoading) {
      return <p>Loading</p>;
    }

    return (
      <div className={`${heroesListCss}`}>
        <h1>List of characters</h1>
        {characters &&
          characters.map((character, i) => (
            <div key={`characters-${i}`} className={`${characterCss}`}>
              <img src={character.thumbnail.path} alt={character.name} />
              <div className="content">
                <div className={"title"}>{character.name}</div>
                <div className={`${flagsCss}`}>
                  <span className={"flag"}>
                    {character.comics &&
                      character.comics.available > 0 &&
                      "Comics"}
                  </span>
                  <span className={"flag"}>
                    {character.stories &&
                      character.stories.available &&
                      "Stories"}
                  </span>
                  <span className={"flag"}>
                    {character.events && character.events.available && "Events"}
                  </span>
                  <span className={"flag"}>
                    {character.series && character.series.available && "Series"}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const heroesListCss = css({
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#EEEEEE"
});

const characterCss = css({
  display: "inline-grid",
  gridTemplateColumns: "auto 100%",
  gridColumnGap: "13px",
  "> img": {
    width: "200px",
    textAlign: "left"
  },
  "> .content": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "> .title": {
      fontSize: "20px"
    }
  }
});

const flagsCss = css({
  "> .flag": {
    display: "inline-block",
    border: "1px solid black",
    padding: "5px 15px",
    marginRight: "5px",
    borderRadius: "5px"
  }
});

const mapStateToProps = state => {
  return {
    characters: state.charactersReducer.characters,
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
