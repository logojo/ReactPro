interface Route {
    to   : string;
    name : string;
}

export const routes : Route[] = [
    { to: "/", name: 'Shopping'},
    { to: "/shopping", name: 'ShoppingControlProps'},
    { to: "/about", name: 'About'},
    { to: "/users", name: 'Users'}
];
