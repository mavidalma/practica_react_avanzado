export const getAds = state => state.ads;
export const getTags = state => state.tags;
export const isLogged = state => state.user;

export const adsTopPrice = ads => {
    if (ads) {   
    const topPrice = ads.map(item => item.price)
        .reduce((previous, current) => (current > previous) ? current : previous);
        console.log("adsTopPrice", topPrice)
        return topPrice
}
    return                              
}

