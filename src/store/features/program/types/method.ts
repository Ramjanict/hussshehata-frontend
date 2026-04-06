export type MethodPayload = {
  name: string;
  type: string;
  description: string;
  setsInfo: string;
  repRange: string;
  restPeriod: string;
  intensity: string;
  notes: string;
  isActive: boolean;
  sortOrder: number;
};

export interface TrainingMethod {
  id: string;
  name: string;
  type: string;
  description: string;
  setsInfo: string;
  repRange: string;
  restPeriod: string;
  intensity: string;
  notes: string;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface TrainingMethodsResponse {
  success: boolean;
  data: {
    success: boolean;
    data: TrainingMethod[];
    timestamp: string;
    path: string;
    method: string;
  };
  timestamp: string;
  path: string;
  method: string;
}
