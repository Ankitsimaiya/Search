
import './App.css'
import Home from './component/Home'
import SearchBar from './component/SearchBar'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"

function App() {
  

  return (
    <>
     
      <Router>
        <Routes>
          <Route path='/' element={<SearchBar/>}  />
          <Route path='/result' element={<Home/>}  />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
