function showProject(card) {
  let title = card.querySelector("h3").innerText;
  let shortDesc = card.querySelector("p").innerText;
  let img = card.querySelector("img").src;
  let fullDesc = card.getAttribute("data-full");

  document.getElementById("projectDetail").innerHTML = `
    <img src="${img}" style="width:100%; border-radius:8px; margin-bottom:15px;">
    <h2>${title}</h2>
    <p><strong>${shortDesc}</strong></p>
    <p style="margin-top:10px;">${fullDesc}</p>
  `;
}

function searchProject() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}