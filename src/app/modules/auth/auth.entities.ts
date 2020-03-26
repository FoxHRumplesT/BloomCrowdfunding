export interface User {
  id: string;
  username: string;
  roles: string[];
  dni: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  active: string;
  temporalPassword: string;
}

export interface CreateUserPayload {
  username: string;
  password: string;
  documentType: string;
  dni: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  roles: string[];
}
