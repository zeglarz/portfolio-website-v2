import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {Button, Tooltip} from '@material-ui/core';
import media from '../../styles/style';
import Icon from './SocialIcons/withIcon';
import {SOCIAL as socials} from './constants';

interface Custom {
    withoutOutline?: boolean;
}

const StyledLink = styled.a.attrs({
    rel: 'noopener noreferrer',
    target: '_blank',
})<Custom>`
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
          stroke: ${({theme, withoutOutline}) => withoutOutline ? '' : theme.gradients.svg};
          fill: ${({theme, withoutOutline}) => !withoutOutline ? '' : theme.gradients.svg};

        }
      }
    }
`;

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
            margin-bottom: 30px;
            color: ${({theme}) => theme.colors.text};
            
            ${media.giant`
                font-size: 0.95rem;
                max-width: 390px;
            `}
            
            ${media.desktop`
                font-size: 0.9rem;
            `}
            
             ${media.tablet`
                margin-bottom: 20px;
                font-size: 0.95rem;
            `}
             
            ${media.thone`
                font-size: 0.9rem;
            `}
          
            .content-container {
                position: relative;
                overflow: hidden;
                display: flex;
                width: 100%;
                
                .content {
                    max-width: 450px;
                }
            }
        }
    }
    
    .social-links {
        margin-bottom: 32px;
        
        ul {
          display: flex;
          list-style: none;
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
  line-height: 1.2;
  margin-bottom: 30px;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.text};
  font-family: 'Lato';
  font-weight: 900;
  
  ${media.giant`
      font-size: 1.7rem;
  `}
  
   ${media.desktop`
        font-size: 1.5rem;
  `}
   
   ${media.tablet`
        font-size: 2.2rem;
        margin-bottom: 20px;
  `}
   
   ${media.thone`
        font-size: 1.8rem;
  `}
 
  .line-wrapper {
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

  ${({elTitle}) =>
    elTitle &&
    css`
      font-size: 1.5rem;
      letter-spacing: 0px;
      color: ${({theme}) => theme.colors.text};
      font-family: 'Lato';
      font-weight: 700;
      margin-bottom: 1.2rem;
      
      ${media.giant`
        font-size: 1.2rem;
      `}
    
      ${media.desktop`
        font-size: 1.1rem;
      `}
    
      ${media.tablet`
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
      `}
    
      ${media.giant`
        font-size: 1.1rem;
      `}
      
      .line-wrapper {
        position: relative;
        overflow: hidden;
        
        .line {
          max-width: 480px;
          visibility: visible;
        }
      }
    `
}

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
      
      ${media.giant`
            font-size: 1.3rem;
      `}
      
      ${media.desktop`
            font-size: 1.1rem;
      `}
      
      ${media.tablet`
            font-size: 1.4rem;
      `}
      
      ${media.thone`
            font-size: 1.3rem;
      `}
    `
}

  ${({pageTitle}) =>
    pageTitle &&
    css`
      font-size: 0.8rem;
      font-weight: 900;
      font-family: 'Abril Fatface';
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #808080;
      margin-bottom: 1rem;
      
      ${media.giant`
        font-size: 0.85rem;
      `}
      
      ${media.desktop`
        font-size: 0.8rem;
      `}
      
      ${media.tablet`
        font-size: 0.85rem;
        margin-bottom: 0.7rem;
      `}
      
      ${media.thone`
        font-size: 0.8rem;
      `}
      
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


const Hero = ({title, fLine, sLine, content, withSocial = false}) => {
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
                {withSocial && (
                    <div className='social-links'>
                        <ul>
                            {socials.map(social =>
                                (
                                    <li key={social.link}>
                                        <Tooltip arrow title={social.name}>
                                            <StyledLink href={social.link}
                                                        withoutOutline={social.name === 'Stack Overflow' || social.name === "Mail"}>
                                                <Icon icon={social.icon}
                                                      withoutOutline={social.name === 'Stack Overflow' || social.name === "Mail"}/>
                                            </StyledLink>
                                        </Tooltip>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </StyledHero>
    );
}

export default Hero;
