import { ISeries } from "./interfaces";

import office from '../images/office.jpg'
import smallOffice from '../images/smallOffice.jpg'

import house from '../images/house.jpg'
import smallHouse from '../images/smallHouse.jpg'

import forever from '../images/forever.jpg'
import smallForever from '../images/smallForever.jpg'

export default () => {
    const series: Array <ISeries> = [
        {name: 'Офис', genre: 'Ситуационная комедия', backgroundLink: office,
        description: 'Скучающие от безделья клерки пытаются ужиться с безумным боссом. Виртуозный ситком про рабочие будни',
        trailerLink: 'https://www.youtube.com/embed/gO8N3L_aERg', posterLink: smallOffice, 
        seasons: 9},
        {name: 'Доктор Хаус', genre: 'Медицинская драма', backgroundLink: house,
        description: 'Все люди врут, но этого не проведешь. Выдающийся медицинский детектив о докторе-гении',
        trailerLink: 'https://www.youtube.com/embed/64LGOCKxTdE', posterLink: smallHouse, 
        seasons: 8},
        {name: 'Вечность', genre: 'Ситуационная комедия', backgroundLink: forever,
        description: 'Обаятельный судмедэксперт пытается найти причину своего бессмертия. Захватывающий детектив в духе «Менталиста»',
        trailerLink: 'https://www.youtube.com/embed/-JmVnyJ16d4', posterLink: smallForever, 
        seasons: 1}

    ];

    return {
        series
    }
}