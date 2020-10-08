import styled from 'styled-components/macro';

export default styled.span`
  font-family: 'Inconsolata', sans-serif !important;
  display: inline-flex;
  padding: 6px;
  border-radius: 7px;
  margin-block-end: 7px;
  margin-inline-end: 7px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
`;
