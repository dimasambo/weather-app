import styled, {css} from 'styled-components'

const size = {
    mobile900: "900px"
}

const mobile900 = (inner: any) => css`
  @media (max-width: ${size.mobile900}) {
    ${inner};
  }
`;

export const StyledSelect = styled.div`
  margin: 0;
  position: absolute;
  background: white;
  width: 400px;
  left: calc(50% - 240px);

  ${mobile900(css`
    width: 200px;
    left: calc(50% - 130px);
  `)};

  .listItem {
    cursor: pointer;

    &:hover {
      background: #ececec;
    }
  }
`