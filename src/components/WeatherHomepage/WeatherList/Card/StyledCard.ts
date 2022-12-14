import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-around;
  transition: .1s;
  cursor: pointer;
  padding: 5px 15px 15px;
  width: 100%;
  box-shadow: -1px -1px 15px -2px rgb(141, 141, 141);
  transition: .1s;
  border-radius: 6px;
  
  &:hover {
    box-shadow: -1px -1px 15px 1px rgb(141, 141, 141);
  }

  a {
    text-decoration: none;
    color: #282c34;
    width: 100%;

    .cardWrapper {
      display: flex;
      flex-direction: column;

      .body {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        width: 100%;

        .item {
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: 3px;
          background: rgba(87, 212, 87, 0);
          transition: .3s;

          img {
            width: 70px;
          }

          .celc:after {
            content: '°';
          }
        }

        .item.updated {
          transition: .3s;
          background: rgba(87, 212, 87, .7);
        }

        .temp {
          font-size: 27px;
        }

        .city {
          font-size: 21px;
        }
        
        .subInfo {
          font-size: 15px;
          display: flex;
          flex-direction: column;
          text-align: left;

          .subInfoDesc {
            font-size: 11px;
          }
        }
      }

      .header {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        div {
          margin: 0 1px;
          padding: 6px 6px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: 3px;


          &:hover {
            background: lightblue;
          }

          img {
            width: 11px;
            transition: .3s;
          }
        }

        .update {
          &:active img {
            transform: rotate(360deg);
          }

          span {
            font-size: 9px;
            margin: 0 5px;
          }
        }

        .delete {
          &:active {
            background: #ff6f6f;
          }
        }
      }
    }
  }
`