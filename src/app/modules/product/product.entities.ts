export interface CreateTransactionPayload {
  projectId: string;
  amount: number;
  names: string;
  lastNames: string;
  idTypeDocument: number;
  numberDocument: string;
  email: string;
  phone: string;
}

export interface CreateTransactionResponse {
  status: boolean;
  message: string;
  data: {
    signature: string;
    vads: {
      name: string;
      value: string;
    }[],
    transaction: {
      transactionId: string;
      orderId: string;
      date: string;
      projectId: string;
      amount: number;
      email: string;
      names: string;
      lastNames: string;
      idTypeDocument: number;
      numberDocument: string;
      phone: string;
    };
  };
}
