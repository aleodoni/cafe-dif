import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    height: 100%;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  body {
    background: #000;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #AB4A05;
    font-size: 14px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }

  img.didi {
    border-radius: 50%;
    margin-right: 20px;
  }
`;
