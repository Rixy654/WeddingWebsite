import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

import { RSVPFormProps, RSVPFormDataObject, Guest } from '../../types';

const RSVPEveningForm: React.FC<RSVPFormProps> = ({
  handleSubmit,
  guestType,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginTop: 3,
      }}
    >
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
      <Button
        variant="contained"
        type="submit"
        onClick={handleFormSubmission}
        fullWidth
      >
        Submit Data
      </Button>
    </Box>
  );
};

export default RSVPEveningForm;
