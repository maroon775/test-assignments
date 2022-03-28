import React, {useEffect} from "react";
import styles from "./Bar.module.scss";
import useDemoConfig from "../../hooks/useDemoConfig";
import {AxisOptions, Chart} from "react-charts";

interface AreaProps {
    title: string
}

const Bar:React.FC<AreaProps> = (props) => {
    const {data} = useDemoConfig({
        series: 3,
        primaryStart: 1,
        datums: 160,
        dataType: "ordinal"
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
                min: 1,
                getValue: (datum,...args) => {
                    // console.log(datum);
                    return datum.secondary;
                },
                stacked: true,
            }
        ],
        []
    );

    useEffect(() => {
        console.log(data)
    },[])

    return (
        <>
            <div className={styles.box}>
                <header className={styles.title}>
                    {props.title}
                </header>
                <div className={styles.chart}>
                    <Chart
                        options={{
                            padding: {
                                top: 24,
                                right: 24,
                                bottom: 24,
                                left: 24,
                            },
                            getSeriesStyle: (series)=>{
                                return {
                                    rx: '6',
                                    ry: '6',
                                    stroke: (['#30D4C1','#2DB574','#FFA318'])[series.index],
                                    fill: (['#30D4C1','#2DB574','#FFA318'])[series.index]
                                }
                            },
                            tooltip: false,
                            dark: true,
                            data,
                            primaryAxis,
                            secondaryAxes,
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default Bar;
