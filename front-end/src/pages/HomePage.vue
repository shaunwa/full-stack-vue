<template>
    <div class="page-container">
        <div class="column">
            <MealsList :meals="meals" @removeMeal="removeMeal" />
        </div>
        <div class="column">
            <IngredientsList
                @deleteIngredient="deleteIngredient"
                :ingredients="ingredients" />
            <router-link to="/shopping-list">
                <button class="shopping-list-button list-container full-width">
                    Generate Shopping List
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import MealsList from '../components/MealsList';
import IngredientsList from '../components/IngredientsList';

export default {
    name: 'HomePage',
    props: ['ingredients', 'meals'],
    components: {
        MealsList,
        IngredientsList,
    },
    methods: {
        removeMeal(meal) {
            this.$emit('removeMeal', meal);
        },
        deleteIngredient(ingredientName) {
            this.$emit('deleteIngredient', ingredientName);
        }
    }
}
</script>
