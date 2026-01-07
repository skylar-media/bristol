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
      { label: "Cube Truck", value: "Cube Truck" },
      { label: "Pickup Truck", value: "Pickup Truck" },
    ],
    id: "vehicle",
  },
  {
    type: "select",
    label: "Bristol Location",
    name: "location",
    required: true,
    colSpan: "half",
    options: [
      {
        label: "Mississauga Car and Truck Rental",
        value: "Mississauga Car and Truck Rental",
      },
      {
        label: "Milton Car and Truck Rental",
        value: "Milton Car and Truck Rental",
      },
      {
        label: "Brampton Car and Truck Rental",
        value: "Brampton Car and Truck Rental",
      },
      {
        label: "Brampton Truck Rental (Bramalea)",
        value: "Brampton Truck Rental (Bramalea)",
      },
      {
        label: "GTA",
        value: "GTA",
        selected: true,
      },
    ],
    id: "location",
  },
];
