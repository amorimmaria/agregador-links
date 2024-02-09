function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adc a img
    img.setAttribute("src", "./assets/avatar-01.jpeg");
  } else {
    // se tiver sem light mode, manter a img
    img.setAttribute("src", "./assets/avatar-01.jpeg");
  }
}
