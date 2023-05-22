import { styled } from "styled-components";

export const MainWrapper = styled.div`
  min-height: 100vh;
  background: gold;
  padding-bottom: 60px;
`;

export const MainPostWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 400px;
  background: transparent;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const PostWrapper = styled.div`
  margin-top: 100px;
  padding: 30px 15px;
  border-radius: 10px;
  background-color: orange;
  max-width: 400px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.07);
    background-color: darkorange;
    color: white;
  }
`;

export const PostTheme = styled.h1`
  word-wrap: break-word;
`;

export const PostButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  width: 400px;
`;

export const DeleteButton = styled.button`
  border: none;
  width: 150px;
  padding: 5px 15px;
  border-radius: 20px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    cursor: pointer;
    background: red;
    color: white;
  }
`;

export const PostID = styled.div`
  font-size: 7px;
  color: grey;
  display: flex;
  justify-content: flex-end;
`;

export const PostError = styled.div`
  color: grey;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const CreateButton = styled.button`
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  width: 250;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
    background: black;
    color: white;
  }

  &:disabled {
    border: none;
    border-radius: 20px;
    padding: 5px 15px;
    width: 250;
    transition: 0.3s;
    background-color: lightgrey;
    opacity: 0.7;

    &:hover {
      cursor: not-allowed;
      background-color: grey;
    }
  }
`;
