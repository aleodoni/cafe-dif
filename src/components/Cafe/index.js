import React from 'react';

import { Container } from './styles';
import melitta1 from '../../assets/melitta1.png';
import melitta2 from '../../assets/melitta2.png';

export default function Cafe({ data }) {
  return (
    <Container>
      {data.map(item => (
        <p key={item.id} align="justify">
          {item.texto}
        </p>
      ))}
      <div className="imagem">
        <img src={melitta1} alt="tradicional" />
        <img src={melitta2} alt="fazenda" />
      </div>
    </Container>
  );
}
