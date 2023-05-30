export const usersColumnsData = [
  {
    title: "שם",
    col: "main",
    lines: 2,
    value: ["users", ["name"], ["userName"]],
    editable: true,
    type: "text",
  },
  {
    title: "תפקיד",
    col: "titles",
    lines: 1,
    value: ["company_role", "department"],
    editable: true,
    type: ["text", "text"],
  },
  {
    title: "פרטים",
    col: "links",
    lines: 2,
    value: ["email", "phone_number"],
    editable: true,
    type: ["email", "phone"],
  },
  {
    title: " תאריך רישום",
    col: "simple",
    lines: 2,
    value: ["date_join"],
    editable: false,
  },
  {
    title: "הרשאה",
    col: "badge",
    value: "role",
    editable: true,
    type: "select",
    option: ["user", "pending", "admin", "dormant"],
    colors: ["green", "lime", "red", "yellow"]
  },
  {
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
