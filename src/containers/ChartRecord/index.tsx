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
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
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
      <div className={props.classes.container}>
        <div style={{ flex: 1, display: 'flex', margin: 5 }}>
          <p style={{ color: 'white', marginRight: 5 }}>
            {"BODY RECORD"}
          </p>
          <p style={{ color: 'white' }}>
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
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', padding: 20,}}>
          <button style={{width: 70, height: 30, backgroundColor: 'white', borderRadius: 15, color: 'rgb(255, 204, 56)', borderWidth: 0}}>
            button1
          </button>
          <div style={{width: 5}}></div>
          <button style={{width: 70, height: 30, backgroundColor: 'white', borderRadius: 15, color: 'rgb(255, 204, 56)', borderWidth: 0}}>
            button2
          </button>
          <div style={{width: 5}}></div>
          <button style={{width: 70, height: 30, backgroundColor: 'white', borderRadius: 15, color: 'rgb(255, 204, 56)', borderWidth: 0}}>
            button3
          </button>
          <div style={{width: 5}}></div>
          <button style={{width: 70, height: 30, backgroundColor: 'rgb(255, 204, 56)', borderRadius: 15, color: 'white', fontWeight: 'bold', borderWidth: 1,}}>
            button4
          </button>
        </div>
      </div>
    );
  }
}

export default usehooksHoc(ChartRecord);
