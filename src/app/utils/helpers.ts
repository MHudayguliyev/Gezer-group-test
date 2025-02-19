export const getQueryParams = (params: any, baseUrl: string) => {
    const queryParams: string[] = [];
    if (params) {
        for (const property in params) {
            if (typeof params[property] !== 'undefined' && property !== 'serverToken') {
                queryParams.push(`${property}=${params[property]}`)
            }
        }
    }
    const queryString = queryParams.join('&');
    const url = `${baseUrl}?${queryString}`
    return url
}
export const CheckObjOrArrForNull = (obj_or_arr: any) => {
    if (obj_or_arr !== null && obj_or_arr !== undefined) {
        if (obj_or_arr instanceof Object && Object.keys(obj_or_arr).length !== 0) return true;
        else if (Array.isArray(obj_or_arr) && obj_or_arr.length !== 0) return true;
    }
    return false;
};