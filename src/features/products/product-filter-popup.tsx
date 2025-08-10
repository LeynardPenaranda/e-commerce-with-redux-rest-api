import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FunnelPlus } from "lucide-react";
import ProductFilters from "./product-filters";

const ProductFilterPopUp = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-none">
            <FunnelPlus />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex items-center">
          <SheetHeader>
            <SheetTitle>Find Your Match</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <ProductFilters />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProductFilterPopUp;
