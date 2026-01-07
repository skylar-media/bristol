export type Location = {
  title: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  phoneHref: string;
  id: string;
};

export const locations: Location[] = [
  {
    title: "Brampton Car and Truck Rental",
    addressLine1: "6 Tracey Blvd.",
    addressLine2: "Brampton, ON, L6T 5R9",
    phone: "(905) 790-8086",
    phoneHref: "6473621965",
    id: "btn-bristol-lp-branch-brampton-tracy-call",
  },
  {
    title: "Brampton Truck Rental (Bramalea)",
    addressLine1: "216 Rutherford Road South",
    addressLine2: "Brampton, ON, L6W 3J6",
    phone: "(905) 453-8080",
    phoneHref: "6475849852",
    id: "btn-bristol-lp-branch-brampton-bramalea-call",
  },
  {
    title: "Milton Car and Truck Rental",
    addressLine1: "305 Steeles Avenue East.",
    addressLine2: "Milton, ON, L9T 1Y2",
    phone: "(905) 864-9880",
    phoneHref: "6476932452",
    id: "btn-bristol-lp-branch-milton-call",
  },
  {
    title: "Mississauga Car and Truck Rental",
    addressLine1: "2175 Royal Windsor Drive",
    addressLine2: "Mississauga, ON, L5J 1K6",
    phone: "(905) 823-8499",
    phoneHref: "6479311763",
    id: "btn-bristol-lp-branch-mississauga-call",
  },
];
