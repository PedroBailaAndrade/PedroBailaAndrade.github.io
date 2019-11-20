function myButton(elem) {
  var elem = document.querySelector(`.card${elem}-info`)
    if (elem.style.display === "none") {
      elem.style.display = "contents";
    } else {
      elem.style.display = "none";
    };
};
