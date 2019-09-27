import React from 'react';

import { Container } from './styles';

export default function Contribuintes({ data }) {
  return (
    <Container>
      <p align="center">Quem, quanto, qual.</p>
      {data.map(item => (
        <div key={item.nome}>
          <span>{item.nome}</span>
          <span>{item.quantidade}</span>
          <span>{item.cafe}</span>
        </div>
      ))}
    </Container>
  );
}
