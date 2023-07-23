import Item from "../Item/Item";

function ItemList(props) {
    const {products} = props;
    return (
        <div>
            <h2>¡Bienvenidos a MHOA Calzados!</h2>
            <div className='productos'>
                {products.map((item) => (<Item key={item.id} {...item} />))}
            </div>
        </div>
    );
}

export default ItemList;