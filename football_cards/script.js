const footballTeam = {
  team: "Shits",
  year: 2025,
  headCoach: "Shit Shak",
  players: [
    {
      name: "Quiff",
      position: "goalkeeper",
      isCapitan: true,
    },
    {
      name: "Gorilla",
      position: "defender",
      isCapitan: false,
    },
    {
      name: "Recycle Bin",
      position: "forward",
      isCapitan: false,
    },
    {
      name: "Three Jack",
      position: "midfielder",
      isCapitan: false,
    },
    {
      name: "Biscuit Joe",
      position: "defender",
      isCapitan: false,
    },
    {
      name: "Lamp Shade",
      position: "midfielder",
      isCapitan: false,
    },
    {
      name: "Toilet Mike",
      position: "goalkeeper",
      isCapitan: false,
    },
    {
      name: "Slipper Dan",
      position: "forward",
      isCapitan: false,
    },
    {
      name: "Breadface",
      position: "defender",
      isCapitan: false,
    },
    {
      name: "Mr. Wiggles",
      position: "midfielder",
      isCapitan: false,
    },
  ],
};

const teamSpan = document.querySelector("#team");
const yearSpan = document.querySelector("#year");
const headCoachSpan = document.querySelector("#head-coach");
teamSpan.textContent = footballTeam.team;
yearSpan.textContent = footballTeam.year;
headCoachSpan.textContent = footballTeam.headCoach;
const playerCards = document.querySelector("#player-cards");
const playersSelection = document.querySelector("#players");

playersSelection.addEventListener("change", () =>
  showPlayers(playersSelection.value)
);

function showPlayers(filter) {
  playerCards.innerHTML = "";

  for (const player of footballTeam.players) {
    if (player.position === filter || filter === "all") {
      playerCards.innerHTML += `<div class="player-card">
        <h2>${player.name}</h2>
        <p>Position: ${player.position}</p>
        </div>`;
    }
  }
}
showPlayers("all");
