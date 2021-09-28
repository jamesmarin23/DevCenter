var actualUser = null;

var Model = {
    getUser: () => {
        var user = sessionStorage.getItem('user');
        if (user) {
            actualUser = JSON.parse(sessionStorage.getItem('user'));
        }
        else {
            actualUser = null;
        }
        return actualUser;
    },

    setUser: (objeto) => {
        actualUser = objeto;
        sessionStorage.setItem("user", JSON.stringify(actualUser));
    },

    logOut: () => {
        actualUser = null;
        sessionStorage.removeItem('user');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPass');
    },
}

export default Model;