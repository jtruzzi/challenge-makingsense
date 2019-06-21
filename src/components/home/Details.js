import React, { PureComponent } from "react";
import { css } from "glamor";
import { connect } from "react-redux";
import { characterDetailsFetchData } from "../../actions/characterDetails";
import { withRouter } from "react-router-dom";

class Details extends PureComponent {
  componentWillMount() {
    const { match } = this.props;
    const characterId = match.params.characterId;
    if (characterId) {
      this.props.fetchData(characterId);
    }
  }

  componentDidUpdate = prevProps => {
    const { match } = this.props;
    const characterId = match.params.characterId;
    if (characterId && characterId !== prevProps.match.params.characterId) {
      this.props.fetchData(characterId);
    }
  };

  render() {
    const { details, hasErrored, isLoading, match } = this.props;
    const characterId = match.params.characterId;

    return (
      <>
        {!isLoading && (
          <div className={`${heroesListCss}`}>
            {!characterId && <p>Please choose a character</p>}
            {hasErrored && <p>Character not found</p>}
            {details && (
              <>
                <h1>{details.name}</h1>
                <div className={`${characterCss}`}>
                  <div className="content">
                    <div className={"title"} />
                    <div className={"description"}>{details.description}</div>
                  </div>
                  <img src={details.thumbnail.path} alt={details.name} />
                </div>
                <div>
                  {details.urls &&
                    details.urls.map(url => (
                      <>
                        <a href={url.url} target="blank" alt={details.name}>
                          {url.url}
                        </a>
                        <br />
                      </>
                    ))}
                </div>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

const heroesListCss = css({
  flexGrow: 1,
  flexDirection: "column",
  padding: "30px",
  marginLeft: "400px"
});

const characterCss = css({
  display: "inline-grid",
  gridTemplateRows: "auto 100%",
  gridColumnGap: "13px",
  "> img": {
    width: "500px"
  },
  "> .content": {
    textAlign: "left",
    "> .title": {
      fontSize: "20px"
    },
    "> .description": {
      fontSize: "16px"
    }
  }
});

const mapStateToProps = state => {
  return {
    details: state.characterDetailsReducer.details,
    hasErrored: state.characterDetailsReducer.hasErrored,
    isLoading: state.characterDetailsReducer.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: characterId => dispatch(characterDetailsFetchData(characterId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Details)
);
