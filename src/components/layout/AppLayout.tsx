import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Loader from "../ui/loading";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid grid-rows-[4rem_1fr_4rem] min-h-[90vh]">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
