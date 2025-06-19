const btn = document.getElementById("magic-btn");
const clonedBtn = btn.cloneNode(true);
clonedBtn.id = "magic-btn-2";
clonedBtn.textContent = "Я изменю тебя";
clonedBtn.classList.add("second-btn");
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";


btn.addEventListener("click", () => {
  document.body.append(clonedBtn);
});

clonedBtn.addEventListener("click", () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
});
