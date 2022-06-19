import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #67AAF9;
    heigth: 100px;
    dsiplay: flex;
    justify-content: space-between;
    padding: 0.5 calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #FFFFFF;
    dsiplay: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    heigth: 100%;
    cursor: pointer;

    &.active{
        color: #d66ba0;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #FFFFFF;

    @media screen and (max-with: 780px){
        display: block;
        position: absolute;
        top: 0;
        right: 0 ;
        transform: translate(-100%, 75%)
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: left;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    boder-radius: 4px;
    background: #67aaf9;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decorator: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #af4d98;
    }
`;
