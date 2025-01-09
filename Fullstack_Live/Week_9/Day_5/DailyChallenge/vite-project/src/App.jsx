import './App.css'
import CategoryList from './Task/CategoryList'
import CategoryPosts from './Task/CategoryPosts'
import TaskList from './Task/TaskList'
import TaskPosts from './Task/TaskPosts'

function App() {
  return (
    <>
    <TaskPosts/>
    <TaskList/>
    <CategoryPosts/>
    <CategoryList/>
    </>
  )
}

export default App
