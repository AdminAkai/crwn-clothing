
import { Outlet, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CartIcon from '../../components/CartIcon'
import CartDropdown from '../../components/CartDropdown'

import  { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { selectCurrentUser } from '../../redux/features/userSlice/selectors'
import { selectIsCartOpen } from '../../redux/features/cartSlice/selectors'

import { signOutUser } from '../../utils/firebase'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './styledComponents.js'

function Navigation() {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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