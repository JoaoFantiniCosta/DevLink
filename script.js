function togglemode() {
  const htlm = document.documentElement

  //if(htlm.classList.contains('light')) {
  // htlm.classList.remove('light')
  //}else{
  //htlm.classList.add('light')

  htlm.classList.toggle("light")

  //Pegar a Tag Img
  const img = document.cueryselector("#profile img")
  //Substituir a imagem
  if (htlm.classList.contains("light")) {
    //Se estiver em Light mode, adicionar a imagem light
    img.setattribute("src", "./assets/avatarjoao.png")
  } else {
    //se estiver sem light mode, manter a imagem norml
    img.setattribute("src", "./assets/avatarjoao.png")
  }

  //Substituir a descrição
  if (htlm.classList.contains("light")) {
    //Se estiver em Light mode, adicionar a descrição light
    img.setattribute(
      "alt",
      "Foto de João com camisa social azul e fundo cinza."
    )
  } else {
    //se estiver sem light mode, manter a descrição norml
    img.setattribute(
      "alt",
      "Foto de João com camisa social azul e fundo cinza."
    )
  }
}
