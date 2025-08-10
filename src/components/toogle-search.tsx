import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";
import { Replace } from "lucide-react";

const SearchInput = () => {
  return (
    <>
      <div className="hidden md:block w-2xs">
        <Input type="search" placeholder="Search" />
      </div>

      <div className="md:hidden">
        <Popover>
          <PopoverTrigger>
            <Replace />
          </PopoverTrigger>
          <PopoverContent>
            <Input type="search" placeholder="Search" />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default SearchInput;
