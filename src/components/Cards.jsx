import Card from './Card';
import styled from "styled-components";

const DivCard = styled.div`
display: flex;
border: 2px solid green;
padding: 10px;
flex-wrap: wrap;
flex-direction: row;
`;

export default function Cards({characters, onClose}) {
   
   return( <DivCard>
      {characters.map(({id, name, species, gender, image})=>(
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
   </DivCard>)
}
