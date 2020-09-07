import React from 'react';
import styled from 'styled-components';
import {Tooltip} from '@material-ui/core';
import media from '../../styles/style';
import Icon from './SocialIcons/withIcon';
import {SOCIAL as socials} from './constants';
import {Title} from '../../styles/Title';

interface Custom {
    withoutOutline?: boolean;
}

const StyledLink = styled.a.attrs({rel: 'noopener noreferrer', target: '_blank',})<Custom>`
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
          fill: ${({theme, withoutOutline}) => !withoutOutline ? '' : theme.gradients.svg};
          stroke: ${({theme, withoutOutline}) => withoutOutline ? '' : theme.gradients.svg};
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
       
    }
    
    .social-links {
        margin-bottom: 32px;
        
        ul {
          display: flex;
          list-style: none;
        }
    }
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
                                            <StyledLink
                                                href={social.link}
                                                withoutOutline={social.name === 'Stack Overflow' || social.name === "Mail"}
                                            >
                                                <Icon
                                                    icon={social.icon}
                                                    withoutOutline={social.name === 'Stack Overflow' || social.name === "Mail"}
                                                />
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
