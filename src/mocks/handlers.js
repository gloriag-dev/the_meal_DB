import {rest} from 'msw'

export const handlers = [
    rest.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({meals:[{
                idMeal:"52771",
                strMeal:"Spicy Arrabiata Penne",
                strDrinkAlternate:null,
                strCategory:"Vegetarian",
                strArea:"Italian",
                strInstructions:"Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg",
                strTags:"Pasta,Curry",
                strYoutube:"https://www.youtube.com/watch?v=1IszT_guI08",
                strIngredient1:"penne rigate",
                strIngredient2:"olive oil",
                strIngredient3:"garlic",
                strIngredient4:"chopped tomatoes",
                strIngredient5:"red chile flakes",
                strIngredient6:"italian seasoning",
                strIngredient7:"basil",
                strIngredient8:"Parmigiano-Reggiano",
                strIngredient9:"",
                strIngredient10:"",
                strIngredient11:"",
                strIngredient12:"",
                strIngredient13:"",
                strIngredient14:"",
                strIngredient15:"",
                strIngredient16:null,
                strIngredient17:null,
                strIngredient18:null,
                strIngredient19:null,
                strIngredient20:null,
                strMeasure1:"1 pound",
                strMeasure2:"1/4 cup",
                strMeasure3:"3 cloves",
                strMeasure4:"1 tin ",
                strMeasure5:"1/2 teaspoon",
                strMeasure6:"1/2 teaspoon",
                strMeasure7:"6 leaves",
                strMeasure8:"spinkling",
                strMeasure9:"",
                strMeasure10:"",
                strMeasure11:"",
                strMeasure12:"",
                strMeasure13:"",
                strMeasure14:"",
                strMeasure15:"",
                strMeasure16:null,
                strMeasure17:null,
                strMeasure18:null,
                strMeasure19:null,
                strMeasure20:null,
                strSource:null,
                strImageSource:null,
                strCreativeCommonsConfirmed:null,
                dateModified:null}
            ]
            })
        )
    }),
    
    rest.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                meals: [{
                    idMeal:"52772",
                    strMeal:"Teriyaki Chicken Casserole",
                    strDrinkAlternate:null,
                    strCategory:"Chicken",
                    strArea	:"Japanese",
                    strInstructions:"Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
                    strMealThumb:"https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
                    strTags:"Meat,Casserole",
                    strYoutube:"https://www.youtube.com/watch?v=4aZr5hZXP_s",
                    strIngredient1:	"soy sauce",
                    strIngredient2:	"water",
                    strIngredient3:	"brown sugar",
                    strIngredient4:	"ground ginger",
                    strIngredient5:	"minced garlic",
                    strIngredient6:	"cornstarch",
                    strIngredient7:	"chicken breasts",
                    strIngredient8:	"stir-fry vegetables",
                    strIngredient9:	"brown rice",
                    strIngredient10	: "",
                    strIngredient11	:"",
                    strIngredient12	:"",
                    strIngredient13	:"",
                    strIngredient14	:"",
                    strIngredient15	:""	,
                    strIngredient16	:null,
                    strIngredient17	:null,
                    strIngredient18	:null,
                    strIngredient19	:null,
                    strIngredient20	:null,
                    strMeasure1:"3/4 cup",
                    strMeasure2	:"1/2 cup",
                    strMeasure3	:"1/4 cup",
                    strMeasure4	:"1/2 teaspoon",
                    strMeasure5	:"1/2 teaspoon",
                    strMeasure6	:"4 Tablespoons",
                    strMeasure7	:"2",
                    strMeasure8	:"1 (12 oz.)",
                    strMeasure9	:"3 cups",
                    strMeasure10:"",
                    strMeasure11:"",
                    strMeasure12:"",
                    strMeasure13:"",
                    strMeasure14:"",
                    strMeasure15:"",
                    strMeasure16:null,
                    strMeasure17:null,
                    strMeasure18:null,
                    strMeasure19:null,
                    strMeasure20:null,
                    strSource:null,
                    strImageSource:null,
                    strCreativeCommonsConfirmed:null,
                    dateModified:null
            }]
             })
        )
    })
]