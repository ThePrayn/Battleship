import React from 'react';
import { useEffect } from 'react';
import ComputerSquare from './ComputerSquare';

const ComputerGrid = ({ 
  computerGameGrid, 
  setComputerGameGrid, 
  computerShipYard, 
  setComputerShipYard, 
  computerShotGenerator, 
  playerPlacedShipsNumber, 
  winnerInfo, 
  setWinnerInfo 
}) => {  
  const squareShotHandler = (rowIndex, columnIndex) => {
    const computerGameGridCopy = [...computerGameGrid];
    computerGameGridCopy[rowIndex] = [...computerGameGridCopy[rowIndex]];
    if(computerGameGrid[rowIndex][columnIndex] === '.') {
      computerGameGridCopy[rowIndex][columnIndex] = 'M';
      setComputerGameGrid([...computerGameGridCopy]);
      computerShotGenerator();
    } else if(computerGameGrid[rowIndex][columnIndex] === 'M' || computerGameGrid[rowIndex][columnIndex] === 'X'); 
    else {
      shipHitHandler(computerGameGridCopy[rowIndex][columnIndex]); 
      computerGameGridCopy[rowIndex][columnIndex] = 'X';
      setComputerGameGrid([...computerGameGridCopy]);
      computerShotGenerator();
    }
  }

  const shipHitHandler = (shipNumber) => {
    const computerShipYardCopy = [...computerShipYard];
    const hitNumberCopy = computerShipYardCopy[shipNumber].hitNumber;
    computerShipYardCopy[shipNumber] = {...computerShipYardCopy[shipNumber], hitNumber: hitNumberCopy + 1};

    if (computerShipYardCopy[shipNumber].hitNumber === computerShipYardCopy[shipNumber].shipLength) {
      computerShipYardCopy[shipNumber] = {...computerShipYardCopy[shipNumber], sunkStatus: true};
    }
    setComputerShipYard(computerShipYardCopy);
  }

  useEffect(() => {
    let availableShips = computerShipYard.filter(ship => ship.sunkStatus === false);
    if (availableShips.length === 0) {
      setWinnerInfo('Ты выиграл! Поздравляю!🎉');
    }
  }, [computerShipYard]);

  return (
    <div className='computerGrid'>
      {computerGameGrid?.map((squaresArray, arrayNumber) => {
        return (
          <React.Fragment key={arrayNumber}>
            {squaresArray?.map((square, squareNumber) => {
              return (
                <ComputerSquare 
                  key={`${arrayNumber}${squareNumber}`}
                  rowIndex={arrayNumber}
                  columnIndex={squareNumber}
                  computerGameGrid={computerGameGrid}
                  squareShotHandler={squareShotHandler}
                  playerPlacedShipsNumber={playerPlacedShipsNumber}
                  winnerInfo={winnerInfo}
                >
                </ComputerSquare>
              )
            })}
          </React.Fragment>);
      })}
    </div>
  );
};

export default ComputerGrid;