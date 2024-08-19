import ContactForm from "../ContactForm/ContactForm";
import { Dialog } from "@mui/material";

const ModalCreate = ({ isOpen, handleClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: "28px",
          padding: 0,
        },
      }}
    >
      <ContactForm close={handleClose} />
    </Dialog>
  );
};

export default ModalCreate;
