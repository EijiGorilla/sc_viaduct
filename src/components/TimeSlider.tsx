import { timeSlider } from '../Scene';
import { viaductLayer } from '../layers';
import '../App.css';

const TimeSlider = (props: any) => {
  timeSlider.watch('timeExtent', (timeExtent: any) => {
    // Query and Filter
    const dateFilterExpression =
      "finish_plan <= date'" +
      timeExtent.end.getFullYear() +
      '-' +
      (timeExtent.end.getMonth() + 1) +
      '-' +
      timeExtent.end.getDate() +
      "'";
    const n01_query = "CP = 'S-01'" + ' AND ' + dateFilterExpression;
    const others_query = "CP = '" + props.contractp + "'" + ' AND ' + dateFilterExpression;

    viaductLayer.definitionExpression = props.contractp === 'S-01' ? n01_query : others_query;
  });

  return <></>;
};

export default TimeSlider;
