import React, { useState } from 'react'

function Items() {

  let [score, setScore] = useState(0)
  let [highScore, setHighScore] = useState(0)

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
        <p style = {{ display: "none"}}>{idx}</p>
        <img src={item.img} className='item-img mx-auto my-4' alt="" />
        <button className='item-btn' disabled={gameOver ? true : false} onClick={(e) => handleClick(e)}>Select</button>
      </div>
    )
  })

  const handleGameOver = () => {
    if(score > highScore) {
      setHighScore(() => score)
      setGameOver(() => true)
    } else {
      setHighScore(prevScore => prevScore)
      setGameOver(() => true)
    } 
  }

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
      const index = parseInt(e.target.parentElement.children[1].textContent)
      const itemsCopy = [...items]
      if(itemsCopy[index].clicked === 0) {
        itemsCopy[index].clicked = 1
        setItems(itemsCopy.sort(() => Math.random() - 0.5))
        setScore(prevScore => prevScore +1)
        if(score === highScore) {
          setHighScore(prevScore => prevScore +1)
        }
      } else {
        return handleGameOver()
      }
    }
    
    return (
      <div>
      <div className='item-ctnr'>
      {languageElements}
      </div>
      <span className='scoreboard'>{gameOver ? `You scored: ${score}` : `Your score: ${score}`}</span>
      <span className='scoreboard high-score' >{`High score: ${highScore}`}</span>
      {gameOver && <button className='play-again-btn' onClick={playAgain}>Play Again</button>}
    </div>
  )
}


export default Items