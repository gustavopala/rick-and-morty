import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { useState, useEffect } from "react";
import styled from "styled-components";

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

const Button = styled.button`
z-index: 1;
position: absolute;
right: 5px;
top: 5px;
width: 8%;
height: 25px;
border-radius: 5px;
background-color: red;
color: white;
`
const Button1 = styled.button`
z-index: 2;
position: absolute;
left: 5px;
top: 5px;
background-color: rgba(255, 255, 255, 0);
border: none;
`

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

function Card({ name, species, gender, image, onClose, id , myFavorites, delet, add}) {
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         delet(id);
      } else {
         setIsFav(true);
         add({ name, species, gender, image, id });
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <DivCard>

         {
            isFav ? (
               <Button1 onClick={handleFavorite}>❤️</Button1>
               ) : (
                  <Button1 onClick={handleFavorite}>🤍</Button1>
                  )
               }
         <Button onClick={() => onClose(id)}>X</Button>
         <NavLink to={`/detail/${id}`}>
            <Name>name: {name}</Name>
         </NavLink>
         <SpeYgen>
         <H2>species: {species}</H2>
         <H2>gender: {gender}</H2>
         </SpeYgen>
         <Img src={image} alt="" />
      
   </DivCard>
   );
}
const mapDispatchToProps = (dispatch) => {
   return {
      add: (character) => {
         dispatch(addFavorite(character))
      },
      delet: (id) => {
         dispatch(deleteFavorite(id))
      }
   }
}
const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites,
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Card);