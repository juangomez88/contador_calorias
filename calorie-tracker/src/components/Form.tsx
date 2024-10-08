import { categories } from "../data/categories"
import { useState, ChangeEvent } from "react"
import { Activity } from "../types"

export default function Form() {

    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    const hanldeChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const isNumberField = ['category', 'calories'].includes(e.target.id)

        console.log(isNumberField)

        setActivity({ 
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label
                    htmlFor="category"
                    className=" font-bold"
                >Categoría:
                </label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={hanldeChange}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div
                className="grid grid-cols-1 gap-3"
            >
                <label
                    htmlFor="name"
                    className=" font-bold"
                >Actividad:
                </label>
                <input
                    id="name"
                    type="text"
                    className=" border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Juago de Naranja, Ensalda, Ejercicio, Pesas, Bicicleta"
                    value={activity.name}
                    onChange={hanldeChange}
                />
            </div>

            <div
                className="grid grid-cols-1 gap-3"
            >
                <label
                    htmlFor="calories"
                    className=" font-bold"
                >Calorias:
                </label>
                <input
                    id="calories"
                    type="number"
                    className=" border border-slate-300 p-2 rounded-lg"
                    placeholder="Calorias. ej. 300 ó 500"
                    value={activity.calories}
                    onChange={hanldeChange}
                />
            </div>
            <input
                type="submit"
                className=" bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
                value='Guardar Comida o Guardar ejercicio'
            />

        </form>
    )
}
