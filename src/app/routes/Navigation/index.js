import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import CartIcon from '../../components/CartIcon'
import CartDropdown from '../../components/CartDropdown'

import  { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { UserContext } from '../../contexts/user'
import { CartContext } from '../../contexts/cart'
import { signOutUser } from '../../utils/firebase'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './styledComponents.js'

function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)



  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ?
              (
                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
              ) 
              :
              (
                <NavLink to='/auth'>
                  SIGN IN
                </NavLink>
              )
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation