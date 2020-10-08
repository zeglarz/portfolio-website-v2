import styled from 'styled-components/macro';
import { StyledLink } from '../../../styles/StyledLink';

interface Custom {
  withoutOutline?: boolean;
}

export default styled(StyledLink)<Custom>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 8px;
  padding: 8px;
  svg {
    color: ${({ theme }) => theme.colors.text};
    width: 24px;
    height: 24px;
  }
  &:hover {
    svg {
      fill: ${({ theme, withoutOutline }) =>
        !withoutOutline ? '' : theme.gradients.svg};
      stroke: ${({ theme, withoutOutline }) =>
        withoutOutline ? '' : theme.gradients.svg};
    }
  }
`;
