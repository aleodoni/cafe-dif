import React, { Component } from 'react';
import GlobalStyle from './styles/global';
import { MasterContainer } from './components/MasterConteiner/styles';
import Cafe from './components/Cafe';
import Inicio from './components/Inicio';
import Contribuintes from './components/Contribuintes';
import data from './info.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      op: 0,
      contribuintes: data.contribuintes,
      cuma: data.cuma,
      qual: data.qual,
    };
  }

  handleOpt = opt => {
    this.setState({ op: opt });
  };

  retConteudo = () => {
    const { op, contribuintes, cuma, qual } = this.state;
    switch (op) {
      case 0:
        return <Inicio data={cuma} />;
      case 1:
        return <Cafe data={qual} />;
      case 2:
        return <Contribuintes data={contribuintes} />;
      default:
        return <Inicio data={cuma} />;
    }
  };

  render() {
    const { op } = this.state;

    return (
      <MasterContainer>
        <div className="menu">
          <span
            onClick={() => this.handleOpt(0)}
            className={op === 0 ? 'selected' : null}
          >
            CUMA ?
          </span>
          <span
            onClick={() => this.handleOpt(1)}
            className={op === 1 ? 'selected' : null}
          >
            QUAL ?
          </span>
          <span
            onClick={() => this.handleOpt(2)}
            className={op === 2 ? 'selected' : null}
          >
            QUEM ?
          </span>
        </div>
        <div className="conteudo">{this.retConteudo()}</div>
        <GlobalStyle />
      </MasterContainer>
    );
  }
}

export default App;
