import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";

import css from "./AppBar.module.css";
import { Box, Modal } from "@mui/material";
import Logout from "../Logout/Logout";
import { LogoutForDesktop } from "../LogoutForDesktop/LogoutForDesktop";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [open, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <header
      className={`${css.header} ${isLoggedIn ? css.loggedIn : css.loggedOut} ${
        isMobile ? css.mobile : ""
      }`}
    >
      {isMobile ? (
        <>
          <RxHamburgerMenu className={css.hamburger} onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#00778b",
                boxShadow: 24,
                p: 4,
                outline: "none",
                borderRadius: 5,
              }}
            >
              <Navigation onClose={handleClose} />
              {!isLoggedIn && <AuthNav onLinkClick={handleClose} />}
              {isLoggedIn && <Logout onClose={handleClose} />}
            </Box>
          </Modal>
        </>
      ) : (
        <>
          <Navigation />
          {!isLoggedIn && <AuthNav />}
          <LogoutForDesktop />
        </>
      )}
    </header>
  );
};

export default AppBar;
