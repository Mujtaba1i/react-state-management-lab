import { useState, useEffect } from "react"
import './App.css'

function App() {
  
  const charecters = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [strength, setStrength] = useState(0)
  const [agility, setAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState(charecters)

  function handleAddFigther(fighter){
    if (money > fighter.price){
      setMoney(money - fighter.price)
      setStrength(strength + fighter.strength)
      setAgility(agility + fighter.agility)
      const filterFighters = zombieFighters.filter(oneFighter => oneFighter.id !== fighter.id)
      setZombieFighters(filterFighters)
      setTeam([...team,fighter])
    }
  }

  function handlRemoveFighter(fighter){
    setMoney(money + fighter.price)
    setStrength(strength - fighter.strength)
    setAgility(agility - fighter.agility)
    const filterFighters = team.filter(oneFighter => oneFighter.id !== fighter.id)
    setTeam(filterFighters)
    setZombieFighters([...zombieFighters,fighter])  
  }

  useEffect(()=>{console.log(team)},[team])


  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>strength: {strength}</h3>
      <h3>agility: {agility}</h3>
      <h3>Team</h3>
      <ul>{team.length === 0 ? 'Pick some team members' : team.map(charecter => <li key={charecter.id}><img src={charecter.img} alt={charecter.name} /> {charecter.name}, Price: {charecter.price}, Strength: {charecter.strength}, Agility: {charecter.agility} <button onClick={()=>{handlRemoveFighter(charecter)}}>Remove</button> </li>) }</ul>
      <h3>Fighters</h3>
      <ul>{zombieFighters.map(charecter => <li key={charecter.id}><img src={charecter.img} alt={charecter.name} /> {charecter.name}, Price: {charecter.price}, Strength: {charecter.strength}, Agility: {charecter.agility} <button onClick={()=>{handleAddFigther(charecter)}}>Add</button> </li>)}</ul>
    </>
  )
}

export default App
