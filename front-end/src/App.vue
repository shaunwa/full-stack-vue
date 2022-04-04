<template>
  <h1>Meal Tracker</h1>
  <router-view
    :ingredients="ingredients"
    :meals="meals"
    @addIngredient="addIngredient"
    @addMeal="addMeal"
    @removeMeal="removeMeal"
    @deleteIngredient="deleteIngredient"
  ></router-view>
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            ingredients: [],
            meals: [],
        }
    },
    created() {
      axios.get('http://localhost:8000/api/ingredients')
        .then(response => {
          console.log(response.data);
          this.ingredients = response.data;
        });
      axios.get('http://localhost:8000/api/meals')
        .then(response => {
          console.log(response.data);
          this.meals = response.data.map(meal => ({
            ...meal,
            date: new Date(meal.date),
          }));
        })
    },
    methods: {
      addIngredient({ name, amount, units }) {
        axios.post('http://localhost:8000/api/ingredients', {
          name,
          amount,
          units
        })
        .then(response => {
          this.ingredients = response.data;
        });
      },
      addMeal({ date, recipe }) {
        axios.post('http://localhost:8000/api/meals', {
          date,
          recipeId: recipe.id,
        })
        .then(response => {
          this.meals = response.data.map(meal => ({
            ...meal,
            date: new Date(meal.date),
          }));
        });
      },
      removeMeal({ id }) {
        axios.delete(`http://localhost:8000/api/meals/${id}`)
          .then(response => {
            this.meals = response.data.map(meal => ({
              ...meal,
              date: new Date(meal.date),
            }));
          })
      },
      deleteIngredient(ingredientName) {
        axios.delete(`http://localhost:8000/api/ingredients/${ingredientName}`)
          .then(response => {
            this.ingredients = response.data;
          });
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
