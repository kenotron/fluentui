export interface IUseQueryStringResponse {
    queryString: string;
    setQueryString: (queryString: string) => void;
    clearQueryString: () => void;
}
export declare const useQueryString: (intialQueryString: string) => IUseQueryStringResponse;
