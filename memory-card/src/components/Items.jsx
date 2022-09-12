import React from 'react'

function Items() {

  const languageObjects = [
    {
      text: 'JavaScript',
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      clicked: false
    },
    {
      text: 'Python',
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      clicked: false
    },
    {
      text: "Java",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      clicked: false
    },
    {
      text: 'Kotlin',
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      clicked: false
    },
    {
      text: 'Swift',
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      clicked: false
    },
    {
      text: "Scala",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
      clicked: false
    },{
      text: 'Rust',
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
      clicked: false
    },
    {
      text: 'GoLang',
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
      clicked: false
    },
    {
      text: "C#",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      clicked: false
    },{
      text: 'PHP',
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      clicked: false
    },
    {
      text: 'TypeScript',
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      clicked: false
    },
    {
      text: "C++",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      clicked: false
    }
  ]

  const languageElements = languageObjects.map((language, idx) => {
    return (
      <div key={idx} className='item'>
        <p>{language.text}</p>
        <img src={language.img} className='item-img' alt="" />
      </div>
    )
  })

  console.log(languageElements)

  return (
    <div className='item-ctnr'>
      {languageElements}
    </div>
  )
}

export default Items