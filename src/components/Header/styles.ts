import styled from "styled-components";

export const Content = styled.header`
    background-color: #ccc;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 20px 5px;

    h1{
        margin-left:15px;
    }

`

export const NavPages = styled.ul`
    display:flex;
    gap:15px;
    margin-right: 10px;
    padding:15px;


    li{
        list-style-type: none;
    }


    
    a{
        text-decoration:none;
        color:green;
        font-size:18px;
    }
`