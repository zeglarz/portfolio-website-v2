import React from 'react';
import styled, { css } from 'styled-components';
import Divider from '../Divider/Dividier';
import Icon from '../../components/Hero/SocialIcons/withIcon';
import { github, linkedin, twitter } from '../Hero/SocialIcons/icons';
import { StyledLink } from '../../styles/StyledLink';


const SDivider = styled(Divider)``;

interface IShowVert {
    showVert?: boolean
}


const StyledRight = styled.div<IShowVert>`

 div {
 ${SDivider} {
 span {
height: 20px;
}
};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
  p {
    font-size: 12px;
    color: gray;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-inline-end: 0.5rem;
    @media (max-width: 1000px) {
      display: none;
    }
  }
  .icons {
    display: flex;
    .icon {
      color: ${({ theme }) => theme.colors.secondary};
      display: flex;
      padding: 0.75rem;
      @media (max-width: 1200px) {
        padding: 0.6rem;
      }
      cursor: pointer;
      svg {
        width: 20px;
        height: 20px;
        transition: all ease-in-out 250ms;
      }
      &:hover {
        svg {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
  }
      ${({ showVert }) => showVert && css`@media (min-width: 1440px) {

       width: 40px;
    position: fixed;
    bottom: 0;
    left: auto;
    right: 40px;
    z-index: 10;
    div {
     ${SDivider} {
 span {
height: 40px;
}
};
        display: flex;
        flex-direction: column-reverse;
        -webkit-box-align: center;
        align-items: center;
        margin: 0;
        padding: 0;
        p {
        display: none;
        }
        a {
        padding: 10px;
        }
    }
  }`}
`;

const Right = ({ showVert }) => {
    return (
        <StyledRight showVert={showVert}>
            <div>
                <p>Find me</p>
                <SDivider long={showVert} vert/>
                <div className='icons'>
                    <StyledLink
                        href='#'
                        className='icon'
                    >
                        <Icon icon={github}/>
                    </StyledLink>
                    <StyledLink
                        href='#'
                        className='icon'
                    >
                        <Icon icon={twitter}/>
                    </StyledLink>
                    <StyledLink
                        href='#'
                        className='icon'
                    >
                        <Icon icon={linkedin}/>
                    </StyledLink>
                </div>
            </div>
        </StyledRight>
    );
};

export default Right;
