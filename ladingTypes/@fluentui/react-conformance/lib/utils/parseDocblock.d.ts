import * as doctrine from 'doctrine';
declare const parseDocblock: (docblock: string) => {
    description: string;
    tags: doctrine.Tag[];
};
export default parseDocblock;
