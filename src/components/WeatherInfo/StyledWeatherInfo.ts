import styled from 'styled-components'

export const StyledWeatherInfo = styled.div`
  margin: 10px;

  .wrapper {
    .city {
      font-size: 21px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    .mainInfo {
      display: flex;
      align-items: center;
      padding-bottom: 5px;

      img {
        width: 50px;
        margin-right: 20px;
      }

      div {
        span {
          font-size: 27px;
        }

        span:after {
          content: '°';
        }
      }
    }

    .shortDesc {
      padding-bottom: 10px;
      
      span {
        background: #5ac65a;
        color: white;
        border-radius: 6px;
        padding: 0 10px;
      }
    }

    .feelsLike {
      padding-bottom: 10px;
      
      span:after {
        content: '°';
      }
    }
    
    .subInfo {
      border-left: 1px solid #5ac65a;
      padding-left: 10px;
      
      span:after {
        content: '°';
      }
    }
  }
`