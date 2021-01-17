import styled from "styled-components";

export default styled.div`
  display: flex;
  flex: 1; /* Input search container must take the max space he needs */
  & > input {
    display: flex;
    border: none;
    width: 100%;
    height: 30px;
  }
`;
