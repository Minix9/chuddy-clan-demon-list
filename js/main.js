import routes from './routes.js';

export const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || false,
    toggleDark() {
        this.dark = true;
    },
});

const app = Vue.createApp({
    data: () => ({ store }),
});
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);

app.mount('#app');
