import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  flex: 1;

  height: 100%;

  @media (max-width: 500px) {
    p {
      font-size: 20px;
      color: #aaa;
      padding-bottom: 40px;
    }

    div.imagem {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 110px;
      }
    }
  }

  @media (min-width: 900px) {
    p {
      font-size: 40px;
      color: #aaa;
      padding-bottom: 40px;
    }

    div.imagem {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 250px;
      }
    }
  }
`;
