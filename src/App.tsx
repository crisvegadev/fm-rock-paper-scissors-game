import React from 'react';
import AuthorArea from './components/areas/author_area';
import GameArea from './components/areas/game_area';
import GameBonusArea from './components/areas/game_bonus_area';
import ModalArea from './components/areas/modal_area';
import PickedArea from './components/areas/picked_area';
import StatusArea from './components/areas/status_area';
import HeaderTitle from './components/header_title';
import RulesModal from './components/rules_modal';
import UseGameLogic from './hooks/useGameLogic';
import useStoreScore from './hooks/useStoreScore';

function App() {

  const { playerHand, computerHand, winner, gameModeChanged, play, reset, setGameModeChanged } = UseGameLogic()
  const { getScore } = useStoreScore()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <main>

      <HeaderTitle 
        score={ getScore() }
        changeMode={ (changed: boolean) => setGameModeChanged(changed) }
        isChangedMode={ gameModeChanged } />

      { gameModeChanged ? 
        <GameBonusArea 
          playerHand={ playerHand } 
          play={ play } /> : 
        <GameArea 
          playerHand={ playerHand } 
          play={ play } /> }

      <PickedArea 
        playerHand={ playerHand } 
        computerHand={ computerHand } 
        winner={ winner } />

      <StatusArea 
        computerHand={ computerHand } 
        winner={ winner } 
        reset={ reset }  />
     
      <ModalArea 
        setIsModalOpen={ () => setIsOpen(true) } />

      <RulesModal 
        isOpen={isOpen} 
        onClose={ () => setIsOpen(!isOpen) }
        modeChanged={ gameModeChanged } />

      <AuthorArea />

    </main>
  );
}

export default App;
