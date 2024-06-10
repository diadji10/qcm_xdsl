//Sélection des réponses
const text_inputs = document.querySelectorAll("#text");
const number_inputs = document.querySelectorAll("#num");
const multiple_inputs = document.querySelectorAll(".mult");
const m0 = document.querySelectorAll("#m0");
const m1 = document.querySelectorAll("#m1");
const m2 = document.querySelectorAll("#m2");
const m3 = document.querySelectorAll("#m3");
const ul_m0 = document.getElementById("ul-m0");
const ul_m1 = document.getElementById("ul-m1");
const ul_m2 = document.getElementById("ul-m2");
const ul_m3 = document.getElementById("ul-m3");
const selects = document.querySelectorAll("select");
const submit = document.getElementById("submit");
const restart = document.getElementById("restart");
const header = document.querySelector("header");
console.log(
  document.querySelectorAll("select ").length +
    document.querySelectorAll("input").length
);

//Réponses
const reponses_nombre = [16, 25000];
const reponses_text = [
  "ADSL2",
  "ADSL2+",
  "FILTRE",
  "MODEM",
  "DECODEUR",
  "QAM",
  "AUGMENTATION DU DEBIT DE TRANSMISSION",
  "50 A 60 DB",
  "RI > 20",
];
const reponses_select = [
  "F",
  "F",
  "F",
  "F",
  "V",
  "F",
  "V",
  "V",
  "V",
  "V",
  "V",
  "F",
  "V",
  "V",
  "F",
  "F",
  "F",
];
const reponses_multiple = [
  ["ADSL", "SDSL", "VDSL", "VDSL2", "ADSL2+", "ADSL2", "SHDSL"],
  [
    "MODEM",
    "MODEM ADSL2",
    "ORDINATEUR",
    "TELEPHONE ANALOGIQUE",
    "TELEPHONE NUMERIQUE",
    "FILTRE",
    "ADAPTATEURS",
    "ROUTEUR ADSL2",
    "CABLES",
  ],
  ["EXTENSION DU DEBIT", "GAIN EN pORTEE", "MISE EN VEILLE DES MODEMS"],
  ["STRUCTURE", "TYPE", "MODE D'EXPLOITATION"],
]; //Fonction includes

//initialisation du score
let score = 0;

submit.addEventListener("click", () => {
  submit.style.display = "none";
  restart.style.display = "block";
  for (var i = 0; i < text_inputs.length; i++) {
    text_inputs[i].setAttribute("disabled", "disabled");
    if (text_inputs[i].value.toUpperCase() == reponses_text[i]) {
      text_inputs[i].style.color = "green";
      score++;
    } else {
      text_inputs[i].style.color = "red";
      text_inputs[i].style.textDecoration = "line-through";

      text_inputs[i].parentElement.append(
        `${text_inputs[i].value} --> ${reponses_text[i]}\t`
      );
    }
  }
  for (var i = 0; i < number_inputs.length; i++) {
    number_inputs[i].setAttribute("disabled", "disabled");
    if (number_inputs[i].value == reponses_nombre[i]) {
      number_inputs[i].style.color = "green";
      score++;
    } else {
      number_inputs[i].style.color = "red";
      number_inputs[i].style.textDecoration = "line-through";
      number_inputs[i].parentElement.append(
        `${number_inputs[i].value} ---> ${reponses_nombre[i]}`
      );
    }
  }
  for (var i = 0; i < selects.length; i++) {
    selects[i].setAttribute("disabled", "disabled");
    if (selects[i].value.toUpperCase() == reponses_select[i]) {
      selects[i].style.color = "green";
      score++;
    } else {
      selects[i].style.color = "red";
      selects[i].style.textDecoration = "line-through";
      selects[i].parentElement.append(
        `${selects[i].value}---> ${reponses_select[i]}`
      );
    }
  }
  for (var i = 0; i < multiple_inputs.length; i++) {
    multiple_inputs[i].setAttribute("disabled", "disabled");
  }
  m0.forEach((el) => {
    if (reponses_multiple[0].includes(el.value.toUpperCase())) {
      el.style.color = "green";
      score++;
    } else {
      el.style.color = "red";
      el.style.textDecoration = "line-through";
    }
  });
  for (var i = 0; i < reponses_multiple[0].length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `-->${reponses_multiple[0][i]}`;
    ul_m0.appendChild(li);
  }
  m1.forEach((el) => {
    if (reponses_multiple[1].includes(el.value.toUpperCase())) {
      el.style.color = "green";
      score++;
    } else {
      el.style.color = "red";
      el.style.textDecoration = "line-through";
    }
  });
  for (var i = 0; i < reponses_multiple[1].length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `-->${reponses_multiple[1][i]}`;
    ul_m1.appendChild(li);
  }
  m2.forEach((el) => {
    if (reponses_multiple[2].includes(el.value.toUpperCase())) {
      el.style.color = "green";
      score++;
    } else {
      el.style.color = "red";
      el.style.textDecoration = "line-through";
    }
  });
  for (var i = 0; i < reponses_multiple[2].length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `-->${reponses_multiple[2][i]}`;
    ul_m2.appendChild(li);
  }
  m3.forEach((el) => {
    if (reponses_multiple[3].includes(el.value.toUpperCase())) {
      el.style.color = "green";
      score++;
    } else {
      el.style.color = "red";
      el.style.textDecoration = "line-through";
    }
  });
  for (var i = 0; i < reponses_multiple[3].length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `-->${reponses_multiple[3][i]}`;
    ul_m3.appendChild(li);
  }

  if ((score * 20) / 46 >= 14) {
    header.innerHTML = `NOTE : <span class="bon">${parseInt(
      (score * 20) / 46
    ).toFixed(2)}(Bien)</span>`;
  } else if ((score * 20) / 46 < 10) {
    header.innerHTML = `NOTE : <span class="mauvais">${parseInt(
      (score * 20) / 46
    ).toFixed(2)}(Insuffisant)</span>`;
  } else {
    header.innerHTML = `NOTE : <span class="moyen">${parseInt(
      (score * 20) / 46
    ).toFixed(2)} (ABien)</span>`;
  }
  restart.addEventListener("click", () => {
    window.location = "index.html";
    const inputs = document.querySelectorAll("input");
    inputs.forEach((inp) => {
      inp.value = "";
    });
  });
});
