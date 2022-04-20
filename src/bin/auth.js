const auth = {
    login: async (token) => {
        localStorage.setItem('token', token);
    },
    logout: () => {
        localStorage.removeItem('token');
    },
    isAuthenticated: () => {
        const result = localStorage.getItem('token');
        console.log('---> ', result);
        return (result !== null);
    },
    getToken: () => {
        return localStorage.getItem('token');
    }
}

export default auth;
