import CartItem from '../CartItem/CartItem';

import { Wrapper } from './Cart.style';

import { CartItemType } from '../Types/CartItemType';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => {
        return <CartItem key={item.id} />;
      })}
    </Wrapper>
  );
};

export default Cart;
