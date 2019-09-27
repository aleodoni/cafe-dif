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
      font-size: 16px;
      /* padding: 80px; */
      padding-bottom: 40px;
      color: #aaa;
      width: 100%;
    }
  }

  @media (min-width: 900px) {
    p {
      font-size: 40px;
      padding: 80px;
      padding-bottom: 40px;
      color: #aaa;
      width: 100%;
    }
  }
`;
