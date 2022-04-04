<template>
    <div class="centered-container">
        <h1>Add Ingredient</h1>
        <input
            type="text"
            placeholder="Enter ingredient name here"
            class="space-after space-before full-width"
            v-model="name" />
        <input
            type="number"
            class="space-before full-width"
            v-model="amount" />
        <select class="space-before full-width" v-model="units">
            <option
                v-for="unitOption in unitOptions"
                :key="unitOption"
                :value="unitOption"
            >{{unitOption}}</option>
        </select>
        <button
            @click="addIngredient"
            class="space-before full-width">Add</button>
    </div>
</template>

<script>
export default {
    name: 'AddIngredientPage',
    data() {
        return {
            name: '',
            amount: 0,
            units: 'pounds',
            unitOptions: ['pounds', 'cups', 'tablespoons', 'teaspoons', 'count']
        }
    },
    methods: {
        addIngredient() {
            this.$emit('addIngredient', {
                name: this.name,
                amount: this.amount,
                units: this.units,
            });
            this.$router.push('/');
        }
    }
}
</script>