import * as React from 'react';
import { ICardProps } from './Card.types';
import { ICardItemProps } from './CardItem/CardItem.types';
import { ICardSectionProps } from './CardSection/CardSection.types';
export declare const Card: React.FunctionComponent<ICardProps> & {
    Item: React.FunctionComponent<ICardItemProps>;
    Section: React.FunctionComponent<ICardSectionProps>;
};
export default Card;
