import './App.css';
import Game from './Game';
import React from 'react';

const initBoard = (boardSize, minesNum) => {
  console.log('initBoard!');
  const board = createBoard(boardSize);
  placeMines(board, minesNum, boardSize);
  calculateBoardValues(boardSize, board);
  return board;
}

const createBoard = (boardSize) => {
  let minesBoard = [];
  for (let i = 0; i < boardSize; i++) {
      minesBoard.push({id: i, mine: false, value: 0});
  }
  return minesBoard;
};

const placeMines = (minesBoard, minesNumber, boardSize) => {
  let minesCount = 0;
  while (minesCount < minesNumber) {
      let mineCoordinate = Math.floor(Math.random() * boardSize);
      if (minesBoard[mineCoordinate]['mine'] === false) {
          minesBoard[mineCoordinate]['mine'] = true;
          minesCount++;
      }
  }
}

const calculateBoardValues = (boardSize, minesBoard) => {
  const rowSize = Math.sqrt(boardSize);
  for (let i = 0; i < boardSize; i++) {
      if (minesBoard[i].mine === true) {
          calculateSurroundingFieldsValue(i, rowSize, boardSize, minesBoard);   
      }
  }
};

const calculateSurroundingFieldsValue = (fieldIndex, rowSize, boardSize, minesBoard) => {
  // upper row
  if ((fieldIndex-rowSize-1 >= 0) && (fieldIndex%rowSize-1 >= 0)) {
      minesBoard[fieldIndex-rowSize-1].value++; 
  }
  if (fieldIndex-rowSize >= 0) {
      minesBoard[fieldIndex-rowSize].value++; 
  }
  if ((fieldIndex-rowSize+1 >= 0) && (fieldIndex%rowSize+1 < rowSize)) {
      minesBoard[fieldIndex-rowSize+1].value++; 
  }
  // row of mines
  if (fieldIndex%rowSize-1 >= 0) {
      minesBoard[fieldIndex-1].value++; 
  }
  if (fieldIndex%rowSize+1 < rowSize) {
      minesBoard[fieldIndex+1].value++; 
  }
  // lower row
  if ((fieldIndex+rowSize-1 < boardSize) && (fieldIndex%rowSize-1 >= 0)) {
      minesBoard[fieldIndex+rowSize-1].value++; 
  }
  if (fieldIndex+rowSize < boardSize) {
      minesBoard[fieldIndex+rowSize].value++; 
  }  
  if ((fieldIndex+rowSize+1 < boardSize) && (fieldIndex%rowSize+1 < rowSize)) {
      minesBoard[fieldIndex+rowSize+1].value++; 
  }      

};


function App() {

  const boardSize = 36;
  const minesNum = 4;
  const board = initBoard(boardSize, minesNum);
  console.log(board);

  return (
      <Game
        board={board}
        boardSize={boardSize}
        minesNum={minesNum}
        />
  );
}

export default App;
