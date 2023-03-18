import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId]=useState("");

   const handlechage = (event) =>{
      setId(event.target.value);
   }
   return (
      <div>
      <input type='search' onChange={handlechage}/>
      <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
