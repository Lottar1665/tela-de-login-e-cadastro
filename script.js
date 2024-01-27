function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img,
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar imagem light
    img.setAttribute("src", "./assets/usuario-de-perfil.png")
  } else {
    //se tiver dark mode manter a imagem normal
    img.setAttribute("src", "./assets/usuario-de-perfil.png")
  }
}
