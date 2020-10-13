import styled from 'styled-components/macro';
import Particles from 'react-particles-js';

export default styled(Particles).attrs({
  params: {
    particles: {
      number: {
        value: 140,
        speed: {
          value: 120,
        },
        density: {
          enable: true,
          value_area: 1000,
        },
      },
    },
  },
})`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
