import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  box-shadow: 0 0 1px ${p => p.theme.secondaryColor};
  border-radius: 34px;
`;

const Label = styled.label`
  
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: ${p => p.theme.primaryColor};
  }
  
  &:checked + span:before {
    transform: translateX(26px);
  }
`;


const Notch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`

const Toggle = ({isActive, onToggle}) => {
    return (
        <ToggleWrapper>
            <Label>
                <Input type="checkbox" onClick={onToggle} />
                <Notch/>
            </Label>
        </ToggleWrapper>
    )
}

export {Toggle};
