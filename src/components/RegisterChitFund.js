import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
} from "@mui/material";

const RegisterChitFund = ({ open, onClose, onSubmit }) => {
  const [fundName, setFundName] = useState("");

  const handleSubmit = () => {
    if (fundName.trim()) {
      onSubmit(fundName.trim());
      setFundName("");
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>📋 Register Chit Fund</DialogTitle>
      <DialogContent>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Chit Fund Name"
            variant="outlined"
            value={fundName}
            onChange={(e) => setFundName(e.target.value)}
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
            Register
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterChitFund;
