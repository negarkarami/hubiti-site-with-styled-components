import React, {useState, useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Link as ReactRouterDomLink, useLocation} from "react-router-dom";
import {mediaQueries} from "../../../../utils/mediaQueries";
import {Toggle} from "../../../common";
import {lighten, darken} from 'polished';

const HeaderWrapper = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${p => darken(0.1, p.theme.primaryColor)};
  background-color: ${p => p.theme.primaryColor};
  position: fixed;
  z-index: 2;
  width: 100%;
  // ${mediaQueries('sm')`background-color: green;`};
  // ${mediaQueries('md')`background-color: red;`};
  // ${mediaQueries('lg')`background-color: blue;`};
  // ${mediaQueries('xl')`background-color: brown;`};
`;

const DrawerMenu = styled.section`
  display: ${p => (p.status) ? 'flex' : 'none'};
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, .8);
  z-index: 2;
  width: 100vw;
  opacity: 0;
  animation: anim-menu-drawer .25s linear 1 forwards;
  
  @keyframes anim-menu-drawer {
    to {
      opacity: 1;
    }
  }
  
  // ${mediaQueries('lg')`
  //   display: flex;
  // `};
`;

const Menu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1;
  width: 75vw;
  margin-right: -100%;
  
  animation: anim-menu .5s linear 1 forwards;
  
  @keyframes anim-menu {
    to {
      margin-right: 0;
    }
  }
`;

const TopMenu = styled.div`
  background-color: ${p => lighten(0.1, p.theme.tertiaryColor)};
  height: 150px;
  width: 100%;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-left: 15px;
`;

const CustomLink = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

const Link = styled(CustomLink)`
  display: block;
  background-color: ${p => (p.isActive) ? p.theme.secondaryColor : p.theme.primaryColor};
  color: #ffffff;
  padding: 8px 10px;
  border-radius: 4px;
`;

const MenuButton = styled.button`
  font-size: 40px;
  background: transparent;
  border: none;
  padding: 0;
  color: ${p => p.theme.secondaryColor};
  height: 45px;
  
  // ${mediaQueries('lg')`
  //   display: none;
  // `};
`;

const Icon = styled.i`{
  margin-right: -4px;
}`

export function Header() {
    const {pathname} = useLocation();
    const [menuStatus, setMenuStatus] = useState(false);
    const {setTheme} = useContext(ThemeContext);

    const onMenu = (e) => {
        if(e.target === e.currentTarget) {
            setMenuStatus(s => !s);
        }
    }

    return (
        <>
            <HeaderWrapper>
                <MenuButton onClick={_ => setMenuStatus(s => !s)}>
                    <Icon className="feather icon-menu"/>
                </MenuButton>
                <Toggle onToggle={setTheme} />
            </HeaderWrapper>
            <DrawerMenu status={menuStatus} onClick={e => onMenu(e)}>
                <Menu>
                    <TopMenu>

                    </TopMenu>
                    <br />
                    <br />
                    <Items>
                        <Item>
                            <Link to={'/'} isActive={pathname === '/'}>Home</Link>
                        </Item>
                        <Item>
                            <Link to={'/login'} isActive={pathname === '/login'}>Login</Link>
                        </Item>
                    </Items>
                </Menu>
            </DrawerMenu>
        </>
    )
}
