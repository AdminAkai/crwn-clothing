import { Routes, Route } from 'react-router-dom'

import Home from "./app/routes/Home";
import Navigation from './app/routes/Navigation';
import Authentication from './app/routes/Authentication';
import Shop from './app/routes/Shop/Shop';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;