
export const updateLC = (key: string, latestContent: string) => {
    if ( localStorage.getItem(key) ) {
        localStorage.removeItem(key);
    }
    
    localStorage.setItem(key, latestContent);
}