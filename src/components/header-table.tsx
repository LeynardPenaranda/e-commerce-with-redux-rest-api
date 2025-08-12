import {
  Table,
  TableBody,
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
import { formatMoney } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
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
    <div className="flex flex-col gap-1">
      <div className="w-full h-[15rem] border overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>SubTotal Price</TableHead>
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
                <TableCell>{formatMoney(item.price)}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  {formatMoney(item.totalPrice! * item.quantity)}
                </TableCell>
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
      </div>
      <div>
        <Card className="rounded-none">
          <CardContent>
            <h2 className="text-lg font-bold">Cart Summary</h2>
            <p className="text-muted-foreground">go to cart to checkout</p>
            <div className="flex justify-between">
              <span>Total Items:</span>
              <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-bold">
                {formatMoney(
                  cart.reduce(
                    (acc, item) => acc + item.totalPrice! * item.quantity,
                    0
                  )
                )}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      {cart.length > 0 && (
        <div className="flex items-center justify-center">
          <Button asChild className="w-2xs">
            <Link to="/cart">Go to Cart</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderTable;
