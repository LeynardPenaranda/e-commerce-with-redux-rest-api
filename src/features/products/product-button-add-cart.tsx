import { Button } from "@/components/ui/button";
import {
  addToCart,
  type CartItem,
  addQty,
  removeQty,
  removeFromCart,
} from "../cart/cartSlice";
import { Loader2, Minus, PackagePlus, Plus } from "lucide-react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";
import { useState } from "react";

const AddToCardButton = ({ product }: { product: CartItem }) => {
  const { cart } = useSelector((state: RootState) => state.cart, shallowEqual);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);
  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      totalPrice: product.price * 1,
      image: product.image, // Ensure the image field is included
    };

    dispatch(addToCart(newItem));
  };

  const handleAddQty = () => {
    setLoadingAdd(true);
    setTimeout(() => {
      dispatch(addQty(product.id));
      setLoadingAdd(false);
    }, 300);
  };

  const handleRemoveQty = () => {
    setLoadingRemove(true);
    setTimeout(() => {
      if (quantity === 1) {
        dispatch(removeFromCart(product.id));
      } else {
        dispatch(removeQty(product.id));
      }
      setLoadingRemove(false);
    }, 300);
  };

  return (
    <>
      {cart.some((item) => item.id === product.id) ? (
        <div className="flex items-center justify-center w-full ">
          <div className="flex gap-5 items-center mb-2">
            <Button onClick={handleRemoveQty} className="cursor-pointer">
              {loadingRemove ? <Loader2 className="animate-spin" /> : <Minus />}
            </Button>
            <span className="text-[1.3rem]">{quantity}</span>
            <Button onClick={handleAddQty} className="cursor-pointer">
              {loadingAdd ? <Loader2 className="animate-spin" /> : <Plus />}
            </Button>
          </div>
        </div>
      ) : (
        <Button className="w-full rounded-none" onClick={handleSubmit}>
          <PackagePlus />
          Add to Cart
        </Button>
      )}
    </>
  );
};

export default AddToCardButton;
