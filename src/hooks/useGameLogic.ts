import { useEffect, useMemo, useState } from 'react'
import useStoreScore from './useStoreScore'

const UseGameLogic = () => {

    const delay = (ms: number) => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const [player, setPlayer] = useState<string>('')
    const [computer, setComputer] = useState<string>('')
    const [winner, setWinner] = useState<string>('')   // 'player', 'computer', 'tie'
    const [gameOver, setGameOver] = useState<boolean>(false)
    const {saveScore, getScore} = useStoreScore()
    const [gameModeChanged, setGameModeChanged] = useState<boolean>(false)

    useEffect(()  => {
        if (player && computer) {
            if (player === computer) {
                setWinner('Tie')
            } else if ( (player === 'rock' && computer === 'scissors') || 
                        (player === 'paper' && computer === 'rock') || 
                        (player === 'scissors' && computer === 'paper') ) {

                setWinner('Player')
                saveScore(getScore() + 1)

            } else if ( (player === 'spock' && (computer === 'scissors' || computer === 'rock')) ||
                        (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
                        (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
                        (player === 'rock' && (computer === 'lizard' || computer === 'scissors')) ||
                        (player === 'lizard' && (computer === 'spock' || computer === 'paper')) ) {

                setWinner('Player')
                saveScore(getScore() + 1)

            } else {
                setWinner('Computer')
            }
            setGameOver(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [player, computer])

    const playerHand = useMemo(() => {
        return player.toLocaleLowerCase().toString()
    }, [player])

    const computerHand = useMemo(() => {
        return computer.toLocaleLowerCase().toString()
    }, [computer])

    const play = async (hand: string) => {
        setPlayer(hand)
        await delay(500)
        setComputer(gameModeChanged ? randomHandBonus() : randomHand())
    }

    const randomHand = () => {
        const hands = ['rock', 'paper', 'scissors']
        const randomIndex = Math.floor(Math.random() * hands.length)
        return hands[randomIndex]
    }

    const randomHandBonus = () => {
        const hands = ['rock', 'paper', 'scissors', 'lizard', 'spock']
        const randomIndex = Math.floor(Math.random() * hands.length)
        return hands[randomIndex]
    }

    const reset = () => {
        setPlayer('')
        setComputer('')
        setWinner('')
        setGameOver(false)
    }

    return {
        playerHand,
        computerHand,
        winner,
        gameOver,
        play,
        reset,
        gameModeChanged,
        setGameModeChanged
    }

}

export default UseGameLogic