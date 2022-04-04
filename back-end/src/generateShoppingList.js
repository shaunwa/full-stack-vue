export const generateShoppingList = (populatedMeals, userIngredients) => {
    let missingIngredients = { };

    for (let meal of populatedMeals) {
        for (let mealIngredient of meal.recipe.ingredients) {
            if (!userIngredients.some(userIngredient => mealIngredient.name === userIngredient.name)) {
                missingIngredients[mealIngredient.name] = {
                    ...(missingIngredients[mealIngredient.name] || {}),
                    [mealIngredient.units]: mealIngredient.amount +
                        ((missingIngredients[mealIngredient.name] && missingIngredients[mealIngredient.name][mealIngredient.units]) || 0)
                };
            }
        }
    }

    const shoppingList = Object.keys(missingIngredients).map(ingredientName => {
        const missingAmountsObj = missingIngredients[ingredientName]

        const missingAmounts = Object.keys(missingAmountsObj).map(units => {
            return `${missingAmountsObj[units]} ${units}`;
        }).join(' + ');

        return `${ingredientName}: ${missingAmounts}`;
    })

    return shoppingList;
}