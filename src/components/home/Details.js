import React, { Component } from "react";
import { css } from "glamor";
import { connect } from "react-redux";
import { characterDetailsFetchData } from "../../actions/characterDetails";

class Details extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { details, hasErrored, isLoading } = this.props;

    if (hasErrored) {
      return <p>No details found</p>;
    }

    if (isLoading) {
      return <p>Loading</p>;
    }

    return (
      <div className={`${heroesListCss}`}>
        {details && (
          <>
            <h1>{details.name}</h1>
            <div className={`${characterCss}`}>
              <div className="content">
                <div className={"title"} />
                <div className={"description"}>{details.description}</div>
                <a
                  href={details.urls && details.urls.map(url => url.url)}
                  target="blank"
                  alt={details.name}
                >
                  {details.urls && details.urls.map(url => url.url)}
                </a>
              </div>
              <img src={details.thumbnail.path} alt={details.name} />
            </div>
          </>
        )}
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
  gridTemplateRows: "auto 100%",
  gridColumnGap: "13px",
  "> img": {
    width: "500px"
  },
  "> .content": {
    textAlign: "center",
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
    fetchData: () => dispatch(characterDetailsFetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
