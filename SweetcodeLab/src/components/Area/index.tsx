import React, {useEffect} from "react";
import styles from "./Area.module.scss";
import useDemoConfig from "../../hooks/useDemoConfig";
import {AxisOptions, Chart} from "react-charts";

interface AreaProps {
    title: string
}

const Area:React.FC<AreaProps> = (props) => {
    const {data} = useDemoConfig({
        series: 3,
        primaryStart: 1,
        elementType: "area",
        datums: 16,
        primaryAxisType: "linear",
        secondaryAxisType: "linear",
        dataType: "linear"
    });

    const primaryAxis = React.useMemo<AxisOptions<typeof data[number]['data'][number]>>(
        () => ({
            min: 1,
            showGrid: false,
            getValue: (datum) => datum.primary
        }),
        []
    );

    const secondaryAxes = React.useMemo<AxisOptions<typeof data[number]['data'][number]>[]>(
        () => [
            {
                getValue: (datum) => datum.secondary,
                elementType: "area",
            }
        ],
        []
    );
    return (
        <>
            <div className={styles.box}>
                <header className={styles.title}>
                    {props.title}
                </header>
                <div className={styles.chart}>
                    <Chart
                        options={{
                            getSeriesStyle: (series, status) => {
                                return {
                                    area: {
                                        fill: `url(#gradient${series.index})`
                                    },
                                    line: {
                                        stroke: (['#BA23D2', '#31D223', '#23AED2'])[series.index],
                                    }
                                };
                            },
                            renderSVG: () => (
                                <defs>
                                    <linearGradient id="gradient2" x1="0" x2="0" y1="0%" y2="200%"
                                                    gradientUnits='userSpaceOnUse' spreadMethod="pad">
                                        <stop offset="-42.91%" stopColor="#31D8BF" stopOpacity={1}/>
                                        <stop offset="-14.33%" stopColor="#2ECFC3" stopOpacity={1}/>
                                        <stop offset="69.65%" stopColor="rgba(9, 101, 241, 0)" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="gradient1" x1="0" x2="0" y1="0%" y2="200%"
                                                    gradientUnits='userSpaceOnUse' spreadMethod="pad">
                                        <stop offset="-64.49%" stopColor="#31D223"/>
                                        <stop offset="-31.59%" stopColor="#31D223"/>
                                        <stop offset="65.06%" stopColor="rgba(49, 210, 35, 0)"/>
                                    </linearGradient>
                                    <linearGradient id="gradient0" x1="0" x2="0" y1="0%" y2="200%"
                                                    gradientUnits='userSpaceOnUse' spreadMethod="pad">
                                        <stop offset="-73.33%" stopColor="#BA23D2"/>
                                        <stop offset="-38.67%" stopColor="#BA23D2"/>
                                        <stop offset="63.19%" stopColor="rgba(186, 35, 210, 0)"/>
                                    </linearGradient>
                                </defs>
                            ),
                            padding: {
                                top: 24,
                                right: 24,
                                bottom: 24,
                                left: 24,
                            },
                            tooltip: false,
                            dark: true,
                            data,
                            primaryAxis,
                            secondaryAxes,

                            // data: AreaData
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default Area;
