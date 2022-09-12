import React, { useState } from 'react'

function Items() {

  // let [score, setScore] = useState(0)
  
  const [items, setItems] = useState([
    {
      text: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      clicked: false
    },
    {
      text: "Python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      clicked: false
    },
    {
      text: "Java",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      clicked: false
    },
    {
      text: "Kotlin",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      clicked: false
    },
    {
      text: "Swift",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      clicked: false
    },
    {
      text: "Scala",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
      clicked: false
    },{
      text: "Rust",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
      clicked: false
    },
    {
      text: "GoLang",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
      clicked: false
    },
    {
      text: "C#",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      clicked: false
    },{
      text: "PHP",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      clicked: false
    },
    {
      text: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      clicked: false
    },
    {
      text: "C++",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      clicked: false
    }
  ])

  const languageElements = items.map((item, idx) => {
    return (
      <div key={idx} className='item text-center pt-4 bg-gray-300'>
        <p>{item.text}</p>
        <img src={item.img} className='item-img mx-auto my-4' alt="" />
        <button className='item-btn' onClick={(e) => handleClick(e)}>Select</button>
      </div>
    )
  })

  // const gameOver = () => {
  //   setItems(items.map(item => {
  //     return ({
  //       text: `${item.text}`,
  //       img: `${item.img}`,
  //       clicked: false
  //     })
  //   }))
  //   console.log(items)
  // }

  const shuffle = () => {
    const itemsCopy = [...items]
    setItems(itemsCopy.sort((a, b) => 0.5 - Math.random()))
    console.log(items)
  }

  const handleClick = (e) => {
    const target = e.target.parentElement.children[0].textContent
    const itemsCopy = [...items]

    for(let i = 0; i<itemsCopy.length; i++) {
      const item = itemsCopy[i].text 
      if(target === item) {
        setItems(itemsCopy, itemsCopy[i].clicked = true)
        shuffle()
      }
    }
  }


  return (
    <div className='item-ctnr'>
      {languageElements}
    </div>
  )
}

export default Items