<template>
    <div class="page">
        <div class="centered-container">
            <h1>Here's your shopping list:</h1>
            <p v-for="item in shoppingListItems" :key="item">
                {{ item }}
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ShoppingListPage',
    data() {
        return {
            shoppingListItems: []
        }
    },
    created() {
        axios.get('http://localhost:8000/api/shopping-list')
            .then(response => {
                this.shoppingListItems = response.data;
            });
    }
}
</script>