import React from "react";
import CloseIcon from "../../assets/close.svg";
import MenuIcon from "../../assets/menu.svg";
import "./style.css";

const Menu = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.querySelector("body").style.overflow = open ? "hidden" : "initial";
  }, [open]);

  return (
    <nav className={`${open && "fullscreen-menu"}`}>
      {open ? (
        <img
          className="icon-close"
          src={CloseIcon}
          alt="Ícone close"
          onClick={() => setOpen(false)}
        />
      ) : (
        <img
          className="icon-menu"
          src={MenuIcon}
          alt="Ícone menu"
          onClick={() => setOpen(true)}
        />
      )}

      <ul className="menu">
        <li>Ação</li>
        <li>Comédia</li>
        <li>Terror/Drama</li>
        <li>Documentários</li>
        <li>Infantil</li>
      </ul>
    </nav>
  );
};

export default Menu;
