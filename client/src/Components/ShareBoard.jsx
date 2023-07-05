import React from 'react';
import { BoardBox, Title, CardList, Btn } from './ShareBoard.style.js';
import Carditem from './Carditem.jsx';
import { dummyData } from '../assets/mock/dummyData.js';


function ShareBoard ({ type }){

  const data = dummyData;

  const MESSAGE = {
    TITLE_WORKOUT: "오늘은 무슨 운동을 하셨나요?",
    TITLE_DIET: "오늘은 무슨 식단을 하셨나요?",
    BTN_WORKOUT: "운동 게시글 만들기",
    BTN_DIET: "식단 게시글 만들기" 
  }

  return (
    <BoardBox>
      <Title>
        <h1>
          {type === "workout" ? MESSAGE.TITLE_WORKOUT : MESSAGE.TITLE_DIET}
        </h1>
        <Btn>
          {type === "workout" ? MESSAGE.BTN_WORKOUT : MESSAGE.BTN_DIET}
        </Btn>
      </Title>
      <CardList>
        {data.posts.map(item => <Carditem key={item.postId} item={item}/>)}
      </CardList>
    </BoardBox>
  )
}

export default ShareBoard;