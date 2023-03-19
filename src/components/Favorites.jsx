import { connect,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../redux/actions";
import styled from "styled-components";

const Container = styled.div`
display: flex;
background-image: url('/img-fav.png');
background-size: cover;
background-position: center;
margin-top:3%;
flex-wrap: wrap;
flex-direction: row;
`;
const DivCard = styled.div`
height: 340px;
position: relative;
background-color: white;
aling-items: center;
width: 300px;
margin-left: 3%;
margin-top: 2%;
margin-bottom: 2%;
border-radius: 10px;
border-top: 1px dotted white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
border: 1px dotted white;
box-shadow: 0px 0px 10px #ccc;
`;


const Name = styled.h1`
z-index: 3;
position: absolute;
bottom: 40px;
left: 11px;
background-color:rgba(38, 39, 40, 0.68);
padding: 5px;
color: white;
font-size: 130%;
`;
const SpeYgen = styled.div`
position: absolute;
display: flex;
height: 50px;
bottom: 0px;
`;
const H2 = styled.h2`
font-size: 110%;
margin-left: 15px;

`;
const Img = styled.img`
border-bottom: 1px dotted white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
position: absolute;
left: 0px;
top: 0px;
`
const Submenu = styled.div`
height: 30px;

position: relative;

`;
const Button = styled.button`
position: absolute;
top: 20%;
right: 55%;
height: 50px;
background-color: rgb(8, 8, 8);
border-radius: 10px;
border: none;
  outline: none; 
`;
const Button1 = styled.button`
position: absolute;
top: 20%;
right: 45%;
height: 50px;
background-color: rgb(8, 8, 8);
border-radius: 10px;
border: none;
  outline: none; 
`;
const Select = styled.select`
background-color: rgb(8, 8, 8);
border: none;
outline: none;
color: white;
`;

function Favorites({ myFavorites }) {
    const dispatch=useDispatch();
    const handleChange = (e) => {
        dispatch(orderCards(e.target.value))
    }
    const handleChan = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div>
            <Submenu>
               <Button> <Select name="ordenamiento" id="" onChange={handleChange}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </Select></Button>
                <Button1><Select name="filtrado" id="" onChange={handleChan}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </Select></Button1>
            </Submenu>
            <Container>

            {myFavorites?.map((fav) => {
                return (
                    <DivCard>

                        <Img src={fav?.image} alt="" />
                        <Link to={`/detail/${fav.id}`} >
                            <Name>{fav?.name}</Name>
                        </Link>
                        <SpeYgen>

                        <H2>gender: {fav?.gender}</H2>
                        <H2>specie: {fav?.species}</H2>
                        </SpeYgen>

                    </DivCard>
                );
            })}
            </Container>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: [...state?.myFavorites]
    }
}

export default connect(mapStateToProps, null)(Favorites);