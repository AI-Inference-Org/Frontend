export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  wallet_address: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Deployment {
  id: number;
  name: string;
  category: string;
  status: string;
  description: string;
  url: string;
  price: number;
  type: string;
  userId: number;
  user: {
    id: number;
    email: string;
    name: string;
    role: string;
    wallet_address: string;
    isEmailVerified: boolean;
  };
}
