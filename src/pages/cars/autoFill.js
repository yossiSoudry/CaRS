import { companyNames, inputs } from "./variables.js";
import { AutoFill } from "./autoFillClass.js";

// export const doAutoFill = () => {
//   document
//     .querySelector("#autoFill")
//     .addEventListener("click", () => doApi(inputs[1].value));
// };

export const doApi = (numLicense) => {
  numLicense = numLicense.replaceAll("-", "");

  let url =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=" +
    numLicense;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let car = data.result.records;
      console.log(car);
      autoFill(car);
    });
};

const autoFill = (_carObj) => {

  if (inputs[1].value.length >= 7){
    
  };
  else alert("יש להזין מס' רישוי תקין");
};

// Creates the list of manufacturers in the select option
export const fillOptions = () => {
  let valCompanies = [];

  Object.values(companyNames[1]).forEach((val) => {
    if (! valCompanies.find((element) => element == val))
      valCompanies.push(val);
  });

  valCompanies.sort();

  valCompanies.forEach((element) => {
    let option = document.createElement("option");
    document.querySelector("#yazranList").append(option);
    // option.innerHTML = element;
    option.value = element;
  });
};
