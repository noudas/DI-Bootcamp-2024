import './app.css'
import User from './components/User'
import users from './users.json'

export function App() {
  return (
    users.map((item,index) =>{
      return <User key={index} info={item}/>
    })
  )
}
