import { MagnifyingGlass } from "@phosphor-icons/react";
const Header = () => {
  return (
    <header>
      <div className="headerLeft">
        <div className="circle red"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <div className="searchbar">
        <div className="searchIcon">
          <MagnifyingGlass />
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="profile">
        <img src="/tuf.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
