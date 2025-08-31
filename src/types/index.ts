// TMVBD AI Customer Service Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  language: 'bn' | 'en';
  subscription: 'basic' | 'standard' | 'premium' | 'enterprise';
  devices: number;
  loyaltyPoints: number;
  totalSpent: number;
  vehicleInfo?: {
    plateNumber: string;
    model: string;
    color: string;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  agent?: string;
}