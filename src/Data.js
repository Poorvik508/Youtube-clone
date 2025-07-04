export const API_KEY = 'AIzaSyAzkuGyOSFqvjRt_pmDBmOvIZwPXs15fuQ';
export const value_conventer = ((value) => {
    if (value >= 1000000)
    {
        return Math.floor(value / 1000000)+'M';
    }
    else if (value >= 1000)
    {
        return Math.floor(value / 1000)+'K';
    }
    else {
        return value;
    }
 })