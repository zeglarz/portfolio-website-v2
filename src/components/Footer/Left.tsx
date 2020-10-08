import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components/macro';
import Divider from '../Divider/Dividier';

const SDivider = styled(Divider)``;

const StyledLeft = styled.div<{ showVert?: boolean }>`
  & > ${SDivider} {
    display: none;
  }
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  .status {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    @media (max-width: 1200px) {
      font-size: 0.7rem;
    }
  }
  .text {
    @media (max-width: 1200px) {
      display: none;
    }
  }
  ${({ showVert }) =>
    showVert &&
    css`
      @media (min-width: 1440px) {
        & > ${SDivider} {
          display: flex;
        }
        width: 40px;
        position: fixed;
        bottom: 0;
        left: 40px;
        right: auto;
        z-index: 10;
        div {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          margin: 0;
          padding: 0;
          color: ${({ theme }) => theme.colors.secondary};
          flex-direction: column;
          position: relative;
          p {
            letter-spacing: 0.1em;
            -webkit-writing-mode: vertical-rl;
            writing-mode: vertical-rl;
            margin: 20px 10px 0px 10px;
            padding: 10px;
            .status {
              color: ${({ theme }) => theme.colors.text};
              font-weight: 700;
              @media (max-width: 1200px) {
                font-size: 0.7rem;
              }
            }
            .text {
              @media (max-width: 1200px) {
                display: none;
              }
            }
          }
        }
      }
    `}
`;

interface ILeft {
  showVert?: boolean;
}

const Left: FunctionComponent<ILeft> = ({ showVert }) => {
  return (
    <StyledLeft showVert={showVert}>
      <div>
        <p>
          <span className="text">Status · </span>
          <span className="status">Available for hire</span>
        </p>
      </div>
      <SDivider long vert />
    </StyledLeft>
  );
};

export default Left;
