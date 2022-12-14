import styled, {css} from 'styled-components'

const size = {
    mobile900: "900px"
}

const mobile900 = (inner: any) => css`
  @media (max-width: ${size.mobile900}) {
    ${inner};
  }
`;

export const StyledAddCity = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;

  form {
    display: flex;
    align-items: center;

    .input {
      width: 400px;
      max-width: 400px;
      outline: none;
      border: 1px solid #d9d9d9;
      border-right: 0;
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
      padding: 7px;
      transition: .1s;

      ${mobile900(css`
        width: 200px;
      `)};
      
      &:hover {
        border: 1px solid #4096ff;
        border-right: 0;
        outline: none;
      }

      &:focus {
        border: 1px solid #4096ff;
        outline: none;
        box-shadow: 0 0 0 2px rgb(5, 145, 255, 0.1);
      }
    }

    .button {
      outline: none;
      background: #1677ff;
      border: 0;
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
      color: white;
      font-size: 16px;
      padding: 6.5px 10px;
      transition: .1s;
      cursor: pointer;
      display: flex;
      align-items: center;

      ${mobile900(css`
        font-size: 12px;
        padding: 8.5px 7px;
      `)};

      &:hover {
        background: #4096ff;
      }

      &:active {
        background: #0958d9;
      }
    }
  }
`