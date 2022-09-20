/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux"

const DogsSummary = () => {
    const { dogsListSummary } = useSelector(({ dogsReducer }) => ({ ...dogsReducer }))
    return (
        <div css={{
            display: 'flex',
            flexFlow: 'column',
            gap: '1.5rem',
            height: '95vh',
            overflowY: 'auto',
        }}>
            {
                dogsListSummary && dogsListSummary.map(({ name, imageCount, likes, }, index) =>
                (
                    <div
                        key={`summary-${index}`}
                        css={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '0.2rem',
                            textTransform: 'capitalize'
                        }}>
                        <strong css={{ textTransform: 'uppercase' }}>{name}</strong>
                        <span>image count: {imageCount}</span>
                        <span>likes: {likes}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default DogsSummary