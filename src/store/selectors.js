export const getAds = state => state.ads;
export const getTags = state => state.tags;
export const isLogged = state => state.user;
export const isFetching = state => state.ui.fetching;

export const adsTopPrice = state => {
    if (state.ads.length > 0) {   
    const topPrice = state.ads.map(item => item.price)
        .reduce((previous, current) => (current > previous) ? current : previous);
        return topPrice
}
    return                        
}

