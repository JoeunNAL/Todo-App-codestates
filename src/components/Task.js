import styled from 'styled-components';
import { useState } from 'react';

const List = styled.li`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const CheckBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 50%;
`;

const Task = () => {
  const [done, setDone] = useState(false);
  const handleClick = () => {
    setDone(!done);
  };
  return (
    <List>
      {done && <CheckBtn onClick={handleClick}>v</CheckBtn>}
      {!done && <CheckBtn onClick={handleClick}> </CheckBtn>}
      <div>과제 제출</div>
    </List>
  );
};
export default Task;
