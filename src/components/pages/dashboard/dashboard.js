import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import Button from "../../buttons/button";
import {
  earningData,
  dropdownData,
} from "./data/dashboardData";
// import { useStateContext } from "../../../contexts/contextProvider";
import Pie from "./pie";
import TableDashboard from "./table";
import AdvancedCarousel from "./caroysel";
import BasicCarousel from "./caroysel";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Dashboard = () => {
  // const { currentColor, currentMode } = useStateContext();

  return (
    <div className="">
      <BasicCarousel />
        <div className="bg-whit dark:bg-secondary my-10 w-full">
          <p className="font-bold text-3xl mt-4 mr-8 text-gray-600 dark:text-gray-200">
            מבט מהיר על צי הרכבים:
          </p>
          <Pie />
        </div>
      <TableDashboard />
    </div>
  );
};

export default Dashboard;
