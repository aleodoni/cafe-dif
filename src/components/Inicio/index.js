import React from 'react';

import { Container } from './styles';

export default function Inicio({ data }) {
  return (
    <Container>
      {data.map(item => (
        <p key={item.id} align="justify">
          {item.texto}
        </p>
      ))}
    </Container>
  );
}
