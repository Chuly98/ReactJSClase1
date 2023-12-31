import "./Item.css"
import { Link } from 'react-router-dom';


function Item(props) {
    const { id, img, title, categoryId, price, stock, description } = props;

    return (
        <div className='card'>
            <div className='cardIMG'>
                <img src={img} alt={title}></img>
            </div>
            <div className='cardDetails'>
                <h3 className='cardTitle'>{title}</h3>
                <small className='cardDesc'>{description}</small>
                <div>
                    <h4 className='cardPrice'>Precio: ${price}</h4>
                    <small className='cardStock'>Cantidad: {stock}</small>                   
                </div>
                <small className='cardCategory'>Categoria: {categoryId}</small> 
            </div>
            <div className='cardButtons'>
                <Link to={`/product/${id}`}>
                    <button className='verButton'>Ver Producto</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;