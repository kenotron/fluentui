import { MakeStylesDefinition, MakeStylesOptions } from './types';
export declare function makeStyles<Selectors, Tokens>(definitions: MakeStylesDefinition<Selectors, Tokens>[], unstable_cssPriority?: number): (selectors: Selectors, options: MakeStylesOptions<Tokens>, ...classNames: (string | undefined)[]) => string;
