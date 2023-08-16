import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOrder } from '../services/firebase';

function OrdenConfirm() {
    const [ordenData, setOrdenData] = useState(null);
    const {id} = useParams();
    
    useEffect(() => {
        getOrder(id).then((order) => {
            setOrdenData(order);
        });
    }, []);


  return (
    <div>
        <h1>Gracias Por Tu Compra!</h1>
        {
            ordenData.items.map((item =>
                <div>
                    <h2>{item.title}</h2>
                    <img width={200} src={item.img} alt="Imagen" />
                    <p>Precio Unitario ${item.price}</p>
                    <p>Cantidad a Comprar: {item.count}</p>
                    <p>Precio Total: {item.count * item.price}</p>
                    <button>Confirmar Compra</button>
                </div>
                ))
        }

    </div>
  )
}
    


export default OrdenConfirm