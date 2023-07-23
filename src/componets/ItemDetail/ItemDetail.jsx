import ItemCount from "../ItemCount/ItemCount";

function ItemDetail (props) {
    const { products} = props;

    return (
        <div className="cardInfo">
            <div>
                <img width={400} src={products.img} alt="imagen"></img>
            </div>
            <div className="cardInfoDetails">
                <div>
                    <h3 className="cardInfoTitle">{products.nombre}</h3>
                    <p className="cardInfoDesc">{products.description}</p>
                </div>
                <div>
                    <h5 className="cardInfoPrice">Precio:$ {products.price}</h5>
                </div>
                <ItemCount stock={products.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;