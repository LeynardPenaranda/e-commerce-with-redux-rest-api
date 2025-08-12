import { useSelector } from "react-redux";
import type { RootState } from "store";
import UserDialog from "./user-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const Username = ({
  classNameParagraph,
  classNameAvatar,
  message,
}: {
  classNameParagraph?: string;
  classNameAvatar?: string;
  message?: string;
}) => {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <>
      {username ? (
        <div className="flex items-center gap-2">
          <Avatar className={`${classNameAvatar}`}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <p className={`${classNameParagraph}`}>
            {message}
            {username}
          </p>
        </div>
      ) : (
        <UserDialog />
      )}
    </>
  );
};

export default Username;
