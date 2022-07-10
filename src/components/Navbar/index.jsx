import Logo from "./Logo";
import style from "./style.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <Logo />
      <p className={style.motto}> 
        DEVELOPED WITH <span>&#x2764;</span> BY MONTERAIL
      </p>
    </nav>
  );
}

export default Navbar;
