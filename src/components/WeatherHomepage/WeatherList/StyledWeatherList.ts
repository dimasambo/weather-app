import styled, {css} from 'styled-components'

const size = {
    mobile1800: "1800px",
    mobile1400: "1400px",
    mobile1000: "1000px"
}

const mobile1800 = (inner: any) => css`
  @media (max-width: ${size.mobile1800}) {
    ${inner};
  }
`;

const mobile1400 = (inner: any) => css`
  @media (max-width: ${size.mobile1400}) {
    ${inner};
  }
`;

const mobile1000 = (inner: any) => css`
  @media (max-width: ${size.mobile1000}) {
    ${inner};
  }
`;

export const StyledWeatherList = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;

  ${mobile1800(css`
    grid-template-columns: 1fr 1fr 1fr;
  `)};

  ${mobile1400(css`
    grid-template-columns: 1fr 1fr;
  `)};

  ${mobile1000(css` 
    grid-template-columns: 1fr;
  `)};
`
