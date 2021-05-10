import './App.css';
import styled, { css } from 'styled-components';
import Navbar from './components/Navbar';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>

    </div>
  );
}

export default App;
