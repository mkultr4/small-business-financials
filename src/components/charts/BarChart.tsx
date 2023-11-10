import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ColumnChartProps {
    chartData: ApexOptions['series'];
    chartOptions: ApexOptions | undefined;
}

export default function BarChart({ chartData, chartOptions }: ColumnChartProps) {
    const [data, setData] = useState<ApexOptions['series']>([]);
    const [options, setOptions] = useState<ApexOptions | undefined>({});

    useEffect(() => {
        setData(chartData);
        setOptions(chartOptions);
    }, [chartData, chartOptions]);

    return (
        <Chart
            options={options}
            series={data}
            type='bar'
            width='100%'
            height='100%'
        />
    );
};


