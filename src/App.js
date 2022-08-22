import styled, { createGlobalStyle } from 'styled-components';
import Task from './components/Task';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;
const TodoContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const date = new Date();
  const today = date.toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });
  return (
    <>
      <GlobalStyle />
      <TodoContainer>
        <header>
          <h3>{today}의 TODO</h3>
        </header>
        <Task></Task>
      </TodoContainer>
    </>
  );
}

export default App;
