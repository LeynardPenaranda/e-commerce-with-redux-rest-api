const About = () => {
  return (
    <div>
      <div className="w-full object-center object-contain">
        <img src="/images/Banner.png" alt="banner" className="w-full h-full " />
      </div>
      <h1 className="text-center text-3xl font-medium">ABOUT</h1>
      <p className="text-center text-gray-500 mt-4 max-w-xl mx-auto">
        static e-commerce application that consumes a REST API hosted on Vercel
        using Express. The app uses React Router for smooth client-side
        navigation and Redux for managing the application state efficiently.
        Even without a traditional backend integrated directly, this setup
        enables the app to fetch product data, handle user interactions, and
        manage the shopping cart seamlessly, providing a fast and responsive
        user experience. This architecture keeps the frontend lightweight while
        relying on the external API for dynamic data.
      </p>
    </div>
  );
};

export default About;
