import { useState } from "react";
import { IMovie } from "./interfaces";

import shrek from '../images/shrek.jpg'
import smallShrek from '../images/smallShrek.jpg'

import transporter from '../images/transporter.jpg'
import smallTransporter from '../images/smallTransporter.jpg'

import sw3 from '../images/sw3.jpg'
import smallSW3 from '../images/smallSW3.jpg'

export default () => {
    const movies: Array<IMovie> = [
        { name: 'Шрек', genre: 'Комедия', backgroundLink: shrek, description: 'Мультфильм тысячилетия', 
        smallBackground: smallShrek, trailerLink: 'https://www.youtube.com/embed/CwXOrWvPBPk' },
        { name:'Перевозчик', genre: 'Боевик', backgroundLink: transporter, 
        description: 'Фильм, сделавший Джейсона Стейтема по-нестоящему известным',
        smallBackground: smallTransporter, trailerLink: 'https://www.youtube.com/embed/7FnbLyv2oio'},
        { name: 'Звездные войны: Месть Ситхов', genre: 'Фантастика', backgroundLink: sw3, 
        description: 'Республика медленно погружается во тьму. Лишь рыцари-джедаи, защитники мира и справедливости, могут противостоять злу, которое вскоре поглотит галактику...',
        smallBackground: smallSW3, trailerLink: 'https://www.youtube.com/embed/5UnjrG_N8hU' },
    ];

    return {
        movies
    }
}