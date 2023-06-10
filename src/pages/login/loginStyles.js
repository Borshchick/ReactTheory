import { styled } from "styled-components";

export const LoginFormWrapper = styled.div`
    background-color: orange;
    padding: 15px 20px;
    width: 400px;
    margin: 50px auto;
    border-radius: 20px;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 20px auto;
    height: 400px;
    justify-content: space-around;
`
export const LogIn = styled.h1`
    display: flex;
    justify-content: center;
`
export const Input = styled.input`
    background-color: transparent;
    outline: none;
    border: none;
    row-gap: 30px;
    margin-bottom: 40px;
    border-bottom: 1px solid black;
`

export const ShowpasswrdButton = styled.button`
    position: absolute;
    top: 608px;
    right: 450px;
    border: none;
    transition: .3s;
    background-color: black;
    color: white;
    border-radius: 20px;
    &:hover{
        cursor: pointer;
        background-color: white;
        color: black;
    }
`
export const LogInMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LogInButton = styled.button`
    border: none;
    background-color: black;
    color: white;
    border-radius: 20px;
    transition: all .3s;
    width: 130px;
    &:hover{
        cursor: pointer;
        background: white;
        color: black;
        border-radius: 20px;
        transform: scale(1.2);
    }
`