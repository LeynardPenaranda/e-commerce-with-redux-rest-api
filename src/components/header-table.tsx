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
  const [isLoadingAddId, setIsLoadingAddId] = useState<number | null>(null);
  const [isLoadingRemoveId, setIsLoadingRemoveId] = useState<number | null>(
    null
  );

  const handleAddQty = (id: number) => {
    setIsLoadingAddId(id);
    setTimeout(() => {
      dispatch(addQty(id));
      setIsLoadingAddId(null);
    }, 300);
  };

  const handleRemoveQty = (id: number) => {
    setIsLoadingRemoveId(id);
    setTimeout(() => {
      const item = cart.find((item) => item.id === id);
      if (!item) return;

      if (item.quantity === 1) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(removeQty(id));
      }
      setIsLoadingRemoveId(null);
    }, 300);
  };

  return (
    <Table>
      <TableCaption>A list of your cart items.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Total Price</TableHead>
          <TableHead className="w-[100px] text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.length === 0 && (
          <TableRow>
            <TableCell colSpan={7} className="text-center">
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
            <TableCell>${item.totalPrice! * item.quantity}</TableCell>
            <TableCell className="text-center align-middle">
              <div className="flex items-center justify-center gap-5">
                <Button onClick={() => handleRemoveQty(item.id)}>
                  {isLoadingRemoveId === item.id ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Minus />
                  )}
                </Button>
                <span>{item.quantity}</span>
                <Button onClick={() => handleAddQty(item.id)}>
                  {isLoadingAddId === item.id ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Plus />
                  )}
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HeaderTable;
