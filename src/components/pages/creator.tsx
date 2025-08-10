import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import AnimationWrapper from "../animation/animation-wrapper-page";

const Creator = () => {
  return (
    <AnimationWrapper>
      <div className="grid lg:grid-cols-2 h-[80vh]">
        <div className="flex flex-col items-center justify-center p-4 gap-5">
          <h1 className="text-4xl font-medium">Create, Code, and Continue</h1>
          <p className="max-w-2xl text-justify break-words">
            Every small step matters. Like a seed that grows into a strong tree,
            your progress comes from showing up, learning, and trying again. The
            road to mastery is built on persistence, not giant leaps. Even on
            slow days, remember that each lesson, mistake, and victory is
            shaping you into someone stronger than yesterday.
          </p>
          <p className="text-sm text-gray-500">
            "Success is not final, failure is not fatal: It is the courage to
            continue that counts." - Winston S. Churchill
          </p>
          <div>
            <Button asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/quote.png" alt="me" className="w-full" />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Creator;
