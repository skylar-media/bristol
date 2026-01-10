export const buildEmailContent = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any,
  label: string,
  ip: string
) => {
  return `
    <p>Hello Bristol Sales Expert,</p>
    <p>Here is a <b>NEW</b> inquiry interested in renting a B2B vehicle with Bristol. Details in form content listed below.</p>
    <p><i>Note: They may or may not have pre-selected a vehicle of choice, this is an optional field for the customer.</i></p>
    <p>Please <b>CONTACT</b> this customer to arrange their booking with Bristol.</p>
    <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
      <tr>
        <td><strong>Name:</strong></td>
        <td>${body.name || "N/A"}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td>${body.email || "N/A"}</td>
      </tr>
      <tr>
        <td><strong>Phone:</strong></td>
        <td>${body.phone || "N/A"}</td>
      </tr>
      <tr>
        <td><strong>Vehicle:</strong></td>
        <td>${body.vehicle || "N/A"}</td>
      </tr>
      <tr>
        <td><strong>Location:</strong></td>
        <td>${label || "N/A"}</td>
      </tr>
      <tr>
        <td><strong>IP Address:</strong></td>
        <td>${ip || "N/A"}</td>
    </tr>
    </table>

    <p>Good luck with this booking!</p>
  `;
};

export const bristolLocations = [
  {
    label: "Mississauga Car and Truck Rental",
    value: "mississauga",
    email: "alexp@bristoltruckrentals.com",
    cc: ["pshilotri@bristoltruckrentals.com"],
  },
  {
    label: "Milton Car and Truck Rental",
    value: "milton",
    email: "valimena@bristoltruckrentals.com",
    cc: ["tsabri@bristoltruckrentals.com"],
  },
  {
    label: "Brampton Truck Rental (Rutherford Road)",
    value: "brampton",
    email: "tgonzaga@bristoltruckrentals.com",
    cc: ["vshory@bristoltruckrentals.com"],
    fallback: true, // ✅ default GTA / Brampton
  },
  {
    label: "Brampton Car and Truck Rental (Bramalea)",
    value: "brampton bramaliea",
    email: "dlobo@bristoltruckrentals.com",
    cc: ["jhussain@bristoltruckrentals.com", "gsingh@bristoltruckrentals.com"],
  },
];
