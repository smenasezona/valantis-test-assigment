export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key, defaultValue) => {
    return Number(localStorage.getItem(key)) || defaultValue;
};