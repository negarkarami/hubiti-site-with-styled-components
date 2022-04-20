import styled from 'styled-components';
import {radius} from "../../utils/variables";
import React from "react";

const Wrapper = styled.div`
  background-image: ${p => `
    linear-gradient(to right,
    ${p.theme.tertiaryColor},
    ${p.theme.accentColor}
  )`};
  margin-bottom: ${p => (p.spaceDown) ? '20px' : null};
  border-radius: ${radius.medium};
  padding: 2px;
`;

const InputStyle = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: ${radius.medium};
  border: none;
  font-size: 1.5rem;
  text-align: ${p => (p.center) ? 'center' : null};
  direction: ltr;
`;

const Input = ({...props}) => {
  return (
      <Wrapper spaceDown>
        <InputStyle {...props} />
      </Wrapper>
  )
}

export {Input};
