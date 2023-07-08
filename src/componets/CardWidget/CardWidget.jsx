import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import "./CardWidget.css"
function CardWidget() {
  return (
    <div className="carrito">
        <FontAwesomeIcon icon={faCartShopping} />
        <span>1</span>
    </div>
  )
}

export default CardWidget