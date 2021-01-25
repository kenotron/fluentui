import { IMonacoTextModel, IBasicPackageGroup, ITransformedCode, ITransformedExample } from '../interfaces/index';
/**
 * Transpile the model's current code from TS to JS.
 */
export declare function transpile(model: IMonacoTextModel): Promise<ITransformedCode>;
/**
 * Transpiles the code, does an additional transform to prepare for rendering, and evals the code.
 *
 * @param model - Current editor text model
 * @param supportedPackages - Supported packages for imports, grouped by global name
 * (React is implicitly supported)
 * @returns Returns an object with the output string and component to render if successful,
 * or error(s) if unsuccessful.
 */
export declare function transpileAndEval(model: IMonacoTextModel, supportedPackages: IBasicPackageGroup[]): Promise<ITransformedExample>;
