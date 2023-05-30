export const carsColumnsData = [

    {
      id: 1,
      title: "דגם ויצרן",
      col: "main",
      lines: 2,
      value: ["cars", ["manufacturer_en", "model_en"], ["manufacturer_hb", 'model_hb']],
      editable: false,
      type: "text",
    },
    {
      id: 2,
      title: "מס' רישוי",
      col: "titles",
      value: ["license_number"],
      editable: false,
      type: "text",
    },
    {
      id: 3,
      title: "סניף",
      col: "simple",
      value: ["branch"],
      editable:true,
      type: "select",
      option: ["בני ברק", "קריית שמונה", "תל אביב-יפו", "עפולה"]
    },
    {
      title: "פקיעת טסט",
      col: "calc-date",
      value: ["exp_test"],
      editable:true,
      type: "date",
    },
    {
      title: "טסט קודם",
      col: "calc-date",
      value: ["last_test_date"],
      editable:true,
      type: "date",
    },
    {
      id: 10,
      title: "אגרת רישוי",
      col: "simple",
      value: ["license_fee"],
      editable: true,
      type: "text",
    },
    {
      id: 10,
      title: "תשלום אגרה",
      col: "simple",
      value: ["fee_paid"],
      editable: true,
      type: "text",
    },
    {
      id: 10,
      title: "שנתון",
      col: "simple",
      value: ["year"],
      editable: false,
      type: "text",
    },
    {
      id: 11,
      title: "צבע",
      col: "simple",
      value: ["color"],
      editable:true,
      type: "text",
    },
    {
      id: 12,
      title: "ק''מ",
      col: "simple",
      value: ["km"],
      editable:true,
      type: "number",
    },
    {
      id: 5,
      title: "סטטוס",
      col: "badge",
      value: "status",
      editable:true,
      type: "select",
      option: ["פנוי", "השכרה", "מוסך", "מושבת", "נמכר"],
      colors: ["green", "purple", "red", "yellow", 'gray']
    },
    {
      id: 6,
      title: "פעולות",
      col: "actions",
      files: true,
      value: "",
      editable: false,
      type: "icon",
    },
  ];

  // export const carObjSearch = [
  //   ["branch", "סניף"],
  //   ["class", "דרגה"],
  //   ["color", "צבע"],
  //   ["deductible", "שנה"],
  //   ["finish_level", "רמת גימור"],
  //   ["fuel_type", "סוג דלק"],
  //   ["km", "קמ"],
  //   ["license_number", "מספר רכב"],
  //   ["manufacturer_en", "שם החברה באנגלית"],
  //   ["manufacturer_hb", "שם החברה בעברית"],
  //   ["model_en", "דגם באנגלית"],
  //   ["model_hb", "דגם בעברית"],
  //   ["status", "סטטוס"],
  //   ["year", "שנה"]
  // ]
  
  export const carObjDateSearch = [
    ["last_treatment", "טיפול אחרון"],
    ["date_join", "תאריך הצטרפות"],
    ["exp_test", "תאריך טסט אחרון"],
    ["date_next_treatment", "תאריך הטיפול הבא"],
    ["exp_ins", "פקיעת ביטוח"]
  ]
  