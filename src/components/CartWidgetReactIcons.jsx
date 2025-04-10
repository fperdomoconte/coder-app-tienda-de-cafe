import { Badge } from "react-bootstrap"
import { AiOutlineShoppingCart } from "react-icons/ai";
/* import { BsCart4 } from "react-icons/bs" */

const CartWidgetReactIcons = () => {
    return(
        <div>
            <Badge bg="danger">0</Badge>
            <AiOutlineShoppingCart fontSize={'3rem'} />
           {/*  <BsCart4 fontSize={'3rem'} /> */}
        </div>
    )
}
export default CartWidgetReactIcons
