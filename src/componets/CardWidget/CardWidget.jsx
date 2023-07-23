import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import "./CardWidget.css"
function CardWidget() {
  return (
    <div className="carrito">
        <FontAwesomeIcon icon={faCartShopping} />
        <p className="quantityBubble">1</p>
    </div>
  )
}

export default CardWidget