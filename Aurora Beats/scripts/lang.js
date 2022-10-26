(()=> {
  const lang = document.querySelector('#lang')
  const locales = {
    ru: {
      lang: "ru",
      home: "Домой",
      music: "Музыка",
      about: "О проекте",
      xonorIn: "SoundCloud и Spotify",
      aboutXonor: "Данный сайт предназначен для прослушивания музыки. Исходя из настроения человека, плейлист может выбрать подходящую музыку."
    },
    en: {
      lang: "en",
      home: "Home",
      music: "Music",
      about: "About project",
      xonorIn: "SoundCloud and Spotify",
      aboutXonor: "This site is designed for listening to music. Based on the mood of the person, the playlist can choose the appropriate music."
    }
  }
  let locale = {}

  function changeLocale (locale) {
    const html = document.querySelector("html")
    const navItems = document.querySelector(".nav").children
    const homeContent = document.querySelector(".home-content")
    const about = document.querySelector(".about").lastElementChild

    html.setAttribute("lang", locale.lang)
    navItems[0].firstChild.innerText = locale.home
    navItems[1].firstChild.innerText = locale.music
    navItems[2].firstChild.innerText = locale.about
    homeContent.firstElementChild.innerText = locale.xonorIn
    about.innerText = locale.aboutXonor
  }

  lang.addEventListener("click", ()=> {
    if(lang.textContent === "Eng") {
      lang.textContent = "Rus"
      locale = locales.en
      changeLocale(locale)
    } else {
      lang.textContent = "Eng"
      locale = locales.ru
      changeLocale(locale)
    }
  })
})()