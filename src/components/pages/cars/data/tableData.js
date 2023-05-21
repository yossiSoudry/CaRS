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
      id: 15,
      title: "קטגוריה",
      col: "badge",
      value: "class",
      editable:true,
      type: "select",
      option: ["A - מיני", "B - סופר מיני", "C - חצי משפחתי", "D - משפחתי", "E - משפחתי משודרג", "F - ג'יפון", 'G - מיני וואן', 'H - מיני וואן משודרג', 'I - וואן', 'J - מסחרי', 'K - מנהלים'],
      colors: ["green", "emerald", "teal", "cyan","sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink"]
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
      id: 4,
      title: "סוג דלק",
      col: "simple",
      value: ["fuel_type"],
      editable: false,
      type: "text",
    },
    {
      id: 7,
      title: "טיפול אחרון",
      col: "simple",
      value: ["last_treatment"],
      editable:true,
      type: "date",
    },
    {
      id: 13,
      title: "טיפול הבא",
      col: "simple",
      value: ["km_next_treatment"],
      editable:true,
      type: "select",
    },
    {
      id: 8,
      title: "פקיעת ביטוח",
      col: "calc-date",
      value: ["exp_ins"],
      editable:true,
      type: "date",
    },
    {
      id: 9,
      title: "רמת גימור",
      col: "simple",
      value: ["finish_level"],
      editable: false,
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
      id: 14,
      title: "תיבת הילוכים",
      col: "simple",
      value: ["gearbox"],
      editable:true,
      type: "select",
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
      location: true,
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
    ["last_treatment", "טיפןל אחרון"],
    ["date_join", "תאריך הצטרפות"],
    ["exp_test", "תאריך טסט אחרון"],
    ["date_next_treatment", "תאריך הטיפול הבא"],
    ["exp_ins", "פקיעת ביטוח"]
  ]
  