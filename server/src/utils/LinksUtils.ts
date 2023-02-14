const BASE62_STRING = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const MAX_URL_LENGTH = 16;

const shortenUrl = (fullUrl: string) : string => {
    var res = ""    
    var long = convertStringToLong(fullUrl);
    while (long > 1 && res.length < MAX_URL_LENGTH) {
        res += BASE62_STRING[Math.round(long % 62)];
        long /= 62;
    }

    return res;
}

const convertStringToLong = (s: string): number => {
    var long = 0;
    for (let i = 0; i < s.length; i++) {
        long *= 100;
        long += s.charCodeAt(i);
    }
    return long;
}

export { shortenUrl }