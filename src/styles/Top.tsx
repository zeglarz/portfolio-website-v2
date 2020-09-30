import styled, { css } from 'styled-components';
import media from './style';


interface IPageWrapper {
    reverse?: boolean;
    noReverse?: boolean;
}

const StyledTop = styled.div<IPageWrapper>`
 display: flex;
width: 100%;
height: 100%;
min-height: calc(100vh - 85px);
flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
${({ noReverse }) => noReverse ?
                     css`
                        ${media.tablet`
                                    min-height: 750px;
                                    flex-direction: column;
                        `}`
                               :
                     css`
                            ${media.tablet`
                            min-height: 750px;
                            flex-direction: column-reverse;
                        `}`
};
        ${media.desktop`
            padding-top: 100px;
            padding-bottom: 100px;    
        `}
`;

export default StyledTop;
