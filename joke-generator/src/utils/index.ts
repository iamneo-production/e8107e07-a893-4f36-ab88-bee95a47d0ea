import { RandomJoke } from "../components/RandomJokes";
import { KnockJoke } from "../components/KnockKnockJokes";
import { ProgrammingJoke } from "../components/ProgrammingJokes";
import { ScienceJoke } from "../components/ScienceJokes";
import { PunJoke } from "../components/PunsJokes";
export const categories = [
  "Random Jokes",
  "Programming Jokes",
  "Science Jokes",
  "Puns Jokes",
  "KnockKnock Jokes",
];
export const NETWORK_CALL_TIMEOUT = 500 * 60;
export const BASE_URL = "https://8080-dccccadaccccaeaeacdaecdcbdacbedad.project.examly.io";

export const jokeMap = {
  RANDOM: "random",
  PROGRAMMING: "programming",
  SCIENCE: "science",
  PUNS: "puns",
  KNOCK: "knock",
};

export const compMap = {
  "Random Jokes": RandomJoke,
  "Programming Jokes": ProgrammingJoke,
  "Science Jokes": ScienceJoke,
  "Puns Jokes": PunJoke,
  "KnockKnock Jokes": KnockJoke,
};
