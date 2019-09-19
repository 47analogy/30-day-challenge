class Recipe {
  constructor() {
    this.recipeButton = document.querySelector('.recipe-button');
    this.recipeName = document.querySelector('.recipe-name');
    this.recipeImage = document.querySelector('.recipe-img');
    this.recipeIngredients = document.querySelector('.recipe-ingredient');
    this.recipeDirections = document.querySelector('.recipe-directions');
  }

  getRecipe() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.data)
      .catch(err => console.log(err));
  }
}

function eventListeners() {
  const recipeButton = document.querySelector('.recipe-button');

  const recipe = new Recipe();

  recipeButton.addEventListener('click', event => {
    event.preventDefault();
    recipe.getRecipe();
  });
}

document.addEventListener('DOMContentLoaded', () => eventListeners());
