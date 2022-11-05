
import React, { useEffect, useState } from "react"
import useMealDBClient, { IMeal } from "../../client/useMealDBClient";
import { useParams } from "react-router";




export default function MealDetails() : JSX.Element {

    let mealParams = useParams<{id : string}>()

    useEffect(() => {
        if(!mealParams.id) return
        fetchById(mealParams.id);
    }, [mealParams.id]);



    const [meal, setMeal] = useState<IMeal>();
    const mealClient = useMealDBClient()


    const fetchById = async (id: string) => {
        try {
            const meal = await mealClient.getMealDetails(id);
            setMeal(meal)

        } catch (err) {
            console.error();
        }
    };
    return <div className="details-page">
        <h2>
            {meal?.strMeal}
        </h2>
        <div className="img-wrapper">
            <img alt="food" src={meal?.strMealThumb} ></img>
        </div>
        <p>Ingredients:</p>
        <ul>
            {meal?.strIngredient1 && <li className="ingredient">{meal.strIngredient1}</li>}
            {meal?.strIngredient2 && <li className="ingredient">{meal.strIngredient2}</li>}
            {meal?.strIngredient3 && <li className="ingredient">{meal.strIngredient3}</li>}
            {meal?.strIngredient4 && <li className="ingredient">{meal.strIngredient4}</li>}
            {meal?.strIngredient5 && <li className="ingredient">{meal.strIngredient5}</li>}
            {meal?.strIngredient6 && <li className="ingredient">{meal.strIngredient6}</li>}
            {meal?.strIngredient7 && <li className="ingredient">{meal.strIngredient7}</li>}
            {meal?.strIngredient8 && <li className="ingredient">{meal.strIngredient8}</li>}
            {meal?.strIngredient9 && <li className="ingredient">{meal.strIngredient9}</li>}
            {meal?.strIngredient10 && <li className="ingredient">{meal.strIngredient10}</li>}
            {meal?.strIngredient11 && <li className="ingredient">{meal.strIngredient11}</li>}
            {meal?.strIngredient12 && <li className="ingredient">{meal.strIngredient12}</li>}
            {meal?.strIngredient13 && <li className="ingredient">{meal.strIngredient13}</li>}
            {meal?.strIngredient14 && <li className="ingredient">{meal.strIngredient14}</li>}
            {meal?.strIngredient15 && <li className="ingredient">{meal.strIngredient15}</li>}
            {meal?.strIngredient16 &&<li className="ingredient">{meal.strIngredient16}</li>}
            {meal?.strIngredient17 && <li className="ingredient">{meal.strIngredient17}</li>}
            {meal?.strIngredient18 && <li className="ingredient">{meal.strIngredient18}</li>}
            {meal?.strIngredient19 && <li className="ingredient">{meal.strIngredient19}</li>}
            {meal?.strIngredient20 &&<li className="ingredient">{meal.strIngredient19}</li>}
        </ul>
        <span>Recipe:</span>
        <span className="recipe-text">{meal?.strInstructions}</span>
    </div>
}