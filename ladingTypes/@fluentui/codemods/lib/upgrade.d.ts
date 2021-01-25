import { CommandParserResult } from './command';
interface UpgradeFunctions {
    getTsConfigs: () => string[];
    saveSync: (file: {
        saveSync: () => void;
    }) => void;
    saveAsync: (project: {
        save: () => void;
    }) => void;
}
export declare function _upgradeInternal(options: CommandParserResult, fns: UpgradeFunctions): void;
export declare function upgrade(options: CommandParserResult): void;
export {};
