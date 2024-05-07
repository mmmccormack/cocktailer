const cocktails = {
    'aperol spritz' : {
        'type' : ['classic'],
        'ingredients': ['prosecco', 'aperol/ campari', 'soda water'],
        'measurements' : ['3 parts', '2 parts', '1 part']
    },
    'army &amp; navy' : {
        'type' : ['classic', 'non-alc'],
        'ingredients' : ['gin', 'zero-alc gin', 'lemon juice', 'orgeat', 'angostura bitters'],
        'measurements' : ['2oz', '2oz', '1oz', '3/4oz', 'dash']
    },
    'aviation' : {
        'type' : ['classic'],
        'ingredients': ['gin', 'creme de violette', 'luxardo', 'lemon juice'],
        'measurements' : ['2oz', '1/4oz', '1/2oz', '3/4oz']
    },
    'bermuda yacht club' : {
        'type' : ['tiki'],
        'ingredients': ['white rum/ dark rum', 'blue curaçao', 'falernum', 'lime juice'],
        'measurements' : ['2oz', '1/4oz', '1/2oz', '3/4oz']
    },
    'blue hawaiian' : {
        'type' : ['tiki', 'fun'],
        'ingredients': ['white rum/ dark rum', 'blue curaçao', 'coconut cream', 'piña', 'lemon juice'],
        'measurements' : ['1 1/2oz', '3/4oz', '3/4oz', '2oz', '1/2oz']
    },
    'cherry kerry' : {
        'type' : ['fun', 'non-alc'],
        'ingredients': ['kombucha', 'orange juice', 'simple syrup', 'lime juice', 'soda water'],
        'measurements' : ['5oz', '2oz', '1 spoon', '1/2oz', 'top with']
    },
    'east 8 hold-up' : {
        'type' : ['fun'],
        'ingredients': ['piña', 'vodka', 'aperol/ campari', 'lime juice', 'simple syrup', 'passion fruit'],
        'measurements': ['2oz', '1 1/2oz', '1/2oz', '1/2oz', '1/4oz', 'bar spoon']
    },
    'long island iced tea' : {
        'type' : ['boozy'],
        'ingredients' : ['white rum/ dark rum', 'gin', 'cointreau', 'simple syrup', 'lemon juice', 'vodka', 'tequila/ mezcal', 'cola'],
        'measurements' : ['3/4oz', '3/4oz', '3/4oz', '3/4oz', '3/4oz', '3/4oz', '3/4oz', 'top with']
    },
    'mai tai' : {
        'type' : ['tiki', 'classic'],
        'ingredients' : ['white rum/ dark rum', 'cointreau', 'lime juice', 'orgeat', 'mint', ''],
        'measurements' : ['1 1/2oz', '3/4oz', '3/4oz', '1/2oz', 'sprig of', '1/2oz dark rum float']
    },
    'manhattan' : {
        'type' : ['classic'],
        'ingredients': ['bourbon/ whiskey', 'sweet vermouth', 'angostura bitters', ''],
        'measurements' : ['2oz', '1oz', '2 dashes', 'top with cherry']
    },
    'margarita' : {
        'type' : ['classic'],
        'ingredients': ['tequila/ mezcal', 'lime juice', 'cointreau', 'simple syrup', ''],
        'measurements' : ['2oz', '1oz', '1/2oz', '1/2oz', 'salt rim']
    },
    'martini' : {
        'type' : ['classic'],
        'ingredients' : ['gin', 'vodka', 'dry vermouth', 'sweet vermouth', ''],
        'measurements' : ['2 1/2oz', '2 1/2oz', '1/2oz', '1/2oz', 'lemon twist']
    },
    'mojito' : {
        'type' : ['tiki'],
        'ingredients' : ['mint', 'white rum/ dark rum', 'lime juice', 'simple syrup', 'soda water'],
        'measurements' : ['muddle', '2oz', '3/4oz', '1/2oz', 'top with']
    },
    'negroni' : {
        'type' : ['classic'],
        'ingredients': ['gin', 'sweet vermouth', 'aperol/ campari', ''],
        'measurements' : ['1oz', '1oz', '1oz', 'orange peel']
    },
    'old fashioned' : {
        'type' : ['classic'],
        'ingredients' : ['bourbon/ whiskey', 'angostura bitters', 'simple syrup', ''],
        'measurements' : ['2oz', '3 dashes', '1/2oz', 'orange peel']
    },
    'painkiller' : {
        'type' : ['tiki'],
        'ingredients' : ['white rum/ dark rum', 'piña', 'orange juice', 'coconut cream', 'nutmeg'],
        'measurements' : ['2oz', '4oz', '1oz', '1oz', 'grated']
    },
    'paloma' : {
        'type' : ['classic'],
        'ingredients' : ['tequila/ mezcal', 'grapefruit', 'lime juice', 'simple syrup', 'soda water', ''],
        'measurements' : ['2oz', '4oz', '1/2oz', '1/2oz', 'top with', 'salt rim']
    },
    'paper plane' : {
        'type' : ['classic', 'boozy'],
        'ingredients' : ['amaro', 'aperol/ campari', 'lemon juice', 'bourbon/ whiskey'],
        'measurements' : ['3/4oz', '3/4oz', '3/4oz', '3/4oz']
    },
    'piña colada' : {
        'type' : ['classic', 'tiki'],
        'ingredients' : ['white rum/ dark rum', 'piña', 'lime juice', 'coconut cream'],
        'measurements' : ['2oz', '1 1/2oz', '1/2oz', '1 1/2oz']
    },
    'rum punch' : {
        'type' : ['tiki', 'boozy'],
        'ingredients' : ['white rum/ dark rum', 'piña', 'grapefruit', 'lemon juice', 'falernum', 'simple syrup'],
        'measurements' : ['2oz', '1oz', '3/4oz', '1/4oz', '1/2oz', '1/2oz', '1/4oz']
    },
    'saturn' : {
        'type' : ['fun', 'tiki', 'non-alc'],
        'ingredients' : ['gin', 'zero-alc gin', 'passion fruit', 'orgeat', 'falernum', 'lemon juice'],
        'measurements' : ['1 1/4oz', '1 1/4oz', '1/2oz', '1/4oz', '1/4oz', '1/4oz']
    },
    'shallow end' : {
        'type' : ['fun', 'tiki'],
        'ingredients' : ['gin', 'cointreau', 'blue curaçao', 'lime juice'],
        'measurements' : ['1 1/2oz', '1oz', '2 dashes', '1/2oz']
    },
    'succulent blood' : {
        'type' : ['fun'],
        'ingredients' : ['tequila/ mezcal', 'orange juice', 'falernum', 'cinnamon', 'lime juice'],
        'measurements' : ['2oz', '1oz', '1/4oz', '1/4oz', '1/4oz']
    },
    'tom collins' : {
        'type' : ['classic', 'non-alc'],
        'ingredients' : ['gin', 'zero-alc gin', 'lemon juice', 'simple syrup', 'soda water'],
        'measurements' : ['2oz', '2oz', '1oz', '1/2oz', 'top with']
    },
}

const displayDrinks = (category) => {
    if (pressedButtons.length === 0) {
        allDrinks.forEach(drink => toggleShowDrink(drink))
    } else {
        allDrinks.forEach(drink => {
            if (pressedButtons.every(choice => cocktails[drink.innerHTML][category].includes(choice))) {
                toggleShowDrink(drink)
            } else {
                toggleHideDrink(drink)
            }
        })
    }
    resizeDrinkList();
}

const findDrink = (selection, category) => {
    if (!pressedButtons.includes(selection)) {
        pressedButtons.push(selection)
        displayDrinks(category)
    } else {
        const selectionToRemove = pressedButtons.indexOf(selection);
        pressedButtons.splice(selectionToRemove, 1);
        displayDrinks(category)
    }
}

const toggleColour = selection => selection.classList.toggle('selected');
const toggleHideDrink = drink => drink.classList.add('hide-drink');
const toggleShowDrink = drink => drink.classList.remove('hide-drink');

const removeAllSelected = () => {
    const selectedIngredients = document.querySelectorAll('.ingredients.selected');
    const selectedTypes = document.querySelectorAll('.type.selected');
    selectedIngredients.forEach(ingredient => ingredient.classList.remove('selected'));
    selectedTypes.forEach(type => type.classList.remove('selected'));
    pressedButtons.length = 0;
}

const resizeDrinkList = () => {
    const drinks = document.querySelectorAll('.drink');
    const removedDrinks = document.querySelectorAll('.drink.hide-drink');
    let totalDrinks = drinks.length - removedDrinks.length;
    if (totalDrinks === 0) {
        drinks.forEach(drink => toggleShowDrink(drink))
        totalDrinks = drinks.length;
        removeAllSelected();
        document.querySelector('.error').style.display = 'flex';
    }
    document.querySelector('.selection-box.cocktail-list').style.gridTemplateColumns = `repeat(${totalDrinks}, 120px)`;
}
const close = document.querySelectorAll('.close');
close.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.chosen-cocktail').style.display = 'none';
        document.querySelector('.selection-area').style.display = 'block';
        const drinks = document.querySelectorAll('.drink');
        drinks.forEach(drink => toggleShowDrink(drink))
        removeAllSelected();
        document.querySelector('.selection-box.cocktail-list').style.gridTemplateColumns = `repeat(${drinks.length}, 120px)`;
    })
})

const displayCocktail = cocktail => {
    document.querySelector('.selection-area').style.display = "none";
    document.querySelector('.chosen-cocktail').style.display = "flex";
    document.querySelector('.cocktail-name').innerHTML = cocktail;
    const windowList = document.querySelector('.ingredients-list')
    windowList.innerHTML = '';
    const ingredientsList = cocktails[cocktail].ingredients;
    const measurementsList = cocktails[cocktail].measurements;
    ingredientsList.forEach((ingredient,index) => {
        const singleIngredient = document.createElement('li');
        if (ingredient === 'zero-alc gin') {
            singleIngredient.innerHTML = `(or ${measurementsList[index]} ${ingredient})`;
        } else {
            singleIngredient.innerHTML = `${measurementsList[index]} ${ingredient}`;
        }
        windowList.appendChild(singleIngredient)
    })
}

const drinkTypes = document.querySelectorAll('.type');
drinkTypes.forEach(drinkType =>
    drinkType.addEventListener('click', () => {
        toggleColour(drinkType);
        findDrink(drinkType.innerHTML, drinkType.classList[1]);
    })
)
const drinkIngredients = document.querySelectorAll('.ingredients');
drinkIngredients.forEach(drinkIngredient =>
    drinkIngredient.addEventListener('click', () => {
        toggleColour(drinkIngredient);
        findDrink(drinkIngredient.innerHTML, drinkIngredient.classList[1]);
    })
)
const cocktailButtonContainer = document.querySelector('.cocktail-list');
for (let drink in cocktails) {
    const cocktailButton = document.createElement('div');
    cocktailButton.classList.add('category', 'drink');
    cocktailButton.innerHTML = drink;
    cocktailButtonContainer.appendChild(cocktailButton);
}
const cocktailList = document.querySelectorAll('.category.drink');
cocktailList.forEach(cocktail => {
    cocktail.addEventListener('click', () => {
        displayCocktail(cocktail.innerHTML);
    })
})
const flickers = document.querySelectorAll('.category');
flickers.forEach(category => {
    const randomSeconds = Math.floor(Math.random() * 4) + 3;
    category.style.animationDuration = `${randomSeconds}s`;
})

const drinkList = document.querySelectorAll('.drink');
const allDrinks = [...drinkList];
const pressedButtons = [];

resizeDrinkList();