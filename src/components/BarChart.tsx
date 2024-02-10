import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

type BarChartProps = {
    data: { name: string; count: number }[];
    keys: string[];
    indexBy: string;
    margin?: { top: number; right: number; bottom: number; left: number };
    padding?: number;
    colors?: string[];
    axisBottom?: { tickSize?: number; tickPadding?: number };
    axisLeft?: { tickSize?: number; tickValues?: number; tickPadding?: number };
    gridYValues?: number;
    tooltipLabel?: (data: { id: string }) => string;
    enableLabel?: boolean;
    ariaLabel?: string;
};

function BarChart({ data, keys,colors, ...props }: BarChartProps) {
    return (
        <div {...props} className="w-full h-[200px]">
            <ResponsiveBar
                data={data}
                keys={keys}
                indexBy="name"
                margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
                padding={0.3}
                colors={colors}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 4,
                    tickPadding: 16,
                }}
                gridYValues={4}
                theme={{
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                    grid: {
                        line: {
                            stroke: "#f3f4f6",
                        },
                    },
                }}
                tooltipLabel={({ id }) => `${id}`}
                enableLabel={false}
                role="application"
                ariaLabel="A bar chart showing data"
            />
        </div>
    );
}

export default BarChart;
