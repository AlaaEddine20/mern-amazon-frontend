import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  flex-direction: column;
  column-count: 2;
  max-height: 400px;
  min-width: 100px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: -150px;
  z-index: 1;
  width: 100%;
  box-shadow: 10px 10px 0px #846a29;
  border: 1px solid #846a29;

  & > button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
  }
`;
