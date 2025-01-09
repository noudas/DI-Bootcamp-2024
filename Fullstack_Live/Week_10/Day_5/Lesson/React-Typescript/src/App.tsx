
import './App.css'
import Heading from './components/Heading'
import List from './components/list'
import Section from './components/Section'

import { useState, useEffect } from 'react'
type Monster = {
  id: number;
  username: string;
}



function App() {

  const [count, setCount] = useState<number | null>(null)
  const [monster, setMonster] = useState<Monster[]>([])

  useEffect(()=>{
    return 
  })

  return (
    <>
      <Heading title='WUBALUBADUDUB' subtitle='Test'/>
      <Section>
        <h1>This is a child</h1>
      </Section>
      <List items={[1,2,3,4,5,6,7,8,9]}/>
    </>
  )
}

export default App
