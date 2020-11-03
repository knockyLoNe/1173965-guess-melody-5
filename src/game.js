export const isArtistAnswerCorrect = (question, userAnswer) => userAnswer.artist === question.song.artist;
export const isGenreAnswerCorrect = (question, userAnswer) => userAnswer.every((it, i) => it === (question.answers[i].genre === question.genre));
