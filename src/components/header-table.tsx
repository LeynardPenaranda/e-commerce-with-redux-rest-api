import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  removeFromCart,
  addQty,
  removeQty,
  type CartItem,
} from "@/features/cart/cartSlice";
import { Button } from "./ui/button";
import { Loader2, Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { useState } from "react";
const HeaderTable = ({ cart }: { cart: CartItem[] }) => {
  const dispatch = useDispatch();
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  const [isLoadingRemove, setIsLoadingRemove] = useState(false);

  const handleAddQty = (id: number) => {
    setIsLoadingAdd(true);
    setTimeout(() => {
      dispatch(addQty(id));
      setIsLoadingAdd(false);
    }, 300);
  };

  const handleRemoveQty = (id: number) => {
    setIsLoadingRemove(true);
    setTimeout(() => {
      const item = cart.find((item) => item.id === id);
      if (!item) return;

      if (item.quantity === 1) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(removeQty(id));
      }
      setIsLoadingRemove(false);
    }, 300);
  };

  return (
    <Table>
      <TableCaption>A list of your cart items.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Item Image</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Unit Price</TableHead>
          <TableHead>Total Price</TableHead>
          <TableHead className="w-[100px] text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.length === 0 && (
          <TableRow>
            <TableCell colSpan={6} className="text-center">
              Your cart is empty.
            </TableCell>
          </TableRow>
        )}
        {cart.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <img src={item.image} alt={item.name} />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell>${item.totalPrice}</TableCell>
            <TableCell className="flex items-center justify-center gap-5">
              <Button onClick={() => handleRemoveQty(item.id)}>
                {isLoadingRemove ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Minus />
                )}
              </Button>
              <span>{item.quantity}</span>
              <Button onClick={() => handleAddQty(item.id)}>
                {isLoadingAdd ? <Loader2 className="animate-spin" /> : <Plus />}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HeaderTable;
