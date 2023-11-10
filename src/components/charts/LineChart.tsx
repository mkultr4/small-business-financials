
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
interface LineChartProps {
    chartData: ApexOptions['series'];
    chartOptions: ApexOptions | undefined;
}
export default function LineChart(props: LineChartProps): JSX.Element {
    const [data, setData] = useState<ApexOptions['series']>([]);
    const [options, setOptions] = useState<ApexOptions | undefined>({});

    useEffect(() => {
        setData(props.chartData);
        setOptions(props.chartOptions ? props.chartOptions : undefined);
    }, [props.chartData, props.chartOptions]);

    return (
        <ReactApexChart
            options={options}
            series={data}
            type='line'
            width='100%'
            height='100%'
        />
    );
};








