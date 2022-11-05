
import React, { useState } from "react";
import useMealDBClient, { IMeal } from "../../client/useMealDBClient";
import { Link } from "react-router-dom";

function Home(): JSX.Element{
    let [meal, setMeal] = useState('')
    let [mealsList, setMealsList] = useState<IMeal[]>()


let mealClient = useMealDBClient()
    const handleMealChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setMeal(event.target.value)
    }
    const handleSubmit = () => {
        fetchBySearch(meal)
    }

    
    const fetchBySearch = async (meal: string) => {
        try {
            const data = await mealClient.getByName(meal);
            console.log(data, 'data')
            setMealsList(data)
           
        } catch (err) {
            console.error(err);
        }
    };
  
    return <div className='Home'>
        <div className="searchBar">
        <h2>Hey, I'm here for a specific meal!</h2>
        <form  onSubmit={handleSubmit} action="#">
          <label>Find a meal</label>
        <input type='text' id="search-meal"  onChange={handleMealChange}
            placeholder="Search..."  />
              <button
            type='submit'>Submit</button>
            </form>
    </div>
    <div>
      <ul>
        {mealsList && mealsList.map((meal, id) => {
          return <Link to={`/${meal.idMeal}`}><li key={id}> {meal.strMeal} </li></Link>
        })}
      </ul>
    </div>
    </div>
}

export default Home