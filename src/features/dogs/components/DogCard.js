/** @jsxImportSource @emotion/react */
import { useDispatch } from "react-redux"
import { incrementDogLikes } from "../../../store/actions/dogs-actions"

const DogCard = ({ image, name, likes }) => {
    const dispatch = useDispatch()

    const handleDogClick = (name) => {
        dispatch(incrementDogLikes(name))
    }

    return (
        <div css={{
            display: 'flex',
            flexFlow: 'column',
            gap: '1rem',
            border: '1px solid black',
            cursor: 'pointer',
            textTransform: 'capitalize'
        }}
            onClick={() => handleDogClick(name)}
        >
            <img
                src={image}
                css={{
                    width: '100%',
                    aspectRatio: '1.8',
                }}
            />
            <div css={{ padding: '0.5rem 1rem' }}>
                <span css={{ marginBottom: '1rem', fontWeight: 'bold' }}>{name}</span>
                <div>likes: {likes} </div>
            </div>

        </div>
    )
}

export default DogCard