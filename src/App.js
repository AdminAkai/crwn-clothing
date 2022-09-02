import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import Home from "./app/routes/Home";
import Navigation from './app/routes/Navigation';
import Authentication from './app/routes/Authentication';
import Shop from './app/routes/Shop';
import Checkout from './app/routes/Checkout/'

import { checkUserSession } from './app/redux/features/userSlice'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;