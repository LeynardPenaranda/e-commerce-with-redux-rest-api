import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./ui/sheet";

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
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a description inside the sheet.
            </SheetDescription>
          </SheetHeader>
          <div>
            {/* Your content here */}
            <p>Here is some content inside the sheet.</p>
          </div>
          <SheetClose asChild>
            <button className="btn mt-4">Close</button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ToogleLeftSideBar;
