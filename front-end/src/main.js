import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage';
import RecipeSearchPage from './pages/RecipeSearchPage';
import AddIngredientPage from './pages/AddIngredientPage';
import ShoppingListPage from './pages/ShoppingListPage';

const routes = [
    { path: '/', component: HomePage },
    { path: '/recipes', component: RecipeSearchPage },
    { path: '/add-ingredient', component: AddIngredientPage },
    { path: '/shopping-list', component: ShoppingListPage },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

createApp(App)
    .use(router)
    .mount('#app')
