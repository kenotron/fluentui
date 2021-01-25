import * as React from 'react';
import { ScaleTime } from 'd3-scale';
import { IEventsAnnotationProps } from '../LineChart.types';
interface IEventsAnnotationExtendProps extends IEventsAnnotationProps {
    scale: ScaleTime<number, number>;
    chartYBottom: number;
    chartYTop: number;
}
export declare const EventsAnnotation: React.FunctionComponent<IEventsAnnotationExtendProps>;
export {};
