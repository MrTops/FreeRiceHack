let getCard = () => {
    let solution = eval(document.getElementsByClassName("card-title")[0].innerHTML.replace("x", "*").split("=")[0]);
    let cards = document.getElementsByClassName("card-button")
    if (cards[0].innerHTML == solution) cards[0].click();
    if (cards[1].innerHTML == solution) cards[1].click();
    if (cards[2].innerHTML == solution) cards[2].click();
    if (cards[3].innerHTML == solution) cards[3].click();
};
