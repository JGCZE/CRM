import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import Form from "./pages/Form"
import OneClient from "./pages/OneClient"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SharedLayout /> } >
          <Route path="/" element={ <Home /> } />
          <Route path="form" element={ <Form /> }/>
          <Route path="one-client/:clientID" element={ <OneClient />} />

          {/* <NavBar /> */}

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
