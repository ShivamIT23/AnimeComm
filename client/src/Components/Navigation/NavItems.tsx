import { Account } from "./Account";
import { Icon } from "./Icon";

export const NavItems = () => {
  return (
    <div className="NavItems">
      <Icon />
      <ul className="NavItems-List">
        <p className="HOME">HOME</p>
        <p className="ABOUT">ABOUT</p>
        <p className="CONTACT">CONTACT</p>
      </ul>
      <Account />
    </div>
  );
};
