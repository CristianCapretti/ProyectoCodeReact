import { useEffect, useState } from "react";
import Item from "../components/Item";
import Productos from "../components/json/data.json"

const ItemListContainer = ({ greeting }) => {
    
    
    const [data, SetData]=useState([]);
    useEffect(()=>{
        /*fetch(Productos)
        .then(response=>response.json())
        .then(data=> 
            {SetData(data.results)})
*/ const promesa = new Promise((resolve) => {
   
        resolve(Productos)
    
});

promesa.then(data => {
    SetData(data);
});

    },[])
    return (
        <div className="row">
        {    
            data.map(producto => <Item key={producto.id} producto={producto} /> )                           
            
        } 
        </div>
    )
}



export default ItemListContainer;