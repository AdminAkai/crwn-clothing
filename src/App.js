import { Routes, Route } from 'react-router-dom'

import Home from "./app/routes/Home";
import Navigation from './app/routes/Navigation';
import SignIn from './app/routes/SignIn';

function Shop() {
  return (
    <h1>I am the shop page</h1>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;