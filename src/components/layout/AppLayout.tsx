import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[4rem_1fr_4rem] min-h-[90vh]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
