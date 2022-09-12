import React, { useState } from 'react'

function Items() {

  let [score, setScore] = useState(0)

  const [gameOver, setGameOver] = useState(false)
  
  const [items, setItems] = useState([
    {
      text: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      clicked: 0
    },
    {
      text: "Python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      clicked: 0
    },
    {
      text: "Java",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      clicked: 0
    },
    {
      text: "Kotlin",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      clicked: 0
    },
    {
      text: "Swift",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      clicked: 0
    },
    {
      text: "Scala",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
      clicked: 0
    },{
      text: "Rust",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
      clicked: 0
    },
    {
      text: "GoLang",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
      clicked: 0
    },
    {
      text: "C#",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      clicked: 0
    },{
      text: "PHP",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      clicked: 0
    },
    {
      text: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      clicked: 0
    },
    {
      text: "C++",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      clicked: 0
    }
  ])


  const languageElements = items.map((item, idx) => {
    return (
      <div key={idx} className='item text-center pt-4 bg-gray-300'>
        <p>{item.text}</p>
        <img src={item.img} className='item-img mx-auto my-4' alt="" />
        <button className='item-btn' disabled={gameOver ? true : false} onClick={(e) => handleClick(e)}>Select</button>
      </div>
    )
  })

  const handleGameOver = () => {
    setGameOver(() => true)
  }

  console.log(items)

  const playAgain = () => {
    setGameOver(() => false)
    setScore(0)
    const itemsCopy = [...items]
    const newItems = itemsCopy.map(item => {
      return {
        text: `${item.text}`,
        img: `${item.img}`,
        clicked: parseInt(0)
      }
    })
    setItems(() => newItems)
  }
    
    const handleClick = (e) => {
      const target = e.target.parentElement.children[0].textContent
      
      const itemsCopy = [...items]
      
      for(let i = 0; i<itemsCopy.length; i++) {
        const item = itemsCopy[i].text 
        if(target === item && itemsCopy[i].clicked === 0) {
          setScore(prev => prev + 1)
          return setItems([...itemsCopy].sort(() => Math.random() - 0.5), itemsCopy[i].clicked = items[i].clicked +1)
        } else if (itemsCopy[i].clicked === 1){
          handleGameOver()
        }
      }
    }
    
    return (
      <div>
      <div className='item-ctnr'>
      {languageElements}
      </div>
      <span className='text-center'>{gameOver ? `You scored: ${score}` : `Your score: ${score}`}</span>
      {gameOver && <button className='play-again-btn' onClick={playAgain}>Play Again</button>}
    </div>
  )
}
  


export default Items