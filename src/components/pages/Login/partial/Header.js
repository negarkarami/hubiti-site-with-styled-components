import React from 'react';
import styled from 'styled-components';
import LogoSource from '../../../../static/img/logo-white.png';
import Wave1Source from '../../../../static/img/wave.svg';

const Wrapper = styled.header`
  position: relative;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wave1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(${Wave1Source});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Logo = styled.img`
  width: 100px;
  margin-top: -85px;
`;

export default function Header() {
    return (
        <Wrapper>
            <Wave1 />
            <Logo src={LogoSource} />
        </Wrapper>
    )
}
