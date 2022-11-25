import Styled from 'styled-components';

export const HeaderCabeca = Styled.div`
       width: 100%;
       height: auto;
       background-color: #cdcdf5;
       display: flex;
       align-items: center;
       justify-content: space-evenly;

       .ListCabeça, .menus {
        display: flex;
        align-items: center;
        padding: 0px;
        justify-content: center;
        margin: 10px;
        font-size: 1.3rem;
        list-style: none;
        flex-wrap: wrap;

       }

       a {
        text-decoration: none;
        color: #191970;
        font-weight: 600;
       }

       a:hover {
        transition: .3s;
        color: #3c3c8a;
       }
`;