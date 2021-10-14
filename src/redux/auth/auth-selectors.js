import { defaults } from "json-server";

const getIsLoggedIn = state => state.isLoggedIn;

const getUsername = state => state.auth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
};

export default authSelectors;