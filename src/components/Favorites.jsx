import { connect,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../redux/actions";
import styled from "styled-components";

const Container = styled.div`
display: flex;
border: 2px solid green;
padding: 10px;
flex-wrap: wrap;
flex-direction: row;
`;
const DivCard = styled.div`
height: 340px;
position: relative;
background-color: white;
aling-items: center;
width: 26.6%;
margin-left: 3%;
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
            <div>
                <select name="ordenamiento" id="" onChange={handleChange}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="filtrado" id="" onChange={handleChan}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
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
        myFavorites: [...state.myFavorites]
    }
}

export default connect(mapStateToProps, null)(Favorites);