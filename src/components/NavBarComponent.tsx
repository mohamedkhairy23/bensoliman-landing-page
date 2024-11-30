import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { SetStateAction, useState } from "react";
import Logo from "../assets/ben soliman logo.png";

const NavBarComponent = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <Navbar
      fluid
      rounded
      className="bg-[#ebfbee] w-full fixed top-0 left-0 right-0 z-50 rounded-none h-16"
    >
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle
          className="hover:bg-[#ebfbee] focus:ring-[#ebfbee] p-2 rounded-lg"
          theme={{
            base: "inline-flex w-full items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-[#ebfbee] focus:outline-none focus:ring-2 focus:ring-[#ebfbee] dark:text-gray-400 dark:hover:bg-[#ebfbee] dark:focus:ring-[#ebfbee] md:hidden",
            icon: "h-6 w-6 shrink-0",
          }}
        />
      </div>
      <Navbar.Collapse
        theme={{
          list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
          base: "w-full md:block md:w-auto bg-[#ebfbee] rounded-b-lg shadow-lg md:shadow-none",
          hidden: {
            on: "hidden",
            off: "block",
          },
        }}
      >
        {["الرئيسية", "من نحن", "شركائنا", "فروعنا", "تواصل معنا"].map(
          (link) => (
            <Navbar.Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => handleLinkClick(link)}
              className={`navbar-link ${
                activeLink === link ? "active" : ""
              } hover:bg-[#d7e9da] p-3 rounded-lg`}
            >
              {link}
            </Navbar.Link>
          )
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBarComponent;
