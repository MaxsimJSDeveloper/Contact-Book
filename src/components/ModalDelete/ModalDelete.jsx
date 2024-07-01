import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { deleteContact } from "../../redux/contacts/operations";
import styles from "./ModalDelete.module.css";

export default function ModalDelete({ open, close, id }) {
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
        className: styles.dialog,
      }}
    >
      <DialogTitle id="alert-dialog-title" className={styles["dialog-title"]}>
        {"Confirm Deletion"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions className={styles["dialog-actions"]}>
        <Button
          onClick={close}
          style={{ borderColor: "#00778b", color: "#00778b" }}
          variant="outlined"
          className={styles["cancel-button"]}
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
}
