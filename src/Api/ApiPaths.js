
const ApiPaths = {
    user:{
        base: 'api/user',
        byID:(id) => `api/user/${id}`
    },
    account:{
        login: 'api/account/login',
        register: 'api/account/register',
        logout: 'api/account/logout',
        auth: 'api/account/auth'
    }
};

export default ApiPaths;
