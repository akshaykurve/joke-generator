const apiUrl = "https://official-joke-api.appspot.com/random_joke"

const getJoke = document.getElementById("fetchJokes")
const jokeBody = document.getElementsByClassName("api-body")[0]
const saveJoke = document.getElementById("saveJoke")


const fetchData = () => {
    const response = fetch(apiUrl, {
        headers: {
          "Accept": "application/json"
        }
      })
      .then(response => response.json())
      .then((data) => {
        console.log(data.setup);
        console.log(data.punchline);
        jokeBody.innerHTML = `<p class="setup">${data.setup}</p><p class="punchline">${data.punchline}</p>`;
      })
      .catch(error => {console.error('Error fetching joke:', error)
        jokeBody.innerHTML = `<p class="error">Please try again later.</p>`;

      }
    );
    }

// const fetchData = async () => {
//   try {
//     const response = await fetch(apiUrl, {
//       headers: {
//         "Accept": "application/json"
//       }
//     });
//     const data = await response.json();
//     console.log(data);
//     jokeBody.innerHTML = `<p class="setup">${data.setup}</p>
//       <p class="punchline">${data.punchline}</p>`;
//   } catch (error) {
//     console.error("Error fetching joke:", error);
//     jokeBody.innerHTML = `<p class="error">Failed to fetch a joke. Please try again later.</p>`;
//   }
// }
fetchData();
getJoke.addEventListener("click",fetchData)
saveJoke.addEventListener("click", () => {
    const setup = document.querySelector(".setup").textContent;
    const punchline = document.querySelector(".punchline").textContent;
    
    if (setup && punchline) {
        localStorage.setItem("favoriteJoke", JSON.stringify({ setup, punchline }));
        alert("Joke saved to favorites!");
    } else {
        alert("No joke to save. Please fetch a joke first.");
    }
});
