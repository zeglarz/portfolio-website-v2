import styled, {css} from "styled-components";
import media from "./style";

interface ITitle {
    elTitle?: boolean;
    pageTitle?: boolean;
    section?: boolean
}

export const Title = styled.div<ITitle>`
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
      font-family: 'Abril';
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
