import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
  display: flex;
  padding: 0.75rem;
  align-items: center;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.35s;
  transition-timing-function: linear;
  font: inherit;
  text-transform: none;
  overflow: visible;
  background-color: transparent;
  border: 0;
  margin: 0 auto;
  
  &:hover .hamburger-inner,
  &:hover .hamburger-inner::before,
  &:hover .hamburger-inner::after {
     background: ${({theme}) => theme.gradients.primary};
  }

  &.is-active:hover {
    opacity: 0.7; 
  }
    
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
      background: ${({theme}) => theme.gradients.primary};
}

.hamburger-box {
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative; 
  }

.hamburger-inner {
  text-align: center;
  display: block;
  margin: 11px auto;
 }
 
  .hamburger-inner, 
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 22px;
    height: 2px;
    background: ${({theme}) => theme.colors.text};
    border-radius: 3px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; 
  }
    
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block; 
  }
  
  .hamburger-inner::before {
    top: -7px; 
  }
  
  .hamburger-inner::after {
    bottom: -7px; 
  }

& .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  & .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }
  & .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

&.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
  }
  &.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; 
    }
  &.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); 
}
  &:focus {
    outline: none;
  }
`;

const Burger = (props) => {
    return (
        <StyledBurger {...props}>
         <span className="hamburger-box">
             <span className="hamburger-inner"/>
         </span>
        </StyledBurger>
    );
};

export default Burger;
