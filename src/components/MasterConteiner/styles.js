import styled from 'styled-components';
import { lighten } from 'polished';

export const MasterContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  padding: 20px;

  div.menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;

    @media (max-width: 500px) {
      width: 100%;
      font-size: 18px;
      font-weight: bold;

      span {
        display: flex;
        /* flex: 1; */
        align-items: center;
        justify-content: center;

        padding: 10px;
        border-radius: 4px;
        width: 100%;

        &:hover {
          cursor: pointer;
          background-color: ${lighten(0.01, '#AB4A05')};
          color: #000;
          transition: background 0.3s;
        }
      }
    }

    @media (min-width: 900px) {
      width: 100%;
      font-size: 42px;
      font-weight: bold;

      span {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;

        padding: 10px;
        border-radius: 4px;
        width: 100%;

        &:hover {
          cursor: pointer;
          background-color: ${lighten(0.1, '#AB4A05')};
          color: #000;
          transition: background 0.3s;
        }
      }
    }
  }

  div.conteudo {
    width: 100%;
    height: 100%;
  }
`;
