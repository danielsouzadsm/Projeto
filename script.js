function toggleMode(){
    const html = document.documentElement
    
    html.classList.toggle("light")

    const img = document.querySelector('#perfil img')
    
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt','segurando o celular com as mãos no espelho sobre o rosto oculos grau e camisa branca de time do vasco' )
    }
    else{
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt','segurando o celular com as mãos no espelho sobre o rosto oculos grau e camisa preta')
    }
}