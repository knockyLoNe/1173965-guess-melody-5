import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import artistQuestionProp from "../artist-question-screen/artist-question.prop";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import genreQuestionProp from "../genre-question-screen/genre-question.prop";
import AuthScreen from "../auth-screen/auth-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import WinScreen from "../win-screen/win-screen";
import GameScreen from "../game-screen/game-screen";


const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/result">
          <WinScreen />
        </Route>
        <Route exact path="/lose">
          <GameOverScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            question={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistQuestionProp, genreQuestionProp]).isRequired
  ),
};

export default App;
