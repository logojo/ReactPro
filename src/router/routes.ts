interface Route {
    to   : string;
    name : string;
}

export const routes : Route[] = [
    { to: "/", name: 'Shopping'},
    { to: "/about", name: 'About'},
    { to: "/users", name: 'Users'}
];
