const shortenUrl = (fullUrl: string) : string => {
    return btoa(fullUrl);
}

export { shortenUrl }