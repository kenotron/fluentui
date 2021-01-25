import { MakeStylesRenderer } from '../types';
interface MakeStylesDOMRenderer extends MakeStylesRenderer {
    insertionCache: Record<string, true>;
    index: number;
    styleElement: HTMLStyleElement;
}
export declare function createDOMRenderer(targetDocument?: Document): MakeStylesDOMRenderer;
export {};
