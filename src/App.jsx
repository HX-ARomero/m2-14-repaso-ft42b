import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Detail from './components/Detail'

function App() {

	const { pathname } = useLocation(); // { pathname: "/home"}
	// console.log(pathname);

  return (
		<div>
			<h1>Rick & Morty - Episodes</h1>
			{
				pathname !== "/" ? <NavBar /> : null
			}
			<Routes>
				<Route path="/" element={<Landing />}/>
				<Route path="/home" element={<Home />}/>
				<Route path="/favorites" element={<Favorites />}/>
				<Route path="/detail/:id" element={<Detail />}/>
			</Routes>
		</div>
  )
}

export default App
