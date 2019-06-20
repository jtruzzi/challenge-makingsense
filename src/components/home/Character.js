import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { css } from "glamor";
import { Container, Row, Col } from "react-bootstrap";

class Character extends Component {
  handleCharacterChange = () => {
    const { history, character } = this.props;
    history.push(`/${character.id}`);
  };

  render() {
    const { key, character, selected } = this.props;
    return (
      <Container
        key={key}
        className={`${characterContainerCss} ${selected && selectedCss}`}
        onClick={this.handleCharacterChange}
      >
        <Row>
          <Col xs={12}>
            <div className={`${titleCss}`}>{character.name}</div>
            <img
              className={`${characterImageCss}`}
              src={character.thumbnail.path}
              alt={character.name}
            />
            <div className={`${flagsContainerCss}`}>
              <span className={`${flagsCss}`}>
                {character.comics && character.comics.available > 0 && "Comics"}
              </span>
              <span className={`${flagsCss}`}>
                {character.stories && character.stories.available && "Stories"}
              </span>
              <span className={`${flagsCss}`}>
                {character.events && character.events.available && "Events"}
              </span>
              <span className={`${flagsCss}`}>
                {character.series && character.series.available && "Series"}
              </span>
            </div>
          </Col>
          <Col xs={12} />
        </Row>
      </Container>
    );
  }
}
const characterContainerCss = css({
  borderBottom: "1px solid black",
  margin: "16px auto",
  padding: "16px 16px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f31d24"
  }
});

const selectedCss = css({
  backgroundColor: "#f31d24"
});

const flagsContainerCss = css({
  margin: "8px",
  diaply: "flex",
  justifyContent: "space-between",
  width: "100%"
});

const characterImageCss = css({
  width: "100%",
  textAlign: "left"
});

const titleCss = css({
  fontSize: "20px"
});

const flagsCss = css({
  border: "1px solid black",
  padding: "5px 15px",
  marginRight: "5px",
  borderRadius: "5px"
});

export default withRouter(Character);
