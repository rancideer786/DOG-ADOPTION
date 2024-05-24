// DogSearch.jsx
import React, { useState } from 'react';
import './Pro.css'
import Video from './Video';
import Footer from "../About/footer";
function Pro() {
    const [breedName, setBreedName] = useState('');
    const [dogData, setDogData] = useState(null);

    async function searchDog() {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${breedName}`, {
                headers: {
                    'X-Api-Key': 'JyQZM1ZKEYvD+TPSVTthgQ==vayuywqFAZHfvcC5', // Replace with your actual API key
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDogData(data[0]); // Assuming there's only one result for the specified breed
        } catch (error) {
            console.error('Error fetching dog data:', error);
        }
    }

    return (
        <>
        <h3 className='egg'>Search for a Breed</h3>
        <div className='container'>
            <div className="searchbox">
                <input
                    type="text"
                    placeholder="Enter dog breed name"
                    value={breedName}
                    onChange={(e) => setBreedName(e.target.value)}
                />
                <button onClick={searchDog}>Search</button>
            </div>
            {dogData && (
                <div className='dog-card'>
                    <h2>{dogData.name}</h2>
                    <div className='dogify'>
                        <img src={dogData.image_link} alt={dogData.name} className='dog-card img' />
                        {/* Display other dog information as needed */}
                        <div className='score'>
                            <h2>Know more about me</h2>
                            <span>Scores</span>
                            <p>Good with children: {dogData.good_with_children}</p>
                            <p>Good with other dogs: {dogData.good_with_other_dogs}</p>
                            <p>Shedding: {dogData.shedding}</p>
                            <p>Grooming: {dogData.grooming}</p>
                            <p>Good with strangers: {dogData.good_with_strangers}</p>
                            <p>Playfullness: {dogData.playfulness}</p>
                            <p>Protectiveness: {dogData.protectiveness}</p>
                            <p>Energy: {dogData.energy}</p>
                            <p>Barking : {dogData.barking}</p>
                            <p>Max Height: {dogData.max_height_female}</p>
                            <p>Minimum Life Expectancy: {dogData.min_life_expectancy}</p>


                            {/* Add more dog attributes as needed */}
                        </div></div>
                </div>
            )}
            
        </div>
        <div className='content'>
           <Video/>
           <div>
        <p>Explore Dog Breeds: Get to Know Their Characteristics Are you curious about different dog breeds? Whether you’re considering adopting a new furry friend or simply want to learn more, understanding breed characteristics is essential. Let’s dive into some popular dog breeds and discover what makes each one unique</p>
        Search Pet
        <br/>
<ol>
    <li>Adopt a dog who's right for you. Simply enter breed above to start your search.
</li>
<li> Once you find a pet, discover their characteristics. Contact them to learn more about how to meet and adopt the pet.
AdoptLove</li>
<li>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.
Free Vet Consultation</li>
<li>ThePetNest will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.
</li></ol>
        </div></div>
        <Footer/>
        </>
    );
}

export default Pro;
