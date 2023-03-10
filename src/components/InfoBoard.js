import React from 'react';

const InfoBoard = ( {
  setPlayerGameGrid,
  setPlayerShipYard,
  setComputerGameGrid,
  setComputerShipYard,
  setPlayerPlacedShipsNumber,
  winnerInfo,
  setWinnerInfo,
  computerShipPlacementHandler,
} ) => {
  const restartBtnHandler = () => {
    setPlayerGameGrid([
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
    ]);

    setPlayerShipYard([
      {shipNumber: 0, shipLength: 5, shipName: 'Aircraft Carrier', hitNumber: 0, sunkStatus: false},
      {shipNumber: 1, shipLength: 4, shipName: 'Battleship',  hitNumber: 0, sunkStatus: false},
      {shipNumber: 2, shipLength: 3, shipName: 'Submarine',  hitNumber: 0, sunkStatus: false},
      {shipNumber: 3, shipLength: 3, shipName: 'Cruiser',  hitNumber: 0, sunkStatus: false},
      {shipNumber: 4, shipLength: 2, shipName: 'Destroyer',  hitNumber: 0, sunkStatus: false}
    ]);

    setComputerGameGrid([
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
    ]);

    setComputerShipYard([
      {shipNumber: 0, shipLength: 5, shipName: 'Aircraft Carrier', hitNumber: 0, sunkStatus: false},
      {shipNumber: 1, shipLength: 4, shipName: 'Battleship',  hitNumber: 0, sunkStatus: false},
      {shipNumber: 2, shipLength: 3, shipName: 'Submarine',  hitNumber: 0, sunkStatus: false},
      {shipNumber: 3, shipLength: 3, shipName: 'Cruiser',  hitNumber: 0, sunkStatus: false},
      {shipNumber: 4, shipLength: 2, shipName: 'Destroyer',  hitNumber: 0, sunkStatus: false}
    ]);

    setPlayerPlacedShipsNumber(0);

    setWinnerInfo('');
    computerShipPlacementHandler();
  }
  return (
    <div className='infoBoard'>
      <p>{winnerInfo ? winnerInfo : '???????????????? ???????? 5 ???????????????? ?? ?????????????? ????????????????. ???????????? ???????????? ???????? ???????????????????????? ?????????????????????? ??????????????'}</p>
      <div className='btnHolder'>
        <button className='button restartBtn' onClick={() => restartBtnHandler()}>{winnerInfo ? '?????????????? ??????????' : '??????????????'}</button>
      </div>
    </div>
  );
};

export default InfoBoard;