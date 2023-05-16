interface Route {
    to   : string;
    name : string;
}

export const routes : Route[] = [
    { to: "/", name: 'Shopping'},
    { to: "/shopping", name: 'ShoppingControlProps'},
    { to: "/shopping2", name: 'ShoppingStateInitializer'},
    { to: "/about", name: 'About'},
    { to: "/users", name: 'Users'}
];
