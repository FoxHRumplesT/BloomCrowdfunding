export interface Product {
  portrait: {
    name: string;
    type: string;
    value: string;
  };
  id: string;
  code: string;
  name: string;
  buyDescription: string;
  investmentDescription: string;
  loanDescription: string;
  amountRequeredMin: number;
  amountRequeredMax: number;
  amountReceived: number;
  productionQuantityMin: number;
  productionQuantityMax: number;
  unitCost: number;
  unitPrice: number;
  quantityDiscountValue: number;
  quantityDiscountPercent: number;
  registerDate: string;
  estimateDeliverDate: string;
  resources: {
    name: string;
    type: string;
    value: string;
  }[];
  status: string;
  active: boolean;
}
