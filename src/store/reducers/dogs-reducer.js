import { createReducer } from '@reduxjs/toolkit'
import * as DogsActions from '../actions/dogs-actions'

const initialState = {
    dogsList: [],
    randomDogsList: [],
    dogsListSummary: []
}

const DogsReducer = createReducer(initialState, (builder) => {
    builder.addCase(DogsActions.setDogsList, (state, action) => ({
        ...state,
        dogsList: action.payload,
    }))
    builder.addCase(DogsActions.setRandomDogsList, (state, action) => ({
        ...state,
        randomDogsList: action.payload,
    }))
    builder.addCase(DogsActions.setDogsListSummary, (state, action) => ({
        ...state,
        dogsListSummary: action.payload,
    }))
    builder.addCase(DogsActions.incrementDogLikes, (state, action) => ({
        ...state,
        randomDogsList: state.randomDogsList.map((dog) => dog.name === action.payload ? { ...dog, likes: dog.likes + 1 } : dog),
        dogsListSummary: state.dogsListSummary.map((dog) => dog.name === action.payload ? { ...dog, likes: dog.likes + 1 } : dog)
    })
    )
})

export default DogsReducer