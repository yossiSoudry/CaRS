import React, { useState } from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/contextProvider';
import { registerLicense } from '@syncfusion/ej2-base';
import { apiGet } from '../../services/services';
import { URL_CARS } from '../../data/constants';
import { useEffect } from 'react';

// Registering Syncfusion license key
registerLicense(
  'Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35WdkdiX3tacHdcQQ==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEVmWX1fdnBRRmVbUw==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXH9ccXJRQmBbU0Y=;MTA2NjkzMEAzMjMwMmUzNDJlMzBHYkxtdzhlc093aE1VdTRSR0JXSEh3Zm9mVGxnWlBsNmN6Yi9ZUnhLZ0xvPQ==;MTA2NjkzMUAzMjMwMmUzNDJlMzBqOWhnMTFDc0JFZHJCSFNDbE04UWRBb3lidWF0WnVUTk5HV09xRnYySTdnPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWXpecnVTQmRdUkd0;MTA2NjkzM0AzMjMwMmUzNDJlMzBCeXVNRE1QQTczaTNWOUdLUUl4dHlkK2tFS21sOCsrNFp2ZnhhUUZ5SjFZPQ==;MTA2NjkzNEAzMjMwMmUzNDJlMzBJSm43bEVxOEowdU05am9CZkFhRVBtTWlmR2RlMUlUZElYc3JWcVZLVC9nPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXH9ccXJRQmFVVkA=;MTA2NjkzNkAzMjMwMmUzNDJlMzBrZFBxY2VZZnlEZ041dk5aWnJBaWhIcXpZVDBxdU5wVUxiRUtqRzZjTFJVPQ==;MTA2NjkzN0AzMjMwMmUzNDJlMzBMWTA4dm1xbDVmbjBSbm9ZYnVpbEZNYUFwNFc0MGZCdTdVZ1ZmVndTQXhnPQ==;MTA2NjkzOEAzMjMwMmUzNDJlMzBCeXVNRE1QQTczaTNWOUdLUUl4dHlkK2tFS21sOCsrNFp2ZnhhUUZ5SjFZPQ=='
);

const Doughnut = ({ data }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      background={currentMode === 'dark' ? '#33373E' : '#fff'}
      enableRtl={true}
      id='pie-chart'
      ref={(pie) => (pie = pie)}
      legendSettings={{
        visible: true,
      }}
      enableSmartLabels={true}
      enableAnimation={true}
      tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName='x'
          yName='y'
          innerRadius='20%'
          dataLabel={{
            visible: true,
            position: 'Outside',
            name: 'x',
            font: {
              color: '#64748b',
              size: '16px',
            },
          }}
          radius='100%'
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

// registerLicense(
//   'Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35WdkdiX3tacHdcQQ==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEVmWX1fdnBRRmVbUw==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXH9ccXJRQmBbU0Y=;MTA2NjkzMEAzMjMwMmUzNDJlMzBHYkxtdzhlc093aE1VdTRSR0JXSEh3Zm9mVGxnWlBsNmN6Yi9ZUnhLZ0xvPQ==;MTA2NjkzMUAzMjMwMmUzNDJlMzBqOWhnMTFDc0JFZHJCSFNDbE04UWRBb3lidWF0WnVUTk5HV09xRnYySTdnPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWXpecnVTQmRdUkd0;MTA2NjkzM0AzMjMwMmUzNDJlMzBCeXVNRE1QQTczaTNWOUdLUUl4dHlkK2tFS21sOCsrNFp2ZnhhUUZ5SjFZPQ==;MTA2NjkzNEAzMjMwMmUzNDJlMzBJSm43bEVxOEowdU05am9CZkFhRVBtTWlmR2RlMUlUZElYc3JWcVZLVC9nPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXH9ccXJRQmFVVkA=;MTA2NjkzNkAzMjMwMmUzNDJlMzBrZFBxY2VZZnlEZ041dk5aWnJBaWhIcXpZVDBxdU5wVUxiRUtqRzZjTFJVPQ==;MTA2NjkzN0AzMjMwMmUzNDJlMzBMWTA4dm1xbDVmbjBSbm9ZYnVpbEZNYUFwNFc0MGZCdTdVZ1ZmVndTQXhnPQ==;MTA2NjkzOEAzMjMwMmUzNDJlMzBCeXVNRE1QQTczaTNWOUdLUUl4dHlkK2tFS21sOCsrNFp2ZnhhUUZ5SjFZPQ=='
// );

export default function Pie() {
  const [pie, setPie] = useState([]);
  const pieData = async () => {
    const getPieData = await apiGet(URL_CARS + '/graph')
    getPieData.map((s, i) => {
      s['x'] = s['_id']
      delete s['_id']
    })
    const newGetPieData = getPieData.sort((p1, p2) => (p1.y < p2.y) ? 1 : (p1.y > p2.y) ? -1 : 0)
    setPie( newGetPieData );
  };
  
  useEffect(() => {
    pieData();
  }, []);

  return (
    <>
      {pie.length > 0 &&
        <div className='m-4 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
          <div className='w-full'>
            <Doughnut id='chart-pie' data={pie} legendVisiblity height='full' />
          </div>
        </div>
      }
    </>
  );
}
