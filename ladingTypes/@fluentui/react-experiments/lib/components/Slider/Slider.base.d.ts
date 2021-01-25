import * as React from 'react';
import { ISliderProps, ISlider } from './Slider.types';
export interface ISliderState {
    value?: number;
    renderedValue?: number;
}
export declare const ONKEYDOWN_TIMEOUT_DURATION = 1000;
export declare class SliderBase extends React.Component<ISliderProps, ISliderState> implements ISlider {
    static defaultProps: ISliderProps;
    private _sliderLine;
    private _thumb;
    private _id;
    private _onKeyDownTimer;
    private _hostId;
    private _buttonId;
    private _async;
    private _events;
    constructor(props: ISliderProps);
    componentWillUnmount(): void;
    render(): React.ReactElement<{}>;
    focus(): void;
    get value(): number | undefined;
    private _getValueLabel;
    private get renderedValue();
    private _getAriaValueText;
    private _getStyleUsingOffsetPercent;
    private _onMouseDownOrTouchStart;
    private _onMouseMoveOrTouchMove;
    private _getPosition;
    private _addLabels;
    private _addTickmarks;
    private _updateValue;
    private _onMouseUpOrTouchEnd;
    private _onKeyDown;
    private _clearOnKeyDownTimer;
    private _setOnKeyDownTimer;
}
