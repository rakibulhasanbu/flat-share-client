interface TUser {
  userId: string;
  userName: string;
  email: string;
  role: string;
}

interface TFlat {
  id: string;
  location: string;
  description: string;
  amount: number;
  squareFeet: number;
  totalBedrooms: number;
  totalRooms: number;
  amenities: string[];
  photos: string[];
  availability: boolean;
  advanceAmount: number;
  createdAt: string;
  updatedAt: string;
  postedById: string;
}
