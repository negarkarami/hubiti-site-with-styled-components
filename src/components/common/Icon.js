import styled from 'styled-components';

const Icon = styled.i`
  margin-right: -4px;
  font-size: ${p => (p.size) ? `${p.size}rem` : `1rem`} ;
`;

export {Icon};
