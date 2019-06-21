import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { css } from "glamor";
import { Container, Row, Col } from "react-bootstrap";

class Character extends Component {
  handleCharacterChange = () => {
    const { history, character } = this.props;
    history.push(`/${character.id}`);
  };

  renderFlag = field => {
    const { character } = this.props;
    if (character[field] && parseInt(character[field].available) > 0) {
      return <span className={`${flagsCss}`}>{field}</span>;
    }
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
              {this.renderFlag("comics")}
              {this.renderFlag("stories")}
              {this.renderFlag("events")}
              {this.renderFlag("series")}
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
  display: "flex",
  justifyContent: "space-around",
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
  borderRadius: "5px",
  textTransform: "uppercase",
  fontSize: "12px"
});

export default withRouter(Character);
