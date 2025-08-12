import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CheckOutButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Checkout</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            I`d love to ship this to you… but this is a static site. all are
            just for display!
          </DialogTitle>
          <DialogDescription className="text-center">
            Oops! Looks like you found the checkout, but this shop is just for
            show. No real shopping bags here!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CheckOutButton;
