import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import Navbar from "./navbar";
import Username from "@/features/user/username";

const ToogleLeftSideBar = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col-reverse items-center">
            <Navbar
              className="flex flex-col gap-5"
              classNameLink="w-full text-center m-0 "
            />
            <Username />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ToogleLeftSideBar;
