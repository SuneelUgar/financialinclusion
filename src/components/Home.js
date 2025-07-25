import React, { useState, useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import RegisterChitFund from "./RegisterChitFund";
import RegisterUser from "./RegisterUser";

const Home = () => {
  const navigate = useNavigate();
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false);
  const [openRegisterUser, setOpenRegisterUser] = useState(false);
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFunds = async () => {
  setLoading(true);
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND}/funds/getAllFunds`);
    const fundNames = response.data;

    // Convert strings to objects with unique IDs
    const formattedFunds = fundNames.map((name, index) => ({
      id: index + 1, // Or use a UUID if you prefer
      name,
    }));

    setFunds(formattedFunds);
  } catch (error) {
    console.error("Error fetching funds:", error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    loadFunds();
  }, []);

  const goToParticipants = (name) => {
    console.log(2)
    navigate(`/participants?name=${name}`);
  };

  const handleRegisterFund = () => {
    // Do nothing — just used to conform to props
  };

  const handleRegisterUser = (user) => {
    console.log("User registered:", user);
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

          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          ) : (
            <List>
              {funds.length === 0 ? (
                <Typography textAlign="center" mt={2}>
                  No chit funds registered.
                </Typography>
              ) : (
                funds.map((fund) => (
                  <ListItem key={fund.id} disablePadding>
                    <ListItemButton onClick={() => goToParticipants(fund.name)}>
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
                ))
              )}
            </List>
          )}
        </Paper>
      </Container>

      <RegisterChitFund
        open={openRegisterDialog}
        onClose={() => setOpenRegisterDialog(false)}
        onSubmit={handleRegisterFund}
        onSuccess={loadFunds}
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
