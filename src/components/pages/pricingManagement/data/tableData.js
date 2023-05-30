export const pricingColumnsData = [
    {
      title: "קטגוריה",
      col: "main",
      lines: 2,
      value: ["categories", ["letter"], ["category"]],
      editable: false,
      type: "text",
    },
    {
      title: "מחיר יומי",
      col: "titles",
      value: ["daily"],
      editable: true,
      type: "text",
    },
    {
      title: "מחיר שבועי",
      col: "titles",
      value: ["weekly"],
      editable: true,
      type: "text",
    },
    {
      title: "מחיר חודשי",
      col: "titles",
      value: ["monthly"],
      editable: true,
      type: "text",
    },
    {
      title: "ביטוח צעיר",
      col: "simple",
      value: ["new_driver"],
      editable: true,
      type: "date",
    },
    {
      title: "ביטוח חדש",
      col: "simple",
      value: ["yang_driver"],
      editable: true,
      type: "date",
    },
    {
      title: "ביטוח שבת",
      col: "simple",
      value: ["shabat"],
      editable: true,
      type: "date",
    },
    {
      title: "הגבלת ק''מ",
      col: "simple",
      value: ["km"],
      editable: true,
      type: "date",
    },
    {
      title: "350 ק''מ",
      col: "simple",
      value: ["package_km"],
      editable: true,
      type: "date",
    },
    {
      title: "השתתפות עצמית",
      col: "simple",
      value: ["deductible"],
      editable: true,
      type: "date",
    },
    {
      title: "הפחתת השתתפות",
      col: "simple",
      value: ["deductible_reduction"],
      editable: true,
      type: "date",
    },
    {
      title: "ה''ע נהג חדש",
      col: "simple",
      value: ["deductible_new_driver"],
      editable: true,
      type: "date",
    },
    {
      title: "הפחתה ל-4,000",
      col: "simple",
      value: ["deductible_reduction_new_driver_1"],
      editable: true,
      type: "date",
    },
    {
      title: "הפחתה ל-2,000",
      col: "simple",
      value: ["deductible_reduction_new_driver_2"],
      editable: true,
      type: "date",
    },
    {
      title: "פעולות",
      col: "actions",
      files: false,
      editable: false,
      type: "text",
    },
  ];
  
  export const userObjSearch = [
    ["category", "קטגוריה"],
    ["daily", "מחיר יומי"],
  ];

  // export const dataToSelect = [
  //   'מחירון 1 מ-01/05/2023 עד-01/06/2023'
  // ]
  
  export const pricingObjDateSearch = [["date_added", "תאריך הקמה"]];