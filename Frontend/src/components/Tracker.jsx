import React, { useState } from 'react';
import './Tracker.css';

function Tracker() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const fetchNutritionData = () => {
        fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'toSYXtP00zD0wD8kW4S9Kg==Bpvpw0dbMgbDLC7w'
            },
            contentType: 'application/json'
        })
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(result)) {
                    setResult([...result, ...data.items]);
                } else {
                    setResult(data.items);
                }
                setError(null);
            })
            .catch(error => {
                setError('Error fetching data');
                setResult(null);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchNutritionData();
    };

    return (
        <div className='tracker-wrapper'>
            <div className="tracker-container">
                <h1 >Calorie-Tracker</h1>
                <form onSubmit={handleSubmit} className="tracker-form">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter food items"
                        className="tracker-input"
                    />
                    <button type="submit" className="tracker-button">Get Nutrition Info</button>
                </form>
                {error && <pre className="tracker-error">{error}</pre>}
                {result && (
                    <table className="tracker-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Calories</th>
                                <th>Serving Size</th>
                                <th>Total Fat</th>
                                <th>Sugar</th>
                                <th>Protein</th>
                                <th>Carbohydrates</th>

                            </tr>
                        </thead>
                        <tbody>
                            {result.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.calories}</td>
                                    <td>{item.serving_size_g} g</td>
                                    <td>{item.fat_total_g} g</td>
                                    <td>{item.sugar_g} g</td>
                                    <td>{item.protein_g} g</td>
                                    <td>{item.carbohydrates_total_g} g</td>
                                    <td>
                                        <button type='button'
                                            onClick={() => {
                                                result.splice(index, 1);

                                                setResult([...result]);
                                            }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Tracker;
