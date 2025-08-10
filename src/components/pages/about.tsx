import { motion } from "framer-motion";
import AnimationWrapper from "../animation/animation-wrapper-page";

const About = () => {
  return (
    <AnimationWrapper>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full object-center object-contain">
          <img
            src="/images/Banner.png"
            alt="banner"
            className="w-full h-full "
          />
        </div>
        <h1 className="text-center text-3xl font-medium">ABOUT</h1>
        <p className="text-center text-gray-500 mt-4 max-w-xl mx-auto">
          static e-commerce application that consumes a REST API hosted on
          Vercel using Express. The app uses React Router for smooth client-side
          navigation and Redux for managing the application state efficiently.
          Even without a traditional backend integrated directly, this setup
          enables the app to fetch product data, handle user interactions, and
          manage the shopping cart seamlessly, providing a fast and responsive
          user experience. This architecture keeps the frontend lightweight
          while relying on the external API for dynamic data.
        </p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="w-[97%] h-[50rem] border mt-20 rounded-t-4xl bg-gray-700"
        ></motion.div>
      </div>
    </AnimationWrapper>
  );
};

export default About;
