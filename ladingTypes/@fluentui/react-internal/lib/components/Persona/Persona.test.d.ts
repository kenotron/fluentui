import { IRenderFunction } from '../../Utilities';
import { IPersonaSharedProps, IPersonaProps } from './index';
/**
 * function to override the default onRender callbacks
 */
export declare const wrapPersona: (example: IPersonaSharedProps, shouldWrapPersonaCoin?: boolean) => (coinProps: IPersonaProps, defaultRenderer: IRenderFunction<IPersonaProps>) => JSX.Element | null;
