import React, { useState } from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../../contexts/contextProvider";
import { registerLicense } from "@syncfusion/ej2-base";
import { apiGet } from "../../../services/services";
import { URL_CARS } from "../../../data/constants";
import { useEffect } from "react";

registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35WdkdiX3tacHdcQQ==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEVmWX1fdnBRRmVbUw==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXH9ccXJRQmBbU0Y=;MTA2NjkzMEAzMjMwMmUzNDJlMzBHYkxtdzhlc093aE1VdTRSR0JXSEh3Zm9mVGxnWlBsNmN6Yi9ZUnhLZ0xvPQ==;MTA2NjkzMUAzMjMwMmUzNDJlMzBqOWhnMTFDc0JFZHJCSFNDbE04UWRBb3lidWF0WnVUTk5HV09xRnYySTdnPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWXpecnVTQmRdUkd0;MTA2NjkzM0AzMjMwMmUzNDJlMzBCeXVNRE1QQTczaTNWOUdLUUl4dHlkK2tFS21sOCsrNFp2ZnhhUUZ5SjFZPQ==;MTA2NjkzNEAzMjMwMmUzNDJlMzBJSm43bEVxOEowdU05am9CZkFhRVBtTWlmR2RlMUlUZElYc3JWcVZLVC9nPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXH9ccXJRQmFVVkA=;MTA2NjkzNkAzMjMwMmUzNDJlMzBrZFBxY2VZZnlEZ041dk5aWnJBaWhIcXpZVDBxdU5wVUxiRUtqRzZjTFJVPQ==;MTA2NjkzN0AzMjMwMmUzNDJlMzBMWTA4dm1xbDVmbjBSbm9ZYnVpbEZNYUFwNFc0MGZCdTdVZ1ZmVndTQXhnPQ==;MTA2NjkzOEAzMjMwMmUzNDJlMzBCeXVNRE1QQTczaTNWOUdLUUl4dHlkK2tFS21sOCsrNFp2ZnhhUUZ5SjFZPQ=="
);

const Doughnut = ({ data }) => {
  const { currentMode, screenSize } = useStateContext();

  return (
    <AccumulationChartComponent
      background={currentMode === "dark" ? "#33373E" : "#fff"}
      enableRtl={true}
      id="pie-chart"
      ref={(pie) => (pie = pie)}
      legendSettings={{
        visible: true,
        textStyle: { color: "#64748b", size: "17px", fontWeight: "bold" },
      }}
      selectedDataIndexes={[
        { series: 3, point: 1 },
        { series: 2, point: 3 },
      ]}
      enableSmartLabels={true}
      enableAnimation={true}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName="_id"
          yName="y"
          innerRadius="80%"
          dataLabel={{
            visible: true,
            position: "Outside",
            name: "_id",
            font: {
              color: "#64748b",
              size: "16px",
            },
          }}
          radius={`${screenSize > 756 ? '90%' : '65%'}`}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

// Registering Syncfusion license key
export default function Pie() {
  const [pie, setPie] = useState([]);

  const pieData = async () => {
    const getPieData = await apiGet(URL_CARS + "/graph");
    const sortedPieData = getPieData.sort((a, b) => b._id.localeCompare(a._id));
    setPie(sortedPieData);
  };

  useEffect(() => {
    pieData();
  }, []);

  return (
    <>
      <div className="w-full min-h-[40vh]">
        {pie.length > 0 && (
          <Doughnut id="chart-pie" data={pie} legendVisiblity height="full" />
        )}
      </div>
    </>
  );
}
