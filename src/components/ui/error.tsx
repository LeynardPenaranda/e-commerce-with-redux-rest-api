import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";
import { Card, CardDescription, CardTitle } from "./card";
import { Button } from "./button";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as unknown;

  let message: string;

  if (isRouteErrorResponse(error)) {
    message = (error.data as string) || error.statusText;
  } else if (error instanceof Error) {
    //@ts-expect-error error.message is a string
    message = error.message;
  } else {
    message = "An unknown error occurred.";
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-96 p-6 text-center">
        <CardTitle className="text-destructive">Error Occurred</CardTitle>
        <CardDescription>{message}</CardDescription>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Card>
    </div>
  );
};

export default Error;
