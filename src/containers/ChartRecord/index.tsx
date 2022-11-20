import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { useStyles } from './styles';

function usehooksHoc(Component: any) {
  return (props: any) => {
    const clases: any = useStyles();
    return <Component classes={clases} {...props} />
  }
}

const data = [
  {
    name: '6 月',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '7 月',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '8 月',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '9 月',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '10 月',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '11 月',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '12 月',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '1 月',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload }: any = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="center" fill="white">
          {payload.value}
        </text>
      </g>
    );
  }
}

class ChartRecord extends PureComponent {
  constructor(props: any) {
    super(props);

  }

  render() {
    const props: any = this.props;

    return (
      <div ref={props.charRecordRef} className={props.classes.container}>
        <div className={props.classes.wrapDateTime}>
          <p className={props.classes.styleLabel}>
            {"BODY RECORD"}
          </p>
          <p className={props.classes.styleTextDateTime}>
            {"2021.05.21"}
          </p>
        </div>
        <ResponsiveContainer width="100%" height={312}>
          <LineChart
            width={400}
            height={0}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 40,
              left: 40,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
            <Line strokeWidth={4} type="monotone" dataKey="uv" stroke="#FFCC21" fill="#FFCC21" />
            <Line strokeWidth={4} type="monotone" dataKey="pv" stroke="#8FE9D0" fill="#8FE9D0" />
          </LineChart>
        </ResponsiveContainer>
        <div className={props.classes.wrapBtn}>
          <button className={props.classes.styleBtn}>
            {"日"}
          </button>
          <div style={{ width: 5 }}></div>
          <button className={props.classes.styleBtn}>
            {"週"}
          </button>
          <div style={{ width: 5 }}></div>
          <button className={props.classes.styleBtn}>
            {"月"}
          </button>
          <div style={{ width: 5 }}></div>
          <button className={props.classes.styleBtnActive}>
            {"年"}
          </button>
        </div>
      </div>
    );
  }
}

export default usehooksHoc(ChartRecord);
