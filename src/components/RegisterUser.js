import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";

import axios from "axios";

const RegisterUser = ({ open, onClose, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    const trimmedUsername = username.trim();
    if (!trimmedUsername) return;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/funds/user`,
        { name: trimmedUsername }
      );

      console.log("User registered:", response.data);
      onSubmit(response.data);
      setUsername("");
      onClose();
      setShowSuccess(true); // ✅ Show success notification
    } catch (error) {
      console.error("Error registering user:", error);
      // Optional: you could also show an error snackbar here
    }
  };

  const handleSnackbarClose = (_, reason) => {
    if (reason === "clickaway") return;
    setShowSuccess(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>👤 Register User</DialogTitle>
        <DialogContent>
          <Box mt={2} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Box>
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button onClick={onClose} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!username.trim()}
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* ✅ Floating Notification Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          User successfully registered!
        </Alert>
      </Snackbar>
    </>
  );
};

export default RegisterUser;
