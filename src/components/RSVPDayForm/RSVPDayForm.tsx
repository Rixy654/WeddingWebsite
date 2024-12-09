import * as React from 'react';
import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

import { RSVPFormProps, RSVPFormDataObject, Guest } from '../../types';

const RSVPDayForm: React.FC<RSVPFormProps> = ({ handleSubmit, guestType }) => {
  const [primaryGuest, setPrimaryGuest] = useState<Guest>({
    name: '',
    email: '',
    attending: '',
    dietaryRequirements: 'none',
    otherDietaryDetails: '',
  });

  const [additionalGuests, setAdditionalGuests] = useState<Guest[]>([]);

  const handlePrimaryGuestChange = (field: keyof Guest, value: string) => {
    setPrimaryGuest((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGuestChange = (
    index: number,
    field: keyof Guest,
    value: string
  ) => {
    const updatedGuests = [...additionalGuests];
    updatedGuests[index] = { ...updatedGuests[index], [field]: value };
    setAdditionalGuests(updatedGuests);
  };

  const addGuest = () => {
    setAdditionalGuests((prev) => [
      ...prev,
      {
        name: '',
        email: '',
        attending: '',
        dietaryRequirements: 'none',
        otherDietaryDetails: '',
      },
    ]);
  };

  const removeGuest = (index: number) => {
    setAdditionalGuests((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    const data: RSVPFormDataObject = {
      primaryGuest,
      additionalGuests,
    };
    handleSubmit(data);
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
      <TextField
        type="text"
        label="Your Name"
        value={primaryGuest.name}
        onChange={(e) => handlePrimaryGuestChange('name', e.target.value)}
        required
        fullWidth
      />
      <TextField
        type="email"
        label="Your Email"
        value={primaryGuest.email}
        onChange={(e) => handlePrimaryGuestChange('email', e.target.value)}
        required
        fullWidth
      />
      <FormControl fullWidth required>
        <InputLabel id="attending-label">Attending</InputLabel>
        <Select
          labelId="attending-label"
          value={primaryGuest.attending}
          onChange={(e) =>
            handlePrimaryGuestChange('attending', e.target.value)
          }
          label="Attending"
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth required>
        <InputLabel id="dietary-label">Dietary Requirements</InputLabel>
        <Select
          labelId="dietary-label"
          value={primaryGuest.dietaryRequirements}
          onChange={(e) =>
            handlePrimaryGuestChange('dietaryRequirements', e.target.value)
          }
          label="Dietary Requirements"
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="vegetarian">Vegetarian</MenuItem>
          <MenuItem value="vegan">Vegan</MenuItem>
          <MenuItem value="gluten-free">Gluten Free</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      {primaryGuest.dietaryRequirements === 'other' && (
        <TextField
          type="text"
          label="Other Dietary Details"
          value={primaryGuest.otherDietaryDetails}
          onChange={(e) =>
            handlePrimaryGuestChange('otherDietaryDetails', e.target.value)
          }
          required
          fullWidth
        />
      )}

      {additionalGuests.map((guest, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            padding: 2,
            border: '1px solid #ccc',
            borderRadius: 2,
            backgroundColor: '#f9f9f9',
          }}
        >
          <TextField
            type="text"
            label={`Guest Name`}
            value={guest.name}
            onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
            required
            fullWidth
          />
          <TextField
            type="email"
            label={`Guest Email`}
            value={guest.email}
            onChange={(e) => handleGuestChange(index, 'email', e.target.value)}
            required
            fullWidth
          />
          <FormControl fullWidth required>
            <InputLabel id={`attending-label-${index}`}>Attending</InputLabel>
            <Select
              labelId={`attending-label-${index}`}
              value={guest.attending}
              onChange={(e) =>
                handleGuestChange(index, 'attending', e.target.value)
              }
              label="Attending"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel id={`dietary-label-${index}`}>
              Dietary Requirements
            </InputLabel>
            <Select
              labelId={`dietary-label-${index}`}
              value={guest.dietaryRequirements}
              onChange={(e) =>
                handleGuestChange(index, 'dietaryRequirements', e.target.value)
              }
              label="Dietary Requirements"
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="vegetarian">Vegetarian</MenuItem>
              <MenuItem value="vegan">Vegan</MenuItem>
              <MenuItem value="gluten-free">Gluten Free</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          {guest.dietaryRequirements === 'other' && (
            <TextField
              type="text"
              label="Other Dietary Details"
              value={guest.otherDietaryDetails || ''}
              onChange={(e) =>
                handleGuestChange(index, 'otherDietaryDetails', e.target.value)
              }
              required
              fullWidth
            />
          )}
          <Button
            onClick={() => removeGuest(index)}
            startIcon={<Remove />}
            color="error"
            variant="contained"
          >
            Remove Additional Guest
          </Button>
        </Box>
      ))}

      <Button
        variant="contained"
        onClick={addGuest}
        startIcon={<Add />}
        fullWidth
      >
        Add Additional Guest
      </Button>

      <Button
        variant="contained"
        type="submit"
        onClick={handleFormSubmission}
        fullWidth
      >
        Submit
      </Button>
    </Box>
  );
};

export default RSVPDayForm;
