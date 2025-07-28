import { jokesArray } from "./api";

const displayJokes = () => {
  const jokesContainer = document.getElementById("jokesContainer");
  jokesContainer.innerHTML = "";
  jokesArray.forEach((joke) => {
    const jokeElement = document.createElement("div");
    jokeElement.classList.add("joke");
    jokeElement.innerText = joke.setup + " - " + joke.punchline;
    jokesContainer.appendChild(jokeElement);
  });
};
  