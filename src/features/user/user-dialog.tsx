import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateUsername from "./create-username";

const UserDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="drop-shadow-[0_4px_6px_rgba(255,255,255,0.9)] cursor-pointer rounded-none"
        >
          Enter Name
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter your Username</DialogTitle>
          <DialogDescription>
            Enter your desired username below
          </DialogDescription>
          <CreateUsername />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;
