import React from 'react';
import styled from 'styled-components';
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
    .line-container {
        position: relative;
        overflow: hidden;
    .line {
        max-width: 480px;
        background: ${({theme}) => theme.gradients.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
      }
    }
`;


const Hero = ({title, fLine, sLine, content}) => {
    return (
        <StyledHero>
            <div className='hero-wrapper'>
                <h3>{title}</h3>
                <div>
                    <div className='line'>
                        <div className='line-container'>
                            {fLine && fLine}
                        </div>
                    </div>
                    <div className='line'>
                        <div className='line-container'>
                            {sLine && sLine}
                        </div>
                    </div>
                </div>
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
