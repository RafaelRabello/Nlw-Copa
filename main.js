function creatGame(player1, hour, player2) {
  return `
     <li>
        <img src="assets/flags/icon=${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
        <img src="assets/flags/icon=${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.3;
function creatCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
    creatCard(
      "21/11",
      "segunda",
      creatGame("england", "10:00", "iran") +
      creatGame("senegal", "13:00", "netherlands") +
      creatGame("united states", "16:00", "wales")
    ) +
  
    creatCard(
      "24/11",
      "quinta",
      creatGame("uruguay", "10:00", "south korea") +
      creatGame("portugal", "13:00", "ghana") +
      creatGame("brazil", "16:00", "serbia")
    ) +
    creatCard(
      "28/11",
      "segunda",
      creatGame("south korea", "10:00", "ghana") +
      creatGame("brazil", "13:00", "switzerland") +
      creatGame("portugal", "16:00", "uruguay") 
    ) +
    creatCard(
      "02/12",
      "sexta",
      creatGame("south korea", "12:00", "portugal") +
      creatGame("serbia", "16:00", "switzerland") +
      creatGame("cameroon", "16:00", "brazil")
    )
