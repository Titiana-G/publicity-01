
const div1 = document.querySelector("#div_arrow");
const div2 = document.querySelector("#div_2");

const divs = [div1, div2];

showDiv(0);


function showDiv(i) {
    divs.forEach((div) => (div.style.display = "none"));
    divs[i].style.display = "block";

    setTimeout(() => {
        document.getElementById("footer2").style.zIndex = "3";
    
    }, 19000);

    setTimeout(() => {

        showDiv(++i % divs.length);

    }, 20000);

    setTimeout(() => {

        document.getElementById("div_video").style.display= "none";

    }, 21000);

}

