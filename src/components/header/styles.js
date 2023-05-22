

import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
    margin: 0 auto ;
    background-color: ${props => props.background ?? 'royalblue'};
    width: 100%;
`

export const HeaderStyles = styled.div`
    margin: 0;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderLogo = styled.div`
    margin: 30px;
    padding: 20px;
    border-radius: 100%;
    background-color: gold;
    box-shadow: 7px 3px 2px 0 goldenrod;
    transition: 1.5s;
    &:hover{
        transform: scale(-1, 1);
        transition: 1.5s;
    }
    &:hover:after{
        background: black;
        transition: 1.5s;
    }
`

export const Logo = styled(NavLink)`
    text-decoration: none;
    color: black;
    position: relative;
`


export const Wrapper = styled.div`
    background-color: ${props => props.background ?? 'gold'};
    display: flex;
    justify-content: center;
    padding: 25px;
`