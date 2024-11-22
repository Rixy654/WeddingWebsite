import * as React from "react";
import { useState } from "react";
import { TextField, Button, Box, Typography } from '@mui/material';

interface ComponentProps {
  handleSubmit: (data: RSVPFormDataObject) => void;
}

interface RSVPFormDataObject {
  name: string;
  email: string;
}

const RSVPForm: React.FC<ComponentProps> = ({handleSubmit}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    const data: RSVPFormDataObject = {name, email};
    handleSubmit(data);
  }

  return (
    <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 300,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          RSVP Now
        </Typography>
        <div>
            <TextField
              type="text"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
        </div>
        <div>
        <TextField
              type="email"
              label="Emil"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
        </div>
        <Button variant="contained" type="submit" onClick={handleFormSubmission} fullWidth>Submit Data</Button>
      </Box>
  )
};

export default RSVPForm;
