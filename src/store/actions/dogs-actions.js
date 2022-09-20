import { createAction } from '@reduxjs/toolkit'

export const setDogsList = createAction('SET_DOGS_LIST', 
    (dogs)=> ({
        payload: dogs
    })
)

export const setRandomDogsList = createAction('SET_RANDOM_DOGS_LIST', 
    (randomDogs)=> ({
        payload: randomDogs
    })
)

export const setDogsListSummary = createAction('SET_DOGS_LIST_SUMMARY', 
    (summary)=> ({
        payload: summary
    })
)

export const incrementDogLikes = createAction('INCREMENT_DOG_LIKES', 
    (dogBreedName)=> ({
        payload: dogBreedName
    })
)

