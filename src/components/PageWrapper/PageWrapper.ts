import styled from 'styled-components';
import media from '../../styles/style';


interface IPageWrapper {
    reverse?: boolean;
}

const PageWrapper = styled.div<IPageWrapper>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    z-index: 2;
    width: 100%;
    
    section {
        width: 100%;
    }
    
     ${media.tablet`
        flex-direction: column;
     `}

    .top {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: calc(100vh - 85px);
        flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
        ${media.tablet`
            min-height: 750px;
            flex-direction: column-reverse;
        `}
        ${media.desktop`
            padding-top: 100px;
            padding-bottom: 100px;    
        `}
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        ${media.tablet`
            align-items: flex-start;
        `}
    }
  }

.middle {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    height: 100%;
}

.bottom {
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding-bottom: 7rem;
    
    ${media.tablet`
        padding-bottom: 5rem;
    `}
    
   .button-banner {
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 4rem 3rem;
        background: ${({ theme }) => theme.colors.text};
        border-radius: 5px;
        ${media.tablet`
          padding: 1.4rem;
        `}
   }
}
.paragraph {
            color: ${({ theme }) => theme.colors.text};
            font-size: 1.1rem;
            line-height: 1.8;
            overflow-wrap: break-word;
            word-wrap: break-word;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
            max-width: 720px;
            margin-bottom: 30px;
            color: ${({ theme }) => theme.colors.text};
            
            ${media.giant`
                font-size: 0.95rem;
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
`;

export default PageWrapper;
