
import React from "react"
import axios, {AxiosInstance} from "axios"

export interface IMeal {
idMeal:string,
strMeal	:string,
strDrinkAlternate: string,
strCategory:string,
strArea: string,
strInstructions	: string,
strMealThumb: string,
strTags	:string,
strYoutube:string,
strIngredient1:	string,
strIngredient2:	string,
strIngredient3:	string,
strIngredient4:	string,
strIngredient5:	string,
strIngredient6:	string,
strIngredient7: string,
strIngredient8: string,
strIngredient9:	string,
strIngredient10:string,	
strIngredient11: string,	
strIngredient12: string,	
strIngredient13:string,
strIngredient14:string,
strIngredient15:string,
strIngredient16: string,
strIngredient17	:string,
strIngredient18	:string,
strIngredient19	:string,
strIngredient20	:string,
strMeasure1	:string,
strMeasure2	:string,
strMeasure3	:string,
strMeasure4	:string,
strMeasure5	:string,
strMeasure6	:string,
strMeasure7	:string,
strMeasure8	:string,
strMeasure9	:string,
strMeasure10:string,
strMeasure11:string,
strMeasure12:string,	
strMeasure13:string,
strMeasure14:string,
strMeasure15:string,
strMeasure16:string,
strMeasure17:string,
strMeasure18:string,
strMeasure19:string,
strMeasure20:string,
strSource:string,
strImageSource:string,
strCreativeCommonsConfirmed:string,
dateModified:string | Date,
}
export default function useMealDBClient() {
//www.themealdb.com/api/json/v1/1/search.php www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    const getBaseClient = (): AxiosInstance  => {
        return axios.create({
            baseURL: "https://www.themealdb.com/api/json/v1/1"
        })
    }

    const getByName = async (meal: string): Promise<IMeal[] > => {
        try {
            const res = await getBaseClient()({
                url: "search.php",
                params: {
                    s: meal
                }
            });
            return res.data.meals as IMeal[]

        } catch (err) {
            
            console.error(err);
            throw err
        }
    }


    const getMealDetails = async (id: string): Promise<IMeal>=> {
        try {
            const res = await getBaseClient()({
                url: "lookup.php",
                params: {
                    i: id
                }
            })
            return res.data?.meals?.[0] as IMeal
        } catch (err) {
            console.error(err, { id });
            throw err
        }
    }

    return {
        getByName,
        getMealDetails
    }

}