export interface IMonacoConfig {
    /** Root path where the Monaco files will be at runtime */
    baseUrl: string;
    /** Whether to use minified versions of the files (`.min.js`) */
    useMinified?: boolean;
    /**
     * Whether to use a configuration variant which works when the worker script lives on a
     * different domain than the website host (like a CDN).
     */
    crossDomain?: boolean;
}
/**
 * Add required global configuration to make Monaco work. (Doesn't directly load anything.)
 * If neither `config` nor the global `MonacoConfig` are provided, does nothing.
 * @param config - Configuration settings. Defaults to the `MonacoConfig` global if it exists.
 */
export declare function configureEnvironment(config?: IMonacoConfig): void;
/**
 * Returns true if either MonacoEnvironment or MonacoConfig is set.
 */
export declare function isConfigAvailable(): boolean;
