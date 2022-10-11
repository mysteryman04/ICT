(()=> {
  const lang = document.querySelector('#lang')
  const locales = {
    ru: {
      lang: "ru",
      home: "Домой",
      music: "Музыка",
      about: "Об исполнителе",
      xonorIn: "Xonor в SoundCloud и Spotify",
      aboutXonor: "Дастан Каппасов - Xonor (рус. Ксонор) - казахстанский композитор, битмейкер. Настоящее имя Дастан Каппасов Амангелдіұлы (Амангельдинович). Национальность: казах. Родился 24 марта 2002 года в городе Астана (ныне Нур-Султан), Казахстан. В детстве (2012-2013) использовал Virtual DJ в развлекательных целях. Серьёзно заниматься музыкой начал в 2015 году. В первую очередь пробовал себя в MAGIX Music Maker, после начал изучать FL Studio 11, 12, 20. Большинство работ были написаны именно в FL Studio. В 2020 году начал изучение Ableton Live 10, на данный момент использует его и последние работы - результаты, проделанные в Ableton Live 10. Основные жанры: Dubstep, Drum & Bass, Chill Out, Lo-Fi, Ambient, Trance, House, Trap. Дополнительные: Hardstyle, Rap, Hip-Hop, 16-bit. В лейблах не состоит."
    },
    en: {
      lang: "en",
      home: "Home",
      music: "Music",
      about: "About",
      xonorIn: "Xonor in SoundCloud and Spotify",
      aboutXonor: "Xonor (rus. Ксонор [ksonor]) is a Kazakh composer, beatmaker. The real name is Dastan Kappassov Amangeldıūly (Amangeldinovich). Nationality: Kazakh. He was born on March 24, 2002 in the city of Astana (Nur-Sultan now), Kazakhstan. As a child (2012-2013) he used Virtual DJ for entertainment purposes. He began to study music seriously in 2015. First of all he tried himself in MAGIX Music Maker, after that he started to studying FL Studio 11, 12, 20. Most of his works were written in FL Studio. In 2020, he began to study Ableton Live 10, at the moment he is using it and the last work - the results done in Ableton Live 10. Main genres: Dubstep, Drum & Bass, Chill Out, Lo-Fi, Ambient, Trance, House, Trap. Extras: Hardstyle, Rap, Hip-Hop, 16-bit. Doesn't belong to labels."
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