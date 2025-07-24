import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import RegisterChitFund from "./RegisterChitFund";
import RegisterUser from "./RegisterUser";


const Home = () => {
  const navigate = useNavigate();
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false);

  const funds = [
    { id: 1, name: "Alpha Chit Fund" },
    { id: 2, name: "Beta Chit Group" },
    { id: 3, name: "Gamma Finance Club" },
  ];

  const goToParticipants = (id) => {
    navigate(`/participants`);
  };

  const handleRegisterFund = (fundName) => {
    console.log("Registered:", fundName);
    // Optionally add to funds list or send to backend
  };

  const [openRegisterUser, setOpenRegisterUser] = useState(false);

  const handleRegisterUser = (user) => {
    console.log("User registered:", user);
    // Optionally add to a user list or send to backend
  };


  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#3183e0" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            CHIT FUND APPLICATION
          </Typography>
          <Button color="inherit" onClick={() => setOpenRegisterUser(true)}>
            Register User
          </Button>
          <Button color="inherit" onClick={() => navigate("/pending-transactions")}>
            Check Status
          </Button>
          <Avatar
            src="assets/mylogo1.jpg"
            alt="Logo"
            sx={{ width: 50, height: 50, marginLeft: 2 }}
          />
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="center" mb={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenRegisterDialog(true)}
            size="large"
          >
            Register Chit Fund
          </Button>
        </Box>

        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold", color: "#1a3c66" }}
          >
            Registered Chit Funds
          </Typography>

          <List>
            {funds.map((fund) => (
              <ListItem key={fund.id} disablePadding>
                <ListItemButton onClick={() => goToParticipants(fund.id)}>
                  <Card
                    variant="outlined"
                    sx={{
                      width: "100%",
                      backgroundColor: "#e8f0fe",
                      ":hover": { backgroundColor: "#e1ecff" },
                    }}
                  >
                    <CardContent>
                      <ListItemText
                        primary={fund.name}
                        primaryTypographyProps={{
                          fontSize: 18,
                          fontWeight: 600,
                          color: "#2c3e50",
                        }}
                      />
                    </CardContent>
                  </Card>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>

      {/* Register Dialog (Separate Component) */}
      <RegisterChitFund
        open={openRegisterDialog}
        onClose={() => setOpenRegisterDialog(false)}
        onSubmit={handleRegisterFund}
      />
      <RegisterUser
        open={openRegisterUser}
        onClose={() => setOpenRegisterUser(false)}
        onSubmit={handleRegisterUser}
      />
    </>
  );
};

export default Home;
