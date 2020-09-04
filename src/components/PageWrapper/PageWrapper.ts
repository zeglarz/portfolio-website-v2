import styled from 'styled-components';
import media from '../../styles/style';

const PageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${({theme}) => theme.colors.background};
    z-index: 2;
    width: 100%;
    
    section {
        width: 100%;
    }

    .top {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: calc(100vh - 85px);
        ${media.tablet`
            min-height: 750px;
        `}
        ${media.desktop`
            padding-top: 100px;
            padding-bottom: 100px;    
        `}

    &.--reverse {
        flex-direction: row-reverse;
        ${media.tablet`
               flex-direction: column-reverse;
        `}
    }

     ${media.tablet`
        flex-direction: column;
     `}

      section {
          display: flex;
          justify-content: center;
          align-items: center;
          ${media.tablet`
                justify-content: flex-start;
                align-items: flex-start;
          `}
      }
  }

.middle {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
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
      background: ${({theme}) => theme.colors.text};
      border-radius: 5px;
      ${media.tablet`
          padding: 1.4rem;
      `}
   }
}
`;

export default PageWrapper;
