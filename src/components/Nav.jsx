import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Div = styled.div`
height: 100%;
background-image: url('/img-nav.jpg');
background-size: contain;
`;

const Container = styled.div`
display: flex;
height: 100%;
margin-left: 38%;

background-color: rgb(8, 8, 8);
flex-wrap: wrap;
flex-direction: row;
`;

const Button = styled.button`
margin-left: 5%;
background-color: rgb(8, 8, 8);
font-size: medium;
border: none;
  outline: none;

`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;


export default function Nav({ onSearch }) {
    return (
        <Div>
            <Container>
            <Button><StyledLink to='/home' ><h3>home</h3></StyledLink></Button>
            <Button><StyledLink to='/favorite'><h3>favorites</h3></StyledLink></Button>
            <Button><StyledLink to='/about'><h3>about</h3></StyledLink></Button>
            <Button><h3><StyledLink to="/">logout</StyledLink></h3></Button>
            <Button> <h3><SearchBar onSearch={onSearch} /></h3></Button>
            </Container>
        </Div>
    );
}
