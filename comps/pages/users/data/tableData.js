export const usersColumnsData = [
  {
    id: 1,
    title: "שם",
    col: "main",
    lines: 2,
    value: ["users", ["name"], ["userName"]],
    editable: true,
    type: "text",
  },
  {
    id: 2,
    title: "תפקיד",
    col: "titles",
    lines: 1,
    value: ["company_role", "department"],
    editable: true,
    type: ["text", "text"],
  },
  {
    id: 3,
    title: "פרטים",
    col: "links",
    lines: 2,
    value: ["email", "phone_number"],
    editable: true,
    type: ["email", "phone"],
  },
  {
    id: 4,
    title: "הרשאה",
    col: "badge",
    value: "role",
    editable: true,
    type: "select",
    option: ["user", "pending", "admin", "dormant"],
    colors: ["green", "lime", "red", "yellow"]
  },
  {
    id: 6,
    title: "פעולות",
    col: "actions",
    files: true,
    value: "",
    editable: false,
    type: "text",
  },
];

export const userObjSearch = [
  ["name", "שם"],
  ["company_role", "תפקיד"],
  ["department", "מחלקה"],
  ["email", "דוא''ל"],
  ["phone_number", "טלפון"],
  ["role", "הרשאה"],
];

export const userObjDateSearch = [["date_added", "תאריך הקמה"]];
