import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, Minus, Plus } from "lucide-react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";
import { addQty, removeFromCart, removeQty } from "./cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Cart = () => {
  const { cart } = useSelector((state: RootState) => state.cart, shallowEqual);
  const username = useSelector((state: RootState) => state.user.username);

  const [loadingAddId, setLoadingAddId] = useState<number | null>(null);
  const [loadingRemoveId, setLoadingRemoveId] = useState<number | null>(null);
  const dispatch = useDispatch();

  const handleAddQty = (id: number) => {
    setLoadingAddId(id);
    setTimeout(() => {
      dispatch(addQty(id));
      setLoadingAddId(null);
    }, 300);
  };

  const handleRemoveQty = (id: number) => {
    setLoadingRemoveId(id);
    setTimeout(() => {
      const item = cart.find((item) => item.id === id);
      if (!item) return;

      if (item.quantity === 1) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(removeQty(id));
      }
      setLoadingRemoveId(null);
    }, 300);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-2">
        <h1>Your Cart</h1>
        <h1 className="font-bold">
          {" "}
          {!username ? `(Enter your name)` : `${username}`}
        </h1>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>SubTotal Price</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  Your cart is empty.{" "}
                  <Button asChild>
                    <Link to="/products">Go to Products</Link>
                  </Button>
                </TableCell>
              </TableRow>
            )}
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={item.image} alt={item.name} className="w-25" />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.totalPrice! * item.quantity}</TableCell>
                <TableCell className="align-middle">
                  <div className="flex items-center justify-center gap-5">
                    <Button onClick={() => handleRemoveQty(item.id)}>
                      {loadingRemoveId === item.id ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <Minus />
                      )}
                    </Button>
                    <span>{item.quantity}</span>
                    <Button onClick={() => handleAddQty(item.id)}>
                      {loadingAddId === item.id ? (
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
        <div className="flex justify-end w-full">
          <Card className="w-2xl">
            <CardContent>
              <h2 className="text-lg font-bold">Cart Summary</h2>
              <div className="flex justify-between">
                <span>Total Items:</span>
                <span>
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Price:</span>
                <span>
                  $
                  {cart.reduce(
                    (acc, item) => acc + item.totalPrice! * item.quantity,
                    0
                  )}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
