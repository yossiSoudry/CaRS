export const formInputsDriver = [
  {
    name: "name",
    type: "search",
    label: "שם",
    tag: "input",
    required: true,
  },
  {
    name: "identity",
    type: "search",
    label: "ת.ז",
    tag: "input",
    required: true,
  },
  {
    name: "phone_number",
    type: "search",
    label: "טלפון",
    tag: "input",
    required: true,
  },
  {
    name: "email",
    type: "search",
    label: "מייל",
    tag: "input",
    required: true,
  },
  {
    name: "data_of_birth",
    type: "date",
    label: "תאריך לידה",
    tag: "input",
    required: true,
  },
  {
    name: "license_issuance_date",
    type: "date",
    label: "תאריך הוצאת רשיון",
    tag: "input",
    required: true,
  },
  {
    name: "exp_license",
    type: "date",
    label: "תוקף רשיון",
    tag: "input",
    required: true,
  },
]

export const driverValues = {
  name: '',
  identity: '',
  phone_number: '',
  email: '',
  data_of_birth: '',
  license_issuance_date: '',
  exp_license: '',
};