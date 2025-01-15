export interface RSVPFormProps {
  handleSubmit: (data: RSVPFormDataObject) => void;
  guestType: string;
}

export interface RSVPFormDataObject {
  primaryGuest: Guest;
  additionalGuests: Guest[];
}

export interface Guest {
  name: string;
  email: string;
  attending: string;
  song: string;
  dietaryRequirements: string;
  otherDietaryDetails?: string;
}
