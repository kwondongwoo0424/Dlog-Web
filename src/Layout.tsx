import { useState } from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div>
      <Header />
      {children}
      {isSearchOpen && <input type="text" />}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
