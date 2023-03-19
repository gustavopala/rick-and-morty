import Card from './Card';
import styled from "styled-components";

const DivCard = styled.div`
display: flex;


flex-wrap: wrap;
flex-direction: row;

height: 100%;
width: 100%;


`;
const Container = styled.div`

background-size: cover;
background-position: center;
height: 100%;

`;


export default function Cards({ characters, onClose }) {

   return (
      <Container>

         <DivCard>
            {characters.map(({ id, name, species, gender, image }) => (
               <Card
                  key={id}
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={onClose}
               />
            ))}
         </DivCard>
         
      </Container>
      )
}
