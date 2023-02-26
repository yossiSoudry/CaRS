import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import * as React from "react";
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35WdkdiX3tacHdcQQ==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEVmWX1fdnBRRmVbUw==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXH9ccXJRQmBbU0Y=;MTA2NjkzMEAzMjMwMmUzNDJlMzBHYkxtdzhlc093aE1VdTRSR0JXSEh3Zm9mVGxnWlBsNmN6Yi9ZUnhLZ0xvPQ==;MTA2NjkzMUAzMjMwMmUzNDJlMzBqOWhnMTFDc0JFZHJCSFNDbE04UWRBb3lidWF0WnVUTk5HV09xRnYySTdnPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWXpecnVTQmRdUkd0;MTA2NjkzM0AzMjMwMmUzNDJlMzBCeXVNRE1QQTczaTNWOUdLUUl4dHlkK2tFS21sOCsrNFp2ZnhhUUZ5SjFZPQ==;MTA2NjkzNEAzMjMwMmUzNDJlMzBJSm43bEVxOEowdU05am9CZkFhRVBtTWlmR2RlMUlUZElYc3JWcVZLVC9nPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXH9ccXJRQmFVVkA=;MTA2NjkzNkAzMjMwMmUzNDJlMzBrZFBxY2VZZnlEZ041dk5aWnJBaWhIcXpZVDBxdU5wVUxiRUtqRzZjTFJVPQ==;MTA2NjkzN0AzMjMwMmUzNDJlMzBMWTA4dm1xbDVmbjBSbm9ZYnVpbEZNYUFwNFc0MGZCdTdVZ1ZmVndTQXhnPQ==;MTA2NjkzOEAzMjMwMmUzNDJlMzBCeXVNRE1QQTczaTNWOUdLUUl4dHlkK2tFS21sOCsrNFp2ZnhhUUZ5SjFZPQ==');
function App() {
  const cellSpacing = [5, 5];
  return (
    <div>
      <div className="control-section rounded-lg" style={{zIndex: 0, position: 'relative'}}>
        <DashboardLayoutComponent
          className="control-section"
          id="defaultLayout"
          cellSpacing={cellSpacing}
          allowResizing={true}
          columns={5}
        >
          <div
            id="one"
            className="e-panel"
            data-row="0"
            data-col="0"
            data-sizex="1"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">0</div>
            </div>
          </div>
          <div
            id="two"
            className="e-panel"
            data-row="1"
            data-col="0"
            data-sizex="1"
            data-sizey="2"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">1</div>
            </div>
          </div>
          <div
            id="three"
            className="e-panel"
            data-row="0"
            data-col="1"
            data-sizex="2"
            data-sizey="2"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">2</div>
            </div>
          </div>
          <div
            id="four"
            className="e-panel"
            data-row="2"
            data-col="1"
            data-sizex="1"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">3</div>
            </div>
          </div>
          <div
            id="five"
            className="e-panel"
            data-row="2"
            data-col="2"
            data-sizex="2"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">4</div>
            </div>
          </div>
          <div
            id="six"
            className="e-panel"
            data-row="0"
            data-col="3"
            data-sizex="1"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">5</div>
            </div>
          </div>
          <div
            id="seven"
            className="e-panel"
            data-row="1"
            data-col="3"
            data-sizex="1"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">6</div>
            </div>
          </div>
          <div
            id="eight"
            className="e-panel"
            data-row="0"
            data-col="4"
            data-sizex="1"
            data-sizey="3"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">7</div>
            </div>
          </div>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
}
export default App;
