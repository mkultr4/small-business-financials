import { ApexOptions } from "apexcharts";
import { Series } from '../api/types';

// Total Spent Default
export const lineChartDataTotalSpent: Series[] = [
    {
        name: "Revenue",
        data: [50, 64, 48, 66, 49, 68],
    },
    {
        name: "Profit",
        data: [30, 40, 24, 46, 20, 46],
    },
];

export const lineChartOptionsTotalSpent: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 13,
            left: 0,
            blur: 10,
            opacity: 0.1,
            color: "#4318FF",
        },
    },
    colors: ["#4318FF", "#39B8FF"],
    markers: {
        size: 0,
        colors: "white",
        strokeColors: "#7551FF",
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        showNullDataPoints: true,
    },
    tooltip: {
        theme: "dark",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
        // type: "line",
    },
    xaxis: {
        type: "numeric",
        categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
        labels: {
            style: {
                colors: "#A3AED0",
                fontSize: "12px",
                fontWeight: "500",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    legend: {
        show: false,
    },
    grid: {
        show: false,

    },
};


export const barChartDataConsumption = [
    {
        name: "PRODUCT A",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    },
    {
        name: "PRODUCT B",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    },
    {
        name: "PRODUCT C",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    },
];

export const barChartOptionsConsumption: ApexOptions = {
    chart: {
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        style: {
            fontSize: "12px",
            fontFamily: undefined,
        },
        theme: "dark",
    },
    xaxis: {
        categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
        labels: {
            show: true,
            style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        // color: "black",
        labels: {
            show: false,
            style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
            },
        },
    },

    grid: {
        borderColor: "rgba(163, 174, 208, 0.3)",
        show: true,
        yaxis: {
            lines: {
                show: false,
                // opacity: 0.5,
            },
        },
        row: {
            opacity: 0.5,
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        type: "solid",
        colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
    },
    legend: {
        show: false,
    },
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: 15,
            borderRadiusWhenStacked: 'last',
            borderRadiusApplication: 'end'
        },
    },
};


export const barChartDataDailyTraffic = [
    {
        name: "Daily Traffic",
        data: [20, 30, 40, 20, 45, 50, 30],
    },
];

export const barChartOptionsDailyTraffic: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        style: {
            fontSize: "12px",
            fontFamily: undefined,
        },
        onDatasetHover: {
            // style: {
            //   fontSize: "12px",
            //   fontFamily: undefined,
            // },
        },
        theme: "dark",
    },
    xaxis: {
        categories: ["00", "04", "08", "12", "14", "16", "18"],
        labels: {
            show: true,
            style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        labels: {
            show: true,
            style: {
                colors: "#CBD5E0",
                fontSize: "14px",
            },
        },
    },
    grid: {
        show: false,
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "#4318FF",
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: "rgba(67, 24, 255, 1)",
                        opacity: 0.28,
                    },
                ],
            ],
        },
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 8,
            borderRadiusApplication: 'end',
            columnWidth: "10px",
        },
    },
};


export const pieChartOptions: ApexOptions = {
    labels: ["Your files", "System", "Empty"],
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    chart: {
        width: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    // hover: { mode: null },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    },
    tooltip: {
        enabled: true,
        theme: "dark",

    },
};

export const pieChartData = [63, 25, 12];