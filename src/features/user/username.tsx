import { useSelector } from "react-redux";
import type { RootState } from "store";
import UserDialog from "./user-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const Username = () => {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <>
      {username ? (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <p>{username}</p>
        </div>
      ) : (
        <UserDialog />
      )}
    </>
  );
};

export default Username;
