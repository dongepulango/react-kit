import React, { useContext } from 'react';
//context
import { GlobalContext } from '../Context';
//router
import { Link } from 'react-router-dom'
//styles
import styled from 'styled-components';
import vars from './Vars';
//components
import Nav from './Nav';
import ContainerFluid from '../components/ContainerFluid';
import MobileNav from './MobileNav';
//assets
import logo from '../assets/images/BalkanBrothers-logo-white.svg';

//styled
const HeaderInner = styled.header`
  display: flex;
  align-items: center;
  background-color: ${vars.colors.textDark};
  padding-top: 20px;
  padding-bottom: 20px;
  transition: background-color 0.3s ease-in-out;
  will-change: background-color;
  height: ${vars.navHeight};
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  &.active {
    background-color: transparent;
    z-index: 99999;
  }
`;
const NavContainerFluid = styled(ContainerFluid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Header = () => {

  // //use State
  // const [navState, setNavState] = useState({
  //   active: false
  // });

  // //set nav active
  // const toggleNavActive = () => {
  //   setNavState({
  //     active: !navState.active,
  //   })
  // }

  // //mount
  // useEffect(() => {
  //   console.log('Mounted!');
  //   //unmount
  //   return () => {
  //     console.log('Unmounted!');
  //   };
  // }, []);

  //use Context
  const [state, setState] = useContext(GlobalContext);

  //toggle mobile nav state
  const toggleMobileNav = () => {
    setState({
      ...state,
      mobileNav: !state.mobileNav,
    })
  }

  //close modal
  const closeMobileNav = () => {
    setState({
      ...state,
      mobileNav: false,
    })
  }
  
  return (
    <HeaderInner className={state.mobileNav ? 'active' : null}>
      <NavContainerFluid maxWidth={'1600px'}>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Nav
          mobileNavState={state.mobileNav}
          toggleMobileNav={toggleMobileNav}
        />
      </NavContainerFluid>
      <MobileNav
        openModal={state.mobileNav}
        closeMobileNav={closeMobileNav}
      />
    </HeaderInner>
  );
}

export default Header;