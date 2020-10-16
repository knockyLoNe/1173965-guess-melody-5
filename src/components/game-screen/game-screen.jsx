import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {GameType} from "../../const";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }


  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];
    const onAnswer = () => {
      this.setState((prevState) => ({
        step: prevState.step + 1,
      }));
    };

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/" />
      );
    }
    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistQuestionScreen
            question={question}
            onAnswer={onAnswer}
          />
        );
      case GameType.GENRE:
        return (
          <GenreQuestionScreen
            question={question}
            onAnswer={onAnswer}
          />
        );
    }

    return <Redirect to="/" />;
  }

}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default GameScreen;
