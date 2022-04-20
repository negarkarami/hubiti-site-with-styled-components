import React, {useState, useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Link as ReactRouterDomLink, useLocation} from "react-router-dom";
import {Toggle} from "../index";
import {darken} from 'polished';
import LogoSource from '../../../static/img/logo.png';

const Wrapper = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${p => darken(0.1, p.theme.primaryColor)};
  background-color: ${p => p.theme.primaryColor};
  position: fixed;
  z-index: 2;
  width: 100%;
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

const Logo = styled.img`
  height: 40px;
`;

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
            <Wrapper>
                <Logo src={LogoSource} />
                <Toggle onToggle={setTheme} />
            </Wrapper>
        </>
    )
}
