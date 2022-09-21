/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux"
import DogCard from "./DogCard"

const DogsImageGallery = () => {
    const { randomDogsList, } = useSelector(({ dogsReducer }) => ({ ...dogsReducer }))
    return (
        <div css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridAutoRows: '300px',
            height: '100vh',
            overflowY: 'auto'
        }}>
            {
                randomDogsList && randomDogsList.map((dog, i) => (
                    <DogCard {...dog} key={`dogs-${i}`} />
                ))
            }
        </div>
    )
}

export default DogsImageGallery