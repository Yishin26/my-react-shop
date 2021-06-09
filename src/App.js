import './App.css';
import React from 'react'
import styled from 'styled-components';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class App extends React.Component {
  state = {
    inputText: '',
  }
  setValue = inputText => {
    this.setState({
      inputText,
    })
    //console.log(this.state)
  }


  render() {
    return (
      <div className="App">
        <Navbar setValue={this.setValue} />
        <Wrapper>
          <Title>
            Hello World!
        </Title>
        </Wrapper>
        <ProductList value={this.state.inputText} />
      </div>
    );
  }

}

export default App;
