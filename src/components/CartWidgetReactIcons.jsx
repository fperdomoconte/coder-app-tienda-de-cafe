import { Badge } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"

const CartWidgetReactIcons = () => {
    return(
        <div>
            <Badge bg="danger">0</Badge>
            <BsCart4 fontSize={'3rem'} />
        </div>
    )
}
export default CartWidgetReactIcons
