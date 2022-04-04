<template>
<div class="list-container">
    <h3>Planned Meals</h3>
    <div v-for="day in nextSevenDays" :key="day.getDate()" class="list-item">
        <h3>{{ day.getDate() }}</h3>
        <p v-if="!getMealForDay(day)">No meal planned</p>
        <p v-if="getMealForDay(day)">{{ getMealForDay(day).recipe.name }}</p>
        <div class="right-action">
            <router-link v-if="!getMealForDay(day)" :to="`/recipes?date=${day.toString()}`">
                <button>Add</button>
            </router-link>
            <button @click="removeMeal(getMealForDay(day))" v-if="getMealForDay(day)">Remove</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MealsList',
    props: ['meals'],
    data() {
        return {
            nextSevenDays: Array(7).fill().map((_, i) => {
                const date = new Date();
                date.setDate(date.getDate() + i);
                return date;
            })
        }
    },
    methods: {
        getMealForDay(date) {
            return this.meals.find(meal => {
                return meal.date.getYear() === date.getYear()
                    && meal.date.getMonth() === date.getMonth()
                    && meal.date.getDate() === date.getDate();
            })
        },
        removeMeal(meal) {
            this.$emit('removeMeal', meal);
        }
    }
}
</script>