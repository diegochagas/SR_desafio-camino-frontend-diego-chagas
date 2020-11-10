export const formatDate = timestamp => {
    const date = new Date(timestamp);
    const dateString = `${
        formatValueLessThan10(date.getDate())
    }/${
        formatValueLessThan10(date.getMonth())
    }/${date.getFullYear()}`;
    const hourString = `${
        formatValueLessThan10(date.getHours())
    }:${
        formatValueLessThan10(date.getMinutes())
    }:${
        formatValueLessThan10(date.getSeconds())
    }`
    
    return `${dateString} ${hourString}`;
}

export const formatValueLessThan10 = value => {
    return value >= 10 ? value : `0${value}`;
}