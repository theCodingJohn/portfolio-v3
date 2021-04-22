import DesktopNav from "../DesktopNav";
import style from "./header.module.scss";
import MobileNav from "../MobileNav";

const links = ["about", "projects"];

const Header = () => {
  return (
    <header className={style.header}>
      {/* navbar for mobile */}
      <MobileNav links={links} />
      {/* sidebar for desktop */}
      <DesktopNav links={links} />
    </header>
  );
};

export default Header;
