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

const RegisterChitFund = ({ open, onClose, onSubmit, onSuccess }) => {
  const [fundName, setFundName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    const trimmedName = fundName.trim();
    if (!trimmedName) return;

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/funds/addFund`, {
        fname: trimmedName,
      });

      console.log("Fund registered:", response.data);
      onSubmit(response.data); // optional
      setShowSuccess(true);
      setFundName("");
      onClose();

      if (onSuccess) {
        onSuccess(); // ✅ trigger re-fetch in Home
      }
    } catch (error) {
      console.error("Error registering fund:", error);
    }
  };

  const handleSnackbarClose = (_, reason) => {
    if (reason === "clickaway") return;
    setShowSuccess(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>🏦 Register Chit Fund</DialogTitle>
        <DialogContent>
          <Box mt={2} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Fund Name"
              variant="outlined"
              fullWidth
              value={fundName}
              onChange={(e) => setFundName(e.target.value)}
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
              disabled={!fundName.trim()}
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

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
          Chit fund registered successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default RegisterChitFund;
