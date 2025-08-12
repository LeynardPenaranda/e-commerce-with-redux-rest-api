import type { RootState } from "store";
import AnimationWrapper from "../animation/animation-wrapper-page";
import HomeCarousel from "../home-carousel";
import { useSelector } from "react-redux";
import Username from "@/features/user/username";

const Home = () => {
  const username = useSelector((state: RootState) => state.user.username);
  return (
    <AnimationWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 h-35 flex items-center">
          {!username ? (
            <h1 className="font-medium text-2xl">
              Welcome, but Please Enter your name
            </h1>
          ) : (
            <div>
              <Username
                message="Hello, "
                classNameParagraph="font-medium text-2xl"
                classNameAvatar="h-15 w-15"
              />
            </div>
          )}
        </div>
        <HomeCarousel />
        Home
      </div>
    </AnimationWrapper>
  );
};

export default Home;
