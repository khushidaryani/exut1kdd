import React, { useState } from 'react'
import './App.css'
import Noticia from './components/Noticia'

function App() {

  const allNews = [{
    id:0,
    title:'Título 1',
    date:'22 de octubre de 2024',
    avatarURL:'/avatar01.png',
    imageURL:'/sky.jpg',
    imageSize:194,
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numberLikes:52,
    descriptionAvatar:'Male avatar with brown hair and a grey hoodie',
    descriptionImage:'Sky with clouds and a colourful sunset',
  },

  {
    id:1,
    title:'Título 2',
    date:'22 de octubre de 2024',
    avatarURL: '/avatar02.png',
    imageURL:'/sea.jpg',
    imageSize:194,
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numberLikes:61,
    descriptionAvatar:'Female avatar with black hair and red T-Shirt',
    descriptionImage:'Sea with a sun above',
  },

  {
    id:2,
    title:'Título 3',
    date:'22 de octubre de 2024',
    avatarURL: '/avatar03.png',
    imageURL:'/tux.jpg',
    imageSize:194,
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numberLikes:961,
    descriptionAvatar:'Duck face avatar',
    descriptionImage:'I love Linux logo',
  },

  {
    id:3,
    title:'Título 4',
    date:'22 de octubre de 2024',
    avatarURL: '/avatar04.png',
    imageURL:'/mario.jpg',
    imageSize:194,
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numberLikes:352,
    descriptionAvatar:'Smiling Mario avatar',
    descriptionImage:'Mario walking with excitement',
  }]

  return (
    <>
      {allNews.map((news) => (
        <Noticia
          key={news.id}
          title={news.title}
          date={news.date}
          avatarURL={news.avatarURL}
          imageURL={news.imageURL}
          imageSize={news.imageSize}
          text={news.text}
          numberLikes={news.numberLikes}
          descriptionAvatar={news.descriptionAvatar}
          descriptionImage={news.descriptionImage}
        />
      ))}
    </>
  )
}

export default App
