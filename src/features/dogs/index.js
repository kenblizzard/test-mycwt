/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setDogsList, setDogsListSummary, setRandomDogsList } from '../../store/actions/dogs-actions';
import { useDispatch, } from 'react-redux';
import DogsImageGallery from './components/DogsImageGallery';
import DogsSummary from './components/DogsSummary';

const Dogs = () => {
    const [isLoading, toggleIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        toggleIsLoading(true)
        getDogs()
    }, [])

    const getDogs = async () => {
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(async ({ data }) => {
                let dogsList = Object.keys(data.message).map((key) => ({
                    name: key,
                    likes: 0,
                    image: '',
                }))

                dispatch(setDogsList(dogsList))
                await generateRandomDogsList(dogsList)
            }).finally(
                () => toggleIsLoading(false)
            )
    }

    const getDogImage = async (dogBreedName) => {
        const response = await axios.get(`https://dog.ceo/api/breed/${dogBreedName}/images/random`)
        return response.data.message
    }

    const generateRandomDogsList = async (dogsList) => {
        let random100 = []
        for (var i = 0; i < 100; i++) {
            random100.push(dogsList[Math.floor((Math.random() * dogsList.length - 1) + 1)])
        }

        let uniqueList = [...new Set(random100)]
        let uniqueListWithImages = await Promise.all(uniqueList.map(async (dog) => {
            let image = await getDogImage(dog.name)
            return { ...dog, image, imageCount: 0 }
        }))
        let randomDogsList = random100.map((dog) => {
            let index = uniqueListWithImages.findIndex(({ name }) => dog.name === name)
            uniqueListWithImages[index].imageCount += 1
            return {
                ...dog,
                image: uniqueListWithImages[index].image
            }
        })

        dispatch(setRandomDogsList(randomDogsList))
        dispatch(setDogsListSummary(uniqueListWithImages.sort((a, b) => a.name.localeCompare(b.name))))
    }

    return (
        <>
            {
                isLoading &&
                <h1 css={{ textAlign: 'center' }}>Loading... </h1>
            }
            {
                !isLoading &&
                <div css={{
                    display: 'grid',
                    gridTemplateColumns: '15% 85%',
                    padding: '2rem 1rem',
                }}>
                    <DogsSummary />
                    <DogsImageGallery />
                </div>
            }
        </>
    );
}

export default Dogs;
