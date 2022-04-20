import React, {useState, useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Link as ReactRouterDomLink, useLocation} from "react-router-dom";
import {darken, lighten, rgba} from 'polished';
import {Icon} from "../Icon";

const Wrapper = styled.nav`
  height: 60px;
  border-top: 1px solid ${p => darken(0.1, p.theme.primaryColor)};
  background-color: ${p => p.theme.lightColor};
  position: fixed;
  z-index: 2;
  width: 100%;
  bottom: 0;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Item = styled.li`
  display: block;
  width: 100%;
  height: 100%;
`;

const CustomLink = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

const Link = styled(CustomLink)`
  color: ${p => (p.isActive) ? p.theme.secondaryColor : rgba(p.theme.secondaryColor, 0.5)};
  padding: 8px 10px;
  border-radius: 4px;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function BottomNavigation() {
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
            <Wrapper>
                <Items>
                    <Item>
                        <Link to={'/'} isActive={pathname === '/'}>
                            <Icon size={2.5} className="feather icon-home"/>
                        </Link>
                    </Item>
                    <Item>
                        <Link to={'/explore'} isActive={pathname === '/explore'}>
                            <Icon size={2.5} className="feather icon-search"/>
                        </Link>
                    </Item>
                    <Item>
                        <Link to={'/channel'} isActive={pathname.includes('/channel')}>
                            <Icon size={2.5} className="feather icon-layers"/>
                        </Link>
                    </Item>
                    <Item>
                        <Link to={'/profile'} isActive={pathname === '/profile'}>
                            <Icon size={2.5} className="feather icon-user"/>
                        </Link>
                    </Item>
                </Items>
            </Wrapper>
            {/*<Items>*/}
            {/*    <Item>*/}
            {/*        <Link to={'/'} isActive={pathname === '/'}>Home</Link>*/}
            {/*    </Item>*/}
            {/*    <Item>*/}
            {/*        <Link to={'/login'} isActive={pathname === '/login'}>Login</Link>*/}
            {/*    </Item>*/}
            {/*</Items>*/}
        </>
    )
}
