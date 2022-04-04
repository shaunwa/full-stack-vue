<template>
    <div class="list-container">
        <h3>Ingredients</h3>
        <div v-for="ingredient in ingredients" :key="ingredient.name" class="list-item">
            <h3>{{ ingredient.name }}</h3>
            <p>{{ ingredient.amount }} {{ ingredient.units }}</p>
            <button @click="deleteClicked(ingredient.name)">Delete</button>
        </div>
        <router-link to="/add-ingredient">
            <button class="full-width space-before">+ Add Ingredient</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'IngredientsList',
    props: ['ingredients'],
    methods: {
        deleteClicked(ingredientName) {
            this.$emit('deleteIngredient', ingredientName);
        }
    }
}
</script>
