export type FormField =
  | {
      type: "input";
      label: string;
      name: "name" | "email" | "phone";
      inputType: "text" | "email" | "tel";
      placeholder: string;
      required?: boolean;
      colSpan: "full" | "half";
      id?: string;
    }
  | {
      type: "select";
      label: string;
      name: "vehicle" | "location";
      options: { label: string; value: string; selected?: boolean }[];
      required?: boolean;
      colSpan: "full" | "half";
      id?: string;
      default?: string;
    };

export const formFields: FormField[] = [
  {
    type: "input",
    label: "Name",
    name: "name",
    inputType: "text",
    placeholder: "Your name",
    required: true,
    colSpan: "full",
    id: "name",
  },
  {
    type: "input",
    label: "Email",
    name: "email",
    inputType: "email",
    placeholder: "Email address",
    required: true,
    colSpan: "full",
    id: "email",
  },
  {
    type: "input",
    label: "Phone Number",
    name: "phone",
    inputType: "tel",
    placeholder: "Phone number",
    required: true,
    colSpan: "full",
    id: "phone",
  },
  {
    type: "select",
    label: "Vehicle Needed",
    name: "vehicle",
    colSpan: "half",
    options: [
      { label: "Select a Vehicle", value: "" },
      { label: "Cargo Van", value: "Cargo Van" },
      { label: "16' Cube Truck", value: "16' Cube Truck" },
      { label: "24'-26' Straight Trucks", value: "24'-26' Straight Trucks" },
      { label: "20' Straight Trucks", value: "20' Straight Trucks" },
    ],
    id: "vehicle",
  },
  {
    type: "select",
    label: "Bristol Location",
    name: "location",
    colSpan: "half",
    options: [
      {
        label: "Mississauga Car and Truck Rental",
        value: "mississauga",
      },
      {
        label: "Milton Car and Truck Rental",
        value: "milton",
      },
      {
        label: "Brampton Truck Rental (Rutherford Road)",
        value: "brampton",
      },
      {
        label: "Brampton Car and Truck Rental (Bramalea)",
        value: "brampton bramaliea",
      },
      {
        label: "Other/GTA",
        value: "gta",
        selected: true,
      },
    ],
    id: "location",
  },
];
