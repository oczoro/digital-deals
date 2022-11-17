let auth = false;

export const isLoggedIn = () => auth;

export const setAuth = (state: boolean) => (auth = state);
