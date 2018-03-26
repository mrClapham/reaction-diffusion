export const isArray = d => Object.prototype.toString.call(d) === '[object Array]';
export const isObject = d => d != null && typeof d === 'object' && !isArray(d);

export const copyArray = arr => isArray(arr) ? [...arr] : arr ;
export const copyObject = obj => isObject(obj) ? {...obj} : obj ;

export const deepCopyArray = arr => {
    return isArray(arr) ?
        arr.map((d,i)=>{
            if(isObject(d)){
                return copyObject(d)
            }
            if(isArray(d)){
                return(deepCopyArray(d))
            }
        })
        :
     arr
}