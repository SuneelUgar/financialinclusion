import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Divider,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const transactions = [
  { id: 1, name: 'Payment to Flipkart', amount: '₹1,299', date: '2025-07-22' },
  { id: 2, name: 'Electricity Bill', amount: '₹850', date: '2025-07-20' },
  { id: 3, name: 'Subscription: Netflix', amount: '₹499', date: '2025-07-18' },
  { id: 4, name: 'Transfer to Rahul', amount: '₹5,000', date: '2025-07-17' },
  { id: 5, name: 'Credit Card Payment', amount: '₹3,200', date: '2025-07-15' },
];

const blockData = {
  'block-alpha': {
    id: '001',
    name: 'Block Alpha',
    date: '2025-07-22',
    transactions: [
      { id: 1, name: 'Payment to Flipkart', amount: '₹1,299', date: '2025-07-22' },
      { id: 2, name: 'Zomato Order', amount: '₹520', date: '2025-07-21' },
      { id: 3, name: 'Mobile Recharge', amount: '₹299', date: '2025-07-20' },
      { id: 4, name: 'Cab to Office', amount: '₹250', date: '2025-07-20' },
      { id: 5, name: 'Electricity Bill', amount: '₹850', date: '2025-07-19' },
    ],
  },
  'block-beta': {
    id: '002',
    name: 'Block Beta',
    date: '2025-07-21',
    transactions: [
      { id: 6, name: 'Netflix Subscription', amount: '₹499', date: '2025-07-18' },
      { id: 7, name: 'Transfer to Rahul', amount: '₹5,000', date: '2025-07-17' },
      { id: 8, name: 'Amazon Purchase', amount: '₹1,100', date: '2025-07-16' },
      { id: 9, name: 'Food Delivery', amount: '₹430', date: '2025-07-15' },
      { id: 10, name: 'Credit Card Payment', amount: '₹3,200', date: '2025-07-15' },
    ],
  },
  'block-gamma': {
    id: '003',
    name: 'Block Gamma',
    date: '2025-07-20',
    transactions: [
      { id: 11, name: 'Spotify', amount: '₹199', date: '2025-07-14' },
      { id: 12, name: 'Transfer to Priya', amount: '₹2,000', date: '2025-07-13' },
      { id: 13, name: 'Swiggy Order', amount: '₹640', date: '2025-07-12' },
      { id: 14, name: 'Metro Card Recharge', amount: '₹150', date: '2025-07-11' },
      { id: 15, name: 'Fuel', amount: '₹2,500', date: '2025-07-10' },
    ],
  },
};

const blocks = Object.values(blockData).map(b => b.name);

const PendingTransactions = () => {
  const [selectedBlockId, setSelectedBlockId] = useState(null);

  const selectedBlock = selectedBlockId ? blockData[selectedBlockId] : null;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#1e1e2f',
        color: '#ffffff',
        px: 6,
        py: 4,
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
        Pending Transactions Dashboard
      </Typography>

      {selectedBlock ? (
        <Card sx={{ backgroundColor: '#2e2e3e', color: '#fff', borderRadius: 3, boxShadow: 5, p: 4 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <IconButton onClick={() => setSelectedBlockId(null)} sx={{ color: '#64b5f6', mr: 1 }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5">{selectedBlock.name} Details</Typography>
          </Box>
          <Typography variant="subtitle1"><strong>Block ID:</strong> {selectedBlock.id}</Typography>
          <Typography variant="subtitle1" gutterBottom><strong>Created On:</strong> {selectedBlock.date}</Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Transactions</Typography>
          <List>
            {selectedBlock.transactions.map((txn) => (
              <ListItem key={txn.id} divider>
                <ListItemText
                  primary={<Typography variant="subtitle1">{txn.name}</Typography>}
                  secondary={<Typography variant="body2" color="gray">{txn.date}</Typography>}
                />
                <Typography color="#ffa726" fontWeight="bold">
                  {txn.amount}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Card>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ backgroundColor: '#2e2e3e', color: '#fff', borderRadius: 3, boxShadow: 5 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Pending Transactions
                </Typography>
                <Divider sx={{ backgroundColor: '#444', mb: 2 }} />
                <List>
                  {transactions.map((txn) => (
                    <ListItem key={txn.id} divider>
                      <ListItemText
                        primary={<Typography variant="subtitle1">{txn.name}</Typography>}
                        secondary={<Typography variant="body2" color="gray">{txn.date}</Typography>}
                      />
                      <Typography color="#ffa726" fontWeight="bold">
                        {txn.amount}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#2e2e3e', color: '#fff', borderRadius: 3, boxShadow: 5 }}>
              <Typography variant="subtitle1" gutterBottom>
                Total Blocks
              </Typography>
              <Typography variant="h2" fontWeight="bold" color="#64b5f6">
                {blocks.length}
              </Typography>
            </Paper>

            <Card sx={{ backgroundColor: '#2e2e3e', color: '#fff', borderRadius: 3, boxShadow: 5 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Blocks Created
                </Typography>
                <Divider sx={{ backgroundColor: '#444', mb: 2 }} />
                <List>
                  {Object.entries(blockData).map(([blockId, block], index) => (
                    <ListItem
                      key={index}
                      button
                      onClick={() => setSelectedBlockId(blockId)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <Typography color="#64b5f6" fontSize="1rem">
                        • {block.name}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default PendingTransactions;
