import { DateRangeType } from '@fluentui/date-time-utilities';
import { DayOfWeek } from '@fluentui/date-time-utilities';
import { FirstWeekOfYear } from '@fluentui/date-time-utilities';
import { IBaseProps } from '@fluentui/utilities';
import { ICalendarStrings } from '@fluentui/date-time-utilities';
import { ICalloutProps } from '@fluentui/react-internal/lib/Callout';
import { IComponentAs } from '@fluentui/utilities';
import { IDateFormatting } from '@fluentui/date-time-utilities';
import { IDayGridOptions } from '@fluentui/date-time-utilities';
import { IProcessedStyleSet } from '@fluentui/style-utilities';
import { IRefObject } from '@fluentui/utilities';
import { IStyle } from '@fluentui/style-utilities';
import { IStyleFunctionOrObject } from '@fluentui/utilities';
import { ITextFieldProps } from '@fluentui/react-internal/lib/TextField';
import { ITheme } from '@fluentui/style-utilities';
import * as React from 'react';

/**
 * {@docCategory Calendar}
 */
export declare enum AnimationDirection {
    /**
     * Grid will transition out and in horizontally
     */
    Horizontal = 0,
    /**
     * Grid will transition out and in vertically
     */
    Vertical = 1
}

export declare const Calendar: React.FunctionComponent<ICalendarProps>;

export declare const DatePicker: React.FunctionComponent<IDatePickerProps>;

export declare const DatePickerBase: React.FunctionComponent<IDatePickerProps>;
export { DateRangeType }
export { DayOfWeek }

export declare const defaultCalendarNavigationIcons: ICalendarNavigationIcons;

export declare const defaultCalendarStrings: ICalendarStrings;

export declare const defaultDatePickerStrings: IDatePickerStrings;

/**
 * @deprecated Use `defaultCalendarStrings`
 */
export declare const defaultDayPickerStrings: ICalendarStrings;

export declare const defaultWeeklyDayPickerNavigationIcons: IWeeklyDayPickerNavigationIcons;

export declare const defaultWeeklyDayPickerStrings: IWeeklyDayPickerStrings;
export { FirstWeekOfYear }

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendar {
    /** Sets focus to the selected date. */
    focus: () => void;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarDay {
    focus(): void;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarDayGrid {
    focus(): void;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarDayGridProps extends IDayGridOptions, IBaseProps<ICalendarDayGrid> {
    /**
     * Optional callback to access the ICalendarDayGrid interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ICalendarDayGrid>;
    /**
     * Customized styles for the component.
     */
    styles?: IStyleFunctionOrObject<ICalendarDayGridStyleProps, ICalendarDayGridStyles>;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Additional CSS class(es) to apply to the CalendarDayGrid.
     */
    className?: string;
    /**
     * Localized strings to use in the CalendarDayGrid
     */
    strings: ICalendarStrings;
    /**
     * The currently selected date
     */
    selectedDate: Date;
    /**
     * The currently navigated date
     */
    navigatedDate: Date;
    /**
     * Callback issued when a date is selected
     * @param date - The date the user selected
     * @param selectedDateRangeArray - The resultant list of dates that are selected based on the date range type set
     * for the component.
     */
    onSelectDate?: (date: Date, selectedDateRangeArray?: Date[]) => void;
    /**
     * Callback issued when a date in the calendar is navigated
     * @param date - The date that is navigated to
     * @param focusOnNavigatedDay - Whether to set the focus to the navigated date.
     */
    onNavigateDate: (date: Date, focusOnNavigatedDay: boolean) => void;
    /**
     * Callback issued when calendar day is closed
     */
    onDismiss?: () => void;
    /**
     * The first day of the week for your locale.
     * @defaultvalue DayOfWeek.Sunday
     */
    firstDayOfWeek: DayOfWeek;
    /**
     * Defines when the first week of the year should start, FirstWeekOfYear.FirstDay,
     * FirstWeekOfYear.FirstFullWeek or FirstWeekOfYear.FirstFourDayWeek are the possible values
     * @defaultvalue FirstWeekOfYear.FirstDay
     */
    firstWeekOfYear: FirstWeekOfYear;
    /**
     * The date range type indicating how  many days should be selected as the user
     * selects days
     * @defaultValue DateRangeType.Day
     */
    dateRangeType: DateRangeType;
    /**
     * The number of days to select while dateRangeType === DateRangeType.Day. Used in order to have multi-day
     * views.
     * @defaultValue 1
     */
    daysToSelectInDayView?: number;
    /**
     * Value of today. If unspecified, current time in client machine will be used.
     */
    today?: Date;
    /**
     * Whether the calendar should show the week number (weeks 1 to 53) before each week row
     * @defaultvalue false
     */
    showWeekNumbers?: boolean;
    /**
     * Apply additional formating to dates, for example localized date formatting.
     */
    dateTimeFormatter: IDateFormatting;
    /**
     * Ref callback for individual days. Allows for customization of the styling, properties, or listeners of the
     * specific day.
     */
    customDayCellRef?: (element: HTMLElement, date: Date, classNames: IProcessedStyleSet<ICalendarDayGridStyles>) => void;
    /**
     * How many weeks to show by default. If not provided, will show enough weeks to display the current
     * month, between 4 and 6 depending
     * @defaultvalue undefined
     */
    weeksToShow?: number;
    /**
     * If set the Calendar will not allow navigation to or selection of a date earlier than this value.
     */
    minDate?: Date;
    /**
     * If set the Calendar will not allow navigation to or selection of a date later than this value.
     */
    maxDate?: Date;
    /**
     * If set the Calendar will not allow selection of dates in this array.
     */
    restrictedDates?: Date[];
    /**
     * The days that are selectable when `dateRangeType` is WorkWeek.
     * If `dateRangeType` is not WorkWeek this property does nothing.
     * @defaultvalue [Monday,Tuesday,Wednesday,Thursday,Friday]
     */
    workWeekDays?: DayOfWeek[];
    /**
     * Whether the close button should be shown or not
     * @defaultvalue false
     */
    showCloseButton?: boolean;
    /**
     * Allows all dates and buttons to be focused, including disabled ones
     * @defaultvalue false
     */
    allFocusable?: boolean;
    /**
     * The ID of the control that labels this one
     */
    labelledBy?: string;
    /**
     * Whether to show days outside the selected month with lighter styles
     * @defaultvalue true
     */
    lightenDaysOutsideNavigatedMonth?: boolean;
    /**
     * The cardinal directions for animation to occur during transitions, either horizontal or veritcal
     */
    animationDirection?: AnimationDirection;
    /**
     * Optional callback function to mark specific days with a small symbol. Fires when the date range changes,
     * gives the starting and ending displayed dates and expects the list of which days in between should be
     * marked.
     */
    getMarkedDays?: (startingDate: Date, endingDate: Date) => Date[];
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarDayGridStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * The date range type
     */
    dateRangeType?: DateRangeType;
    /**
     * Whether week numbers are being shown
     */
    showWeekNumbers?: boolean;
    /**
     * Whether to show days outside the selected month with lighter styles
     */
    lightenDaysOutsideNavigatedMonth?: boolean;
    /**
     * Whether grid entering animation should be forwards or backwards
     */
    animateBackwards?: boolean;
    /**
     * The cardinal directions for animation to occur during transitions, either horizontal or veritcal
     */
    animationDirection?: AnimationDirection;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarDayGridStyles {
    /**
     * The style for the root div
     */
    wrapper?: IStyle;
    /**
     * The style for the table containing the grid
     */
    table?: IStyle;
    /**
     * The style to apply to the grid cells for days
     */
    dayCell?: IStyle;
    /**
     * The style to apply to grid cells for days in the selected range
     */
    daySelected?: IStyle;
    /**
     * The style to apply to row around weeks
     */
    weekRow?: IStyle;
    /**
     * The style to apply to the column headers above the weeks
     */
    weekDayLabelCell?: IStyle;
    /**
     * The style to apply to grid cells for week numbers
     */
    weekNumberCell?: IStyle;
    /**
     * The style to apply to individual days that are outside the min/max date range
     */
    dayOutsideBounds?: IStyle;
    /**
     * The style to apply to individual days that are outside the current month
     */
    dayOutsideNavigatedMonth?: IStyle;
    /**
     * The style to apply to the button element within the day cells
     */
    dayButton?: IStyle;
    /**
     * The style to apply to the individual button element that matches the "today" parameter
     */
    dayIsToday?: IStyle;
    /**
     * The style applied to the first placeholder week used during transitions
     */
    firstTransitionWeek?: IStyle;
    /**
     * The style applied to the last placeholder week used during transitions
     */
    lastTransitionWeek?: IStyle;
    /**
     * The style applied to the marker on days to mark as important
     */
    dayMarker?: IStyle;
    /**
     * The styles to apply to days for rounded corners. Can apply multiple to round multiple corners
     */
    topRightCornerDate?: IStyle;
    topLeftCornerDate?: IStyle;
    bottomRightCornerDate?: IStyle;
    bottomLeftCornerDate?: IStyle;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarDayProps extends IBaseProps<ICalendarDay>, ICalendarDayGridProps {
    /**
     * Optional callback to access the ICalendarDay interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ICalendarDay>;
    /**
     * Customized styles for the calendar day component
     */
    styles?: IStyleFunctionOrObject<ICalendarDayStyleProps, ICalendarDayStyles>;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Additional CSS class(es) to apply to the CalendarDay.
     */
    className?: string;
    /**
     * Localized strings to use in the Calendar
     */
    strings: ICalendarStrings;
    /**
     * The currently navigated date
     */
    navigatedDate: Date;
    /**
     * Callback issued when a date in the calendar is navigated
     * @param date - The date that is navigated to
     * @param focusOnNavigatedDay - Whether to set the focus to the navigated date.
     */
    onNavigateDate: (date: Date, focusOnNavigatedDay: boolean) => void;
    /**
     * Callback issued when calendar day is closed
     */
    onDismiss?: () => void;
    /**
     * Custom navigation icons.
     */
    navigationIcons: ICalendarNavigationIcons;
    /**
     * Callback function when the header is selected
     */
    onHeaderSelect?: () => void;
    /**
     * Whether the calendar should show the week number (weeks 1 to 53) before each week row
     * @defaultvalue false
     */
    showWeekNumbers?: boolean;
    /**
     * Apply additional formating to dates, for example localized date formatting.
     */
    dateTimeFormatter: IDateFormatting;
    /**
     * Whether the calendar should show 6 weeks by default.
     * @defaultvalue false
     */
    showSixWeeksByDefault?: boolean;
    /**
     * If set the Calendar will not allow navigation to or selection of a date earlier than this value.
     */
    minDate?: Date;
    /**
     * If set the Calendar will not allow navigation to or selection of a date later than this value.
     */
    maxDate?: Date;
    /**
     * If set the Calendar will not allow selection of dates in this array.
     */
    restrictedDates?: Date[];
    /**
     * Whether the close button should be shown or not
     * @defaultvalue false
     */
    showCloseButton?: boolean;
    /**
     * Allows all dates and buttons to be focused, including disabled ones
     * @defaultvalue false
     */
    allFocusable?: boolean;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarDayStyleProps extends ICalendarDayGridStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * Whether the header is clickable
     */
    headerIsClickable?: boolean;
    /**
     * Whether week numbers are being shown
     */
    showWeekNumbers?: boolean;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarDayStyles extends Partial<ICalendarDayGridStyles> {
    /**
     * Style for the root element.
     */
    root: IStyle;
    /**
     * The style for the header button and forward/back navigation button container
     */
    header: IStyle;
    /**
     * The style for the title text inside the header
     */
    monthAndYear: IStyle;
    /**
     * The style for the wrapper around forward/back/close buttons
     */
    monthComponents: IStyle;
    /**
     * The style for the forward/back/close buttons
     */
    headerIconButton: IStyle;
    /**
     * The style to apply for disabled elements
     */
    disabledStyle: IStyle;
}

/**
 * @deprecated Use `IDateFormatting`
 */
export declare type ICalendarFormatDateCallbacks = IDateFormatting;

/**
 * @deprecated Use `ICalendarNavigationIcons`
 */
export declare type ICalendarIconStrings = ICalendarNavigationIcons;

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarMonth {
    focus(): void;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarMonthProps extends IBaseProps<ICalendarMonth> {
    /**
     * Optional callback to access the ICalendarMonth interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ICalendarMonth>;
    /**
     * Customized styles for the calendar month component
     */
    styles?: IStyleFunctionOrObject<ICalendarMonthStyleProps, ICalendarMonthStyles>;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Localized strings to use in the Calendar
     */
    strings: ICalendarStrings;
    /**
     * The currently selected date
     */
    selectedDate: Date;
    /**
     * The currently navigated date
     */
    navigatedDate: Date;
    /**
     * Callback issued when a month is selected
     * @param date - The date the user selected
     * @param selectedDateRangeArray - The resultant list of dates that are selected based on the date range type set
     * for the component.
     */
    onSelectDate?: (date: Date, selectedDateRangeArray?: Date[]) => void;
    /**
     * Callback issued when the year is navigated
     * @param date - The date that is navigated to
     * @param focusOnNavigatedDay - Whether to set the focus to the navigated date.
     */
    onNavigateDate: (date: Date, focusOnNavigatedDay: boolean) => void;
    /**
     * Custom navigation icons.
     */
    navigationIcons?: ICalendarNavigationIcons;
    /**
     * Value of today. If unspecified, current time in client machine will be used.
     */
    today?: Date;
    /**
     * Callback function when the header is selected
     */
    onHeaderSelect?: () => void;
    /**
     * Apply additional formating to dates, for example localized date formatting.
     */
    dateTimeFormatter?: IDateFormatting;
    /**
     * If set the Calendar will not allow navigation to or selection of a date earlier than this value.
     */
    minDate?: Date;
    /**
     * If set the Calendar will not allow navigation to or selection of a date later than this value.
     */
    maxDate?: Date;
    /**
     * Whether the month picker should highlight the current month
     * @defaultvalue false
     */
    highlightCurrentMonth?: boolean;
    /**
     * Whether the month picker should highlight the selected month
     * @defaultvalue false
     */
    highlightSelectedMonth?: boolean;
    /**
     * Allows all dates and buttons to be focused, including disabled ones
     * @defaultvalue false
     */
    allFocusable?: boolean;
    /**
     * Additional CSS class(es) to apply to the CalendarMonth.
     */
    className?: string;
    /**
     * Whether the year picker is hidden
     * @defaultvalue false
     */
    yearPickerHidden?: boolean;
    /**
     * The cardinal directions for animation to occur during transitions, either horizontal or veritcal
     */
    animationDirection?: AnimationDirection;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarMonthStyleProps extends ICalendarPickerStyleProps {
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarMonthStyles extends ICalendarPickerStyles {
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarNavigationIcons {
    /**
     * FabricMDL2Icons name for the left navigation icon.  Previous default: ChevronLeft.
     * @defaultvalue  'Up'
     */
    leftNavigation?: string;
    /**
     * FabricMDL2Icons name for the right navigation icon.  Previous default: ChevronRight.
     * @defaultvalue  'Down'
     */
    rightNavigation?: string;
    /**
     * Close icon
     * @defaultvalue  'CalculatorMultiply'
     */
    closeIcon?: string;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarPickerStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * Whether the header can be clicked
     */
    hasHeaderClickCallback?: boolean;
    /**
     * Whether the picker should highlight the current item
     */
    highlightCurrent?: boolean;
    /**
     * Whether the picker should highlight the selected item
     */
    highlightSelected?: boolean;
    /**
     * The cardinal directions for animation to occur during transitions, either horizontal or veritcal
     */
    animationDirection?: AnimationDirection;
    /**
     * Whether grid entering animation should be forwards or backwards
     */
    animateBackwards?: boolean;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarPickerStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    headerContainer: IStyle;
    currentItemButton: IStyle;
    navigationButtonsContainer: IStyle;
    navigationButton: IStyle;
    gridContainer: IStyle;
    buttonRow: IStyle;
    itemButton: IStyle;
    current: IStyle;
    selected: IStyle;
    disabled: IStyle;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarProps extends IBaseProps<ICalendar>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the ICalendar interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ICalendar>;
    /**
     * Customized styles for the calendar component
     */
    styles?: IStyleFunctionOrObject<ICalendarStyleProps, ICalendarStyles>;
    /**
     * Customized props for the calendar day
     */
    calendarDayProps?: Partial<ICalendarDayProps>;
    /**
     * Customized props for the calendar month
     */
    calendarMonthProps?: Partial<ICalendarMonthProps>;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Optional class name to add to the root element.
     */
    className?: string;
    /**
     * Callback for when a date is selected
     * @param date - The date the user selected
     * @param selectedDateRangeArray - The resultant list of dates that are selected based on the date range type set
     * for the component.
     */
    onSelectDate?: (date: Date, selectedDateRangeArray?: Date[]) => void;
    /**
     * Callback for when calendar is closed
     */
    onDismiss?: () => void;
    /**
     * Default value of the Calendar, if any
     */
    value?: Date;
    /**
     * Value of today. If unspecified, current time in client machine will be used.
     */
    today?: Date;
    /**
     * The date range type indicating how  many days should be selected as the user
     * selects days
     * @defaultValue DateRangeType.Day
     */
    dateRangeType?: DateRangeType;
    /**
     * The first day of the week for your locale.
     * @defaultvalue DayOfWeek.Sunday
     */
    firstDayOfWeek?: DayOfWeek;
    /**
     * Defines when the first week of the year should start.
     * @defaultvalue FirstWeekOfYear.FirstDay
     */
    firstWeekOfYear?: FirstWeekOfYear;
    /**
     * Whether the month picker is shown beside the day picker or hidden.
     * @defaultvalue true
     */
    isMonthPickerVisible?: boolean;
    /**
     * Whether the day picker is shown beside the month picker or hidden.
     * @defaultvalue true
     */
    isDayPickerVisible?: boolean;
    /**
     * Show month picker on top of date picker when visible.
     * @defaultvalue false
     */
    showMonthPickerAsOverlay?: boolean;
    /**
     * Whether the "Go to today" link should be shown or not
     */
    showGoToToday?: boolean;
    /**
     * Whether the calendar should show the week number (weeks 1 to 53) before each week row
     * @defaultvalue false
     */
    showWeekNumbers?: boolean;
    /**
     * Localized strings to use in the Calendar
     */
    strings?: ICalendarStrings;
    /**
     * Custom navigation icons.
     */
    navigationIcons?: ICalendarNavigationIcons;
    /**
     * Apply additional formating to dates, for example localized date formatting.
     */
    dateTimeFormatter?: IDateFormatting;
    /**
     * If set the Calendar will not allow navigation to or selection of a date earlier than this value.
     */
    minDate?: Date;
    /**
     * If set the Calendar will not allow navigation to or selection of a date later than this value.
     */
    maxDate?: Date;
    /**
     * If set the Calendar will not allow selection of dates in this array.
     */
    restrictedDates?: Date[];
    /**
     * Whether the calendar should show 6 weeks by default.
     * @defaultvalue false
     */
    showSixWeeksByDefault?: boolean;
    /**
     * The days that are selectable when `dateRangeType` is `WorkWeek`.
     * If `dateRangeType` is not `WorkWeek` this property does nothing.
     * @defaultvalue [Monday,Tuesday,Wednesday,Thursday,Friday]
     */
    workWeekDays?: DayOfWeek[];
    /**
     * Whether the month picker should highlight the current month
     * @defaultvalue false
     */
    highlightCurrentMonth?: boolean;
    /**
     * Whether the month picker should highlight the selected month
     * @defaultvalue false
     */
    highlightSelectedMonth?: boolean;
    /**
     * Whether the close button should be shown or not
     * @defaultvalue false
     */
    showCloseButton?: boolean;
    /**
     * Allows all dates and buttons to be focused, including disabled ones
     * @defaultvalue false
     */
    allFocusable?: boolean;
}
export { ICalendarStrings }

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarStyleProps {
    /**
     * Theme provided by higher-order component.
     */
    theme: ITheme;
    /**
     * Custom CSS class for the calendar.
     */
    className?: string;
    /**
     * Whether the month picker is visible
     */
    isMonthPickerVisible?: boolean;
    /**
     * Whether the day picker is visible
     */
    isDayPickerVisible?: boolean;
    /**
     * Whether only month picker is shown
     */
    monthPickerOnly?: boolean;
    /**
     * Whether the month picker is overlaid on the day picker
     */
    showMonthPickerAsOverlay?: boolean;
    /**
     * @deprecated Use `overlaidWithButton`
     */
    overlayedWithButton?: boolean;
    /**
     * Whether the month and day picker are overlaid and the 'go to today' button is shown
     */
    overlaidWithButton?: boolean;
    /**
     * Whether the go to today button is shown
     */
    showGoToToday?: boolean;
    /**
     * Whether the week numbers are shown
     */
    showWeekNumbers?: boolean;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    divider: IStyle;
    goTodayButton: IStyle;
    monthPickerWrapper: IStyle;
    liveRegion: IStyle;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarYear {
    focus(): void;
}

export declare interface ICalendarYearHeaderProps extends ICalendarYearProps, ICalendarYearRange {
    /**
     * Callback action when the 'previous' navigation button is selected
     */
    onSelectPrev?: () => void;
    /**
     * Callback action when the 'next' navigation button is selected
     */
    onSelectNext?: () => void;
    /**
     * Whether title entering animation should be forwards or backwards
     */
    animateBackwards?: boolean;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarYearProps extends IBaseProps<ICalendarYear> {
    /**
     * Optional callback to access the ICalendarYear interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ICalendarYear>;
    /**
     * Customized styles for the calendar month component
     */
    styles?: IStyleFunctionOrObject<ICalendarYearStyleProps, ICalendarYearStyles>;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Localized strings to use in the Calendar
     */
    strings?: ICalendarYearStrings;
    /**
     * The currently selected year
     */
    selectedYear?: number;
    /**
     * The currently navigated year
     */
    navigatedYear?: number;
    /**
     * Callback action when a year is selected
     * @param year - The year the user selected
     */
    onSelectYear?: (year: number) => void;
    /**
     * Custom navigation icons.
     */
    navigationIcons?: ICalendarNavigationIcons;
    /**
     * Callback action when the header is selected
     */
    onHeaderSelect?: (focus: boolean) => void;
    /**
     * If set the Calendar will not allow navigation to or selection of a year earlier than this value.
     */
    minYear?: number;
    /**
     * If set the Calendar will not allow navigation to or selection of a year later than this value.
     */
    maxYear?: number;
    /**
     * Whether the year picker should highlight the current year
     * @defaultvalue false
     */
    highlightCurrentYear?: boolean;
    /**
     * Whether the year picker should highlight the selected year
     * @defaultvalue false
     */
    highlightSelectedYear?: boolean;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * Custom renderer for the title
     */
    onRenderTitle?: (props: ICalendarYearHeaderProps) => React.ReactNode;
    /**
     * Custom renderer for the year
     */
    onRenderYear?: (year: number) => React.ReactNode;
    /**
     * The cardinal directions for animation to occur during transitions, either horizontal or veritcal
     */
    animationDirection?: AnimationDirection;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarYearRange {
    fromYear: number;
    toYear: number;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarYearRangeToString {
    (range: ICalendarYearRange): string;
}

/**
 * {@docCategory Calendar}
 */
export declare interface ICalendarYearStrings {
    rangeAriaLabel?: string | ICalendarYearRangeToString;
    prevRangeAriaLabel?: string | ICalendarYearRangeToString;
    nextRangeAriaLabel?: string | ICalendarYearRangeToString;
    headerAriaLabelFormatString?: string;
}

export declare interface ICalendarYearStyleProps extends ICalendarPickerStyleProps {
}

export declare interface ICalendarYearStyles extends ICalendarPickerStyles {
}
export { IDateFormatting }

/**
 * {@docCategory DatePicker}
 */
export declare interface IDatePicker {
    /** Sets focus to the text field */
    focus(): void;
    /** Reset the state of the picker to the default */
    reset(): void;
    /** Open the datepicker callout */
    showDatePickerPopup(): void;
}

/**
 * {@docCategory DatePicker}
 */
export declare interface IDatePickerProps extends IBaseProps<IDatePicker>, React.HTMLAttributes<HTMLElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IDatePicker interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IDatePicker>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IDatePickerStyleProps, IDatePickerStyles>;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Pass callout props to callout component
     */
    calloutProps?: ICalloutProps;
    /**
     * Pass calendar props to calendar component
     */
    calendarProps?: ICalendarProps;
    /**
     * Pass textField props to textField component.
     * Prop name is "textField" for compatiblity with upcoming slots work.
     */
    textField?: ITextFieldProps;
    /**
     * Custom Calendar to be used for date picking
     */
    calendarAs?: IComponentAs<ICalendarProps>;
    /**
     * Callback issued when a date is selected
     */
    onSelectDate?: (date: Date | null | undefined) => void;
    /**
     * Label for the DatePicker
     */
    label?: string;
    /**
     * Whether the DatePicker is a required field or not
     * @defaultvalue false
     */
    isRequired?: boolean;
    /**
     * Disabled state of the DatePicker.
     * @defaultvalue false
     */
    disabled?: boolean;
    /**
     * Aria Label for TextField of the DatePicker for screen reader users.
     */
    ariaLabel?: string;
    /**
     * Whether or not the Textfield of the DatePicker is underlined.
     * @defaultvalue false
     */
    underlined?: boolean;
    /**
     * Aria label for date picker popup for screen reader users.
     * @defaultvalue Calendar
     */
    pickerAriaLabel?: string;
    /**
     * Whether the month picker is shown beside the day picker or hidden.
     * @defaultvalue true
     */
    isMonthPickerVisible?: boolean;
    /**
     * Show month picker on top of date picker when visible.
     * @defaultvalue false
     */
    showMonthPickerAsOverlay?: boolean;
    /**
     * Whether the DatePicker allows input a date string directly or not
     * @defaultvalue false
     */
    allowTextInput?: boolean;
    /**
     * Whether the DatePicker should open automatically when the control is focused
     * @defaultvalue false
     */
    disableAutoFocus?: boolean;
    /**
     * Placeholder text for the DatePicker
     */
    placeholder?: string;
    /**
     * Value of today. If unspecified, current time in client machine will be used.
     */
    today?: Date;
    /**
     * Default value of the DatePicker, if any
     */
    value?: Date;
    /**
     * Optional method to format the chosen date to a string to display in the DatePicker
     * @defaultvalue date.toString()
     */
    formatDate?: (date?: Date) => string;
    /**
     * Optional method to parse the text input value to date, it is only useful when allowTextInput is set to true
     * @defaultvalue new Date(Date.parse(dateStr))
     */
    parseDateFromString?: (dateStr: string) => Date | null;
    /**
     * The first day of the week for your locale.
     * @defaultvalue DayOfWeek.Sunday
     */
    firstDayOfWeek?: DayOfWeek;
    /**
     * Localized strings to use in the DatePicker
     */
    strings?: IDatePickerStrings;
    /**
     * Whether the month picker should highlight the current month
     * @defaultvalue false
     */
    highlightCurrentMonth?: boolean;
    /**
     * Whether the month picker should highlight the selected month
     * @defaultvalue false
     */
    highlightSelectedMonth?: boolean;
    /**
     * Whether the calendar should show the week number (weeks 1 to 53) before each week row
     * @defaultvalue false
     */
    showWeekNumbers?: boolean;
    /**
     * Defines when the first week of the year should start, FirstWeekOfYear.FirstDay,
     * FirstWeekOfYear.FirstFullWeek or FirstWeekOfYear.FirstFourDayWeek are the possible values
     * @defaultvalue FirstWeekOfYear.FirstFullWeek
     */
    firstWeekOfYear?: FirstWeekOfYear;
    /**
     * Whether the "Go to today" link should be shown or not
     */
    showGoToToday?: boolean;
    /**
     * Determines if the DatePicker has a border.
     * @defaultvalue false
     */
    borderless?: boolean;
    /**
     * Optional CSS class for the DatePicker root element.
     */
    className?: string;
    /**
     * Apply additional formating to dates, for example localized date formatting.
     */
    dateTimeFormatter?: IDateFormatting;
    /**
     * The minimum allowable date.
     */
    minDate?: Date;
    /**
     * The maximum allowable date.
     */
    maxDate?: Date;
    /**
     * The initially highlighted date.
     */
    initialPickerDate?: Date;
    /**
     * Allows all elements to be focused, including disabled ones
     * @defaultvalue false
     */
    allFocusable?: boolean;
    /**
     * Callback that runs after DatePicker's menu (Calendar) is closed
     */
    onAfterMenuDismiss?: () => void;
    /**
     * Whether the CalendarDay close button should be shown or not.
     */
    showCloseButton?: boolean;
    /**
     * The tabIndex of the TextField
     */
    tabIndex?: number;
}

/**
 * {@docCategory DatePicker}
 */
export declare interface IDatePickerStrings extends ICalendarStrings {
    /**
     * Error message to render for TextField if isRequired validation fails.
     */
    isRequiredErrorMessage?: string;
    /**
     * Error message to render for TextField if input date string parsing fails.
     */
    invalidInputErrorMessage?: string;
    /**
     * Error message to render for TextField if date boundary (minDate, maxDate) validation fails.
     */
    isOutOfBoundsErrorMessage?: string;
}

/**
 * {@docCategory DatePicker}
 */
export declare interface IDatePickerStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    disabled?: boolean;
    label?: boolean;
    isDatePickerShown?: boolean;
}

/**
 * {@docCategory DatePicker}
 */
export declare interface IDatePickerStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    textField: IStyle;
    callout: IStyle;
    icon: IStyle;
    wrapper?: IStyle;
}

/**
 * {@docCategory WeeklyDayPicker}
 */
export declare interface IWeeklyDayPicker {
    focus(): void;
}

/**
 * {@docCategory WeeklyDayPicker}
 */
export declare type IWeeklyDayPickerNavigationIcons = Pick<ICalendarNavigationIcons, 'leftNavigation' | 'rightNavigation'>;

/**
 * {@docCategory WeeklyDayPicker}
 */
export declare interface IWeeklyDayPickerProps extends IBaseProps<IWeeklyDayPicker>, Partial<ICalendarDayGridProps> {
    /**
     * Optional callback to access the IWeeklyDayPicker interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IWeeklyDayPicker>;
    /**
     * Customized styles for the component.
     */
    styles?: IStyleFunctionOrObject<IWeeklyDayPickerStyleProps, IWeeklyDayPickerStyles>;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Additional CSS class(es) to apply to the WeeklyDayPicker.
     */
    className?: string;
    /**
     * Localized strings to use in the WeeklyDayPicker
     */
    strings: IWeeklyDayPickerStrings;
    /**
     * Customize navigation icons.
     */
    navigationIcons?: IWeeklyDayPickerNavigationIcons;
    /**
     * The initially selected date. If not provided, defaults to today's date
     */
    initialDate?: Date;
    /**
     * Callback issued when a date is selected
     * @param date - The date the user selected
     */
    onSelectDate?: (date: Date) => void;
    /**
     * Callback issued when a date in the calendar is navigated
     * @param date - The date that is navigated to
     */
    onNavigateDate?: (date: Date) => void;
    /**
     * The first day of the week for your locale.
     * @defaultvalue DayOfWeek.Sunday
     */
    firstDayOfWeek?: DayOfWeek;
    /**
     * Value of today. If unspecified, current time in client machine will be used.
     */
    today?: Date;
    /**
     * Apply additional formating to dates, for example localized date formatting.
     */
    dateTimeFormatter?: IDateFormatting;
    /**
     * If set the Calendar will not allow navigation to or selection of a date earlier than this value.
     */
    minDate?: Date;
    /**
     * If set the Calendar will not allow navigation to or selection of a date later than this value.
     */
    maxDate?: Date;
    /**
     * If set the Calendar will not allow selection of dates in this array.
     */
    restrictedDates?: Date[];
    /**
     * The cardinal directions for animation to occur during transitions, either horizontal or veritcal
     */
    animationDirection?: AnimationDirection;
    /**
     * Whether to show as a month picker. If false, shows only one week
     * @defaultvalue false
     */
    showFullMonth?: boolean;
    /**
     * How many weeks to show if showFullMonth=true. If not provided, will show enough weeks to display the current
     * month, between 4 and 6 depending
     * @defaultvalue undefined
     */
    weeksToShow?: number;
}

/**
 * {@docCategory WeeklyDayPicker}
 */
export declare interface IWeeklyDayPickerStrings extends ICalendarStrings {
    /**
     * Aria-label for the "previous week" button in picker.
     */
    prevWeekAriaLabel?: string;
    /**
     * Aria-label for the "next week" button in picker.
     */
    nextWeekAriaLabel?: string;
}

/**
 * {@docCategory WeeklyDayPicker}
 */
export declare interface IWeeklyDayPickerStyleProps extends ICalendarDayGridStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
}

/**
 * {@docCategory WeeklyDayPicker}
 */
export declare interface IWeeklyDayPickerStyles extends Partial<ICalendarDayGridStyles> {
    /**
     * Style for the root element.
     */
    root: IStyle;
    /**
     * Style for the root element.
     */
    navigationIconButton: IStyle;
    /**
     * Style for the root element.
     */
    disabledStyle: IStyle;
}

export declare const WeeklyDayPicker: React.FunctionComponent<IWeeklyDayPickerProps>;

export * from "@fluentui/date-time-utilities/lib/dateMath/dateMath";
export * from "@fluentui/date-time-utilities/lib/dateValues/dateValues";
export * from "@fluentui/date-time-utilities/lib/dateValues/timeConstants";

export { }
