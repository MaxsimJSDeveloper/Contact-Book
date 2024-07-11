import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./ModalDelete.module.css";

const ModalDelete = ({ open, close, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    close();
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted!", { position: "top-center" });
      })
      .catch(() => {
        toast.error("Error, try again!", {
          position: "top-center",
        });
      });
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          borderRadius: "24px",
        },
        className: css.dialog,
      }}
    >
      <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={close}
          style={{ borderColor: "#00778b", color: "#00778b" }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          style={{ backgroundColor: "#00778b" }}
          variant="contained"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDelete;
