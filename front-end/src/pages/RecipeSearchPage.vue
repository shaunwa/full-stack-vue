<template>
    <div class="page">
        <div class="centered-container">
            <h1>Add Meal to Plan</h1>
            <input
                type="text"
                class="full-width space-before space-after"
                placeholder="Enter keyword here"
                v-model="searchString" />
            <button
                class="full-width space-after"
                @click="submitSearch"
            >Search</button>
            <p v-if="!hasSearched">Enter a keyword and click "search" to find recipes</p>
            <p v-if="hasSearched && searchResults.length === 0">
                There were no results for that keyword
            </p>
            <div
                v-for="recipe in searchResults"
                :key="recipe.id"
                class="search-list-item"
                @click="selectRecipe(recipe)"
            >
                <h3>{{ recipe.name }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RecipeSearchPage',
    props: ['recipes'],
    data() {
        return {
            searchString: '',
            searchResults: [],
            hasSearched: false,
        }
    },
    methods: {
        submitSearch() {
            axios.get(`http://localhost:8000/api/recipes?search=${this.searchString}`)
                .then(response => {
                    console.log(response.data);
                    this.searchResults = response.data;
                    this.hasSearched = true;
                });
        },
        selectRecipe(recipe) {
            const date = new Date(this.$route.query.date);
            this.$emit('addMeal', { date, recipe });
            this.$router.push('/');
        }
    }
}
</script>