import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {Button, Tooltip} from '@material-ui/core';
import media from '../../styles/style';


const StyledLink = styled.a.attrs({
    rel: 'noopener noreferrer',
    target: '_blank',
})``;

const StyledHero = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
 
    ${media.tablet`
        margin-top: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
    `}
    
    .hero-container {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        
        .paragraph {
            color: ${({theme}) => theme.colors.text};
            font-size: 1.1rem;
            line-height: 1.8;
            overflow-wrap: break-word;
            word-wrap: break-word;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
            max-width: 720px;
            @media (max-width: 1366px) {
            font-size: 0.95rem;
            }
            @media (max-width: 992px) {
            font-size: 0.9rem;
            }
            @media (max-width: 768px) {
            font-size: 0.95rem;
            }
            @media (max-width: 576px) {
            font-size: 0.9rem;
            }
            margin-bottom: 30px;
            color: ${({theme}) => theme.colors.text};
            @media (max-width: 768px) {
            margin-bottom: 20px;
            }
            .content-container {
            position: relative;
            overflow: hidden;
            display: flex;
            width: 100%;
            .content {
              max-width: 450px;
                }
              }
            ${media.giant`
                max-width: 390px;
            `}
        }
    }
    
    .social-links {
        margin-bottom: 32px;
        
        ul {
          display: flex;
          list-style: none;
          li {
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-inline-end: 8px;
              padding: 8px;
              svg {
                color: ${({theme}) => theme.colors.text};
                width: 24px;
                height: 24px;
              }
              &:hover {
                svg {
                  color: ${({theme}) => theme.colors.text};
                }
              }
            }
          }
        }
    }
`;

interface ITitle {
    elTitle?: boolean;
    pageTitle?: boolean;
    section?: boolean
}

const Title = styled.div<ITitle>`
  font-size: 2.5rem;
  @media (max-width: 1366px) {
    font-size: 1.7rem;
  }
  @media (max-width: 992px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
  line-height: 1.2;
  margin-bottom: 30px;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.text};
  font-family: 'Abril Fatface';
  font-weight: 900;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  .line-wrapper {
    position: relative;
    overflow: hidden;
    .line {
      max-width: 480px;
      background: ${({theme}) => theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
          /* visibility: hidden; */
    }
  }

  ${({elTitle}) =>
    elTitle &&
    css`
      font-size: 1.5rem;
      letter-spacing: 0px;
      color: ${({theme}) => theme.colors.text};
      font-family: 'Lato';
      font-weight: 700;
      margin-bottom: 1.2rem;
      .line-wrapper {
        position: relative;
        overflow: hidden;
        .line {
          max-width: 480px;
          visibility: visible;
        }
      }
      @media (max-width: 1366px) {
        font-size: 1.2rem;
      }
      @media (max-width: 992px) {
        font-size: 1.1rem;
      }
      @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
      }
      @media (max-width: 576px) {
        font-size: 1.1rem;
      }
    `}

  ${({section}) =>
    section &&
    css`
      font-size: 1.7rem;
      letter-spacing: 0px;
      .line-wrapper {
        position: relative;
        overflow: hidden;
        .line {
          max-width: 480px;
          visibility: visible;
        }
      }
      @media (max-width: 1366px) {
        font-size: 1.3rem;
      }
      @media (max-width: 992px) {
        font-size: 1.1rem;
      }
      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
      @media (max-width: 576px) {
        font-size: 1.3rem;
      }
    `}

  ${({pageTitle}) =>
    pageTitle &&
    css`
      font-size: 1rem;
      font-weight: 900;
      font-family: 'Abril Fatface';
      text-transform: uppercase;
      letter-spacing: 1px;
      color: gray;
      font-size: 0.8rem;
      margin-bottom: 1rem;
      @media (max-width: 1366px) {
        font-size: 0.85rem;
      }
      @media (max-width: 992px) {
        font-size: 0.8rem;
      }
      @media (max-width: 768px) {
        font-size: 0.85rem;
        margin-bottom: 0.7rem;
      }
      @media (max-width: 576px) {
        font-size: 0.8rem;
      }
      .line-wrapper {
        position: relative;
        overflow: hidden;
        .line {
          max-width: 480px;
          visibility: visible;
        }
      }
    `}
`;


const Hero = ({title, fLine, sLine, content}) => {
    return (
        <StyledHero>
            <div className='hero-container'>
                <Title pageTitle>{title}</Title>
                <Title>
                    <div className='line-container'>
                        <div className='line'>
                            {fLine && fLine}
                        </div>
                    </div>
                    <div className='line-container'>
                        <div className='line'>
                            {sLine && sLine}
                        </div>
                    </div>
                </Title>
                <div className='paragraph'>
                    <div className='text-wrapper'>
                        <div className='content'>{content && content}</div>
                    </div>
                </div>
            </div>
        </StyledHero>
    );
}

export default Hero;
