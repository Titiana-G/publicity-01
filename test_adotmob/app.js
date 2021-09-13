const divText1 = document.querySelector("#div_text1");
const divText2 = document.querySelector("#div_text2");
const divText3 = document.querySelector("#div_text3");
const divText4 = document.querySelector("#div_text4");


const divs = [divText1, divText2, divText3, divText4];

showDiv(0);

function showDiv(i) {
  divs.forEach((div) => (div.style.display = "none"));
  divs[i].style.display = "block";
  setTimeout(() => showDiv(++i % divs.length), 4300);
}
