export type BristolLocationType = {
  id: string;
  name: string;
  label: string;
  title: string;
  displayPhone: string;
  ringsToPhone: string;
  ringsToPhoneTel: string;
  email: string;
  fallback?: boolean;
};

export const bristolLocations = [
  {
    id: "mississauga",
    name: "Mississauga",
    displayPhone: "(647) 931-1763",
    ringsToPhone: "(905) 823-8499",
    ringsToPhoneTel: "tel:9058238499",
    email: "alexp@bristoltruckrentals.com",
    title: "Mississauga Car and Truck Rental",
    label: "Mississauga",
  },
  {
    id: "milton",
    name: "Milton",
    displayPhone: "(647) 693-2452",
    ringsToPhone: "(905) 864-9880",
    ringsToPhoneTel: "tel:9058649880",
    email: "valimena@bristoltruckrentals.com",
    title: "Milton Car and Truck Rental",
    label: "Milton",
  },
  {
    id: "brampton-rutherford",
    name: "GTA",
    displayPhone: "(647) 692-6388",
    ringsToPhone: "(905) 453-8080",
    ringsToPhoneTel: "tel:9054538080",
    email: "tgonzaga@bristoltruckrentals.com",
    title: "Brampton Car and Truck Rental",
    fallback: true,
    label: "GTA",
  },
  {
    id: "brampton",
    name: "Brampton",
    displayPhone: "(647) 362-1965",
    ringsToPhone: "(905) 790-8086",
    ringsToPhoneTel: "tel:9057908086",
    email: "dlobo@bristoltruckrentals.com",
    title: "Brampton Truck Rental",
    label: "Brampton",
  },
];
