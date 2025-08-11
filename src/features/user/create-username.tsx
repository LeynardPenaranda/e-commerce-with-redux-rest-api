import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUsername } from "./userSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateUsername = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const MAX_LENGTH = 20;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUsername(username));
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {username.length === MAX_LENGTH && (
        <span className="text-destructive text-sm bg-red-100 text-center">
          You have reached the maximum length of {MAX_LENGTH} characters for
          username!
        </span>
      )}
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        maxLength={MAX_LENGTH}
      />
      <Button type="submit">Submit Username</Button>
    </form>
  );
};

export default CreateUsername;
