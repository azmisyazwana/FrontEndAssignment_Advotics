import React from 'react'
// import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

// import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import '../../pages/Dashboard.css'

const Chart = ({width, height}) => {
    const data = [
        { x: '2005', y: 1.2, y1: 0.5, y2: 0.7, y3: -0.8, y4: 1.5 },
        { x: '2006', y: 1, y1: 0.5, y2: 1.4, y3: 0, y4: 2.3 },
        { x: '2007', y: 1, y1: 0.5, y2: 1.5, y3: -1, y4: 2 },
        { x: '2008', y: 0.25, y1: 0.35, y2: 0.35, y3: -.35, y4: 0.1 },
        { x: '2009', y: 0.1, y1: 0.9, y2: -2.7, y3: -0.3, y4: -2.7 },
        { x: '2010', y: 1, y1: 0.5, y2: 0.5, y3: -0.5, y4: 1.8 },
        { x: '2011', y: 0.1, y1: 0.25, y2: 0.25, y3: 0, y4: 2 },
    ];
    const primaryxAxis = { title: 'Years', interval: 1, labelIntersectAction: 'Rotate45', valueType: 'Category' };
    const primaryyAxis = { title: 'Growth', minimum: -3, maximum: 3, interval: 1 };
    const marker = { visible: true, width: 10, opacity: 1, height: 10 };
    const tooltip = { enable: true }
    const background = {background: 'red'}
//   return (
//     <ChartComponent width={width} height={height} id='charts' primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} chartArea={{border: {width: 0}}} tooltip={{enable: true}} legendSettings={{background: 'white'}}>
//         <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
//         <SeriesCollectionDirective>
//             {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
//         </SeriesCollectionDirective>
//     </ChartComponent>
//   )
return <ChartComponent id='charts' tooltip={tooltip} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} width={width} height={height}>
      <Inject services={[StackingColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} fill="#37B04C" xName='x' yName='y' name='Nett' type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} fill="#289E45" xName='x' yName='y1' name='Gross' type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} fill="#7AE28C" xName='x' yName='y2' name='Average Purchase Value' type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} fill="yellow" xName='x' yName='y4' name='Unit per Transaction' type='Line' opacity={1} marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}

export default Chart
