class Recipe {
  constructor() {
    this.recipeButton = document.querySelector('.recipe-button');
    this.recipeName = document.querySelector('.recipe-name');
    this.recipeImage = document.querySelector('#recipe-img');
    this.recipeDirections = document.querySelector('.recipe-directions');
    this.recipeIngredients = document.querySelector('.recipe-ingredients-list');
  }

  fetchRecipe() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        this.recipeInfo = res.data.meals[0];
        this.displayData();
      })
      .catch(err => console.log(err));
  }

  displayData() {
    this.recipeName.innerHTML = this.recipeInfo.strMeal;
    this.recipeImage.src = this.recipeInfo.strMealThumb;
    this.addIngredientList();
    this.recipeDirections.innerHTML = this.recipeInfo.strInstructions;
  }

  // create list of valid ingredients
  addIngredientList() {
    const ingredients = [];
    const regex = /\b(\w*strIngredient\w*)\b/g;

    for (let foodItem in this.recipeInfo) {
      if (
        foodItem.match(regex) in this.recipeInfo &&
        this.recipeInfo[foodItem].length !== 0
      ) {
        ingredients.push(this.recipeInfo[foodItem]);
      }
    }

    ingredients.map(ingredient => {
      const li = document.createElement('LI');
      li.innerHTML = ingredient;
      this.recipeIngredients.appendChild(li);
    });
  }
}

const recipeButtonClick = () => {
  const recipeButton = document.querySelector('.recipe-button');
  const recipe = new Recipe();

  recipeButton.addEventListener('click', event => {
    event.preventDefault();
    recipe.fetchRecipe();
  });
};

recipeButtonClick();
