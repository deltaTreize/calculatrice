const key = [...document.querySelectorAll(".bouton")];
const dataKey = key.map((key) => key.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calcule(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calcule(valeur);
});

const calcule = (valeur) => {
  if (dataKey.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const total = eval(ecran.textContent);
        ecran.textContent = total;
        break;
      default:
        const indexDataKey = dataKey.indexOf(valeur);
        const touche = key[indexDataKey];
        ecran.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  alert("erreur de saisie" + e.message);
});
