import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
} from "@mui/material";

const RegisterUser = ({ open, onClose, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [pan, setPan] = useState("");

  const handleSubmit = () => {
    onSubmit({ username: username.trim(), pan: pan.trim() });
    setUsername("");
    setPan("");
    onClose();
  };

  return (
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
          <TextField
            label="PAN Card"
            variant="outlined"
            fullWidth
            value={pan}
            onChange={(e) => setPan(e.target.value)}
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
            disabled={!username.trim() || !pan.trim()}
          >
            Submit
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterUser;
