import styled, {css} from 'styled-components';
import React, {useRef} from "react";
import {radius} from "../../utils/variables";

const ButtonStyle = styled.button`
  border-radius: ${radius.medium};
  position: relative;
  user-select: none;
  color: #ffffff;
  background-color: ${p => (p.secondary) ? p => p.theme.secondaryColor : p => p.theme.accentColor};
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  overflow: hidden;
  width: ${p => (p.fullWidth) ? '100%' : null};
};
  
  ${p => (p.large) ? css`
    padding: 10px 40px;
    font-size: 1.5rem;
  ` : css`
    padding: 8px 20px;
    font-size: 1rem;
  `}
  
  &:hover {
    box-shadow: 0 6px 8px -3px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
  
  &:focus {
    outline: none;
  }
  
  &:disabled {
    background-color: #eeeeee;
    color: #000000;
  }
`;

const Button = ({children, ...props}) => {
    const btnRef = useRef(null);

    const whenClick = (e) => {
        const tag = btnRef.current;
        let d, x, y;
        if (tag.querySelectorAll('.taint').length === 0) {
            const span = document.createElement('span');
            span.setAttribute('class', 'taint');
            tag.prepend(span);
        }
        const taint = tag.querySelectorAll('.taint')[0];
        taint.classList.remove('drop');

        let height = taint.clientHeight;
        let width = taint.clientWidth;
        if (!height && !width) {
            d = Math.max(tag.offsetWidth, tag.offsetHeight);
            taint.style.height = d + 'px';
            taint.style.width = d + 'px';
        }

        height = taint.clientHeight;
        width = taint.clientWidth;

        x = e.pageX - getOffset(tag).left - width / 2;
        y = e.pageY - getOffset(tag).top - height / 2;

        taint.style.top = y + 'px';
        taint.style.left = x + 'px';
        taint.classList.add('drop');
    }

    function getOffset(element) {
        if (!element.getClientRects().length) {
            return {top: 0, left: 0};
        }

        let rect = element.getBoundingClientRect();
        let win = element.ownerDocument.defaultView;
        return (
            {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            });
    }

    return (
        <ButtonStyle {...props} ref={btnRef} onClick={
            (e) => {
                whenClick(e);
                if (props.onClick) {
                    props.onClick(e);
                }
            }
        }>{children}</ButtonStyle>
    )
}

export {Button};
