export interface TUser {
  userId: string;
  userName: string;
  email: string;
  role: string;
}

export interface TFlat {
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

export const USER_ROLE = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export const BookingStatus = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
};

export type TUserRole = keyof typeof USER_ROLE;
