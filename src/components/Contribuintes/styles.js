import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  flex: 1;

  height: 100%;

  @media (max-width: 500px) {
    p {
      font-size: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      color: #aaa;
      width: 100%;
    }

    div {
      display: flex;
      /* flex: 1; */
      justify-content: space-between;
      align-items: baseline;

      font-size: 16px;
      padding-bottom: 10px;
      color: #aaa;
      width: 100%;
    }
  }

  @media (min-width: 900px) {
    p {
      font-size: 40px;
      padding-top: 16px;
      padding-bottom: 40px;
      color: #aaa;
      width: 100%;
    }

    div {
      display: flex;
      /* flex: 1; */
      justify-content: space-between;
      align-items: baseline;

      font-size: 40px;
      padding-bottom: 10px;
      color: #aaa;
      width: 100%;

      span {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }
`;
