import * as React from 'react';
export declare class RenderButton extends React.Component<LocalButtonProps> {
    render(): JSX.Element;
}
export interface LocalButtonProps {
    id: string;
    description?: string;
    imageSource: string;
    toggled?: boolean;
}
