import { useState } from "react"

const useStoreScore = () => {
    const [score, setScore] = useState(0)

    const getScore = () => {
        return parseInt(localStorage.getItem('score') || '0')
    }

    const saveScore = (newScore: number) => {
        setScore(newScore)
        localStorage.setItem('score', newScore.toString())
    }

    return {
        score,
        saveScore,
        getScore
    }
    
}

export default useStoreScore;