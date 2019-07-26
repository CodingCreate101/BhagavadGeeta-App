import React, { createContext, useState } from 'react'
import Chapters from '../Chapters';

import chapterSN1 from './sn/chapter1';
import chapterEN1 from "./en/chapter1";
import chapterTE1 from "./te/chapter1";

import chapterSN2 from './sn/chapter2';
import chapterEN2 from './en/chapter2';
import chapterTE2 from './te/chapter2';

import chapterSN3 from './sn/chapter3';
import chapterEN3 from './en/chapter3';
import chapterTE3 from './te/chapter3';

import chapterSN4 from './sn/chapter4';
import chapterEN4 from './en/chapter4';
import chapterTE4 from './te/chapter4';

import chapterSN5 from './sn/chapter5';
import chapterEN5 from './en/chapter5';
import chapterTE5 from './te/chapter5';

import chapterSN6 from './sn/chapter6';
import chapterEN6 from './en/chapter6';
import chapterTE6 from './te/chapter6';

import chapterSN7 from './sn/chapter7';
import chapterEN7 from './en/chapter7';
import chapterTE7 from './te/chapter7';

import chapterSN8 from './sn/chapter8';
import chapterEN8 from './en/chapter8';
import chapterTE8 from './te/chapter8';

import chapterSN9 from './sn/chapter9';
import chapterEN9 from './en/chapter9';
import chapterTE9 from './te/chapter9';

import chapterSN10 from './sn/chapter10';
import chapterEN10 from './en/chapter10';
import chapterTE10 from './te/chapter10';

import chapterSN11 from './sn/chapter11';
import chapterEN11 from './en/chapter11';
import chapterTE11 from './te/chapter11';

import chapterSN12 from './sn/chapter12';
import chapterEN12 from './en/chapter12';
import chapterTE12 from './te/chapter12';

import chapterSN13 from './sn/chapter13';
import chapterEN13 from './en/chapter13';
import chapterTE13 from './te/chapter13';

import chapterSN14 from './sn/chapter14';
import chapterEN14 from './en/chapter14';
import chapterTE14 from './te/chapter14';

import chapterSN15 from './sn/chapter15';
import chapterEN15 from './en/chapter15';
import chapterTE15 from './te/chapter15';

import chapterSN16 from './sn/chapter16';
import chapterEN16 from './en/chapter16';
import chapterTE16 from './te/chapter16';

import chapterSN17 from './sn/chapter17';
import chapterEN17 from './en/chapter17';
import chapterTE17 from './te/chapter17';

import chapterSN18 from './sn/chapter18';
import chapterEN18 from './en/chapter18';
import chapterTE18 from './te/chapter18';


// import chapterSNxxx from './sn/chapterxxx';
// import chapterENxxx from './en/chapterxxx';
// import chapterTExxx from './te/chapterxxx';




const Geeta = {
    chapter1: {
        sn: chapterSN1,
        en: chapterEN1,
        te: chapterTE1
    },
    chapter2: {
        sn: chapterSN2,
        en: chapterEN2,
        te: chapterTE2
    },
    chapter3: {
        sn: chapterSN3,
        en: chapterEN3,
        te: chapterTE3
    },
    chapter4: {
        sn: chapterSN4,
        en: chapterEN4,
        te: chapterTE4
    },
    chapter5: {
        sn: chapterSN5,
        en: chapterEN5,
        te: chapterTE5
    },
    chapter6: {
        sn: chapterSN6,
        en: chapterEN6,
        te: chapterTE6
    },
    chapter7: {
        sn: chapterSN7,
        en: chapterEN7,
        te: chapterTE7
    },
    chapter8: {
        sn: chapterSN8,
        en: chapterEN8,
        te: chapterTE8
    },
    chapter9: {
        sn: chapterSN9,
        en: chapterEN9,
        te: chapterTE9
    },
    chapter10: {
        sn: chapterSN10,
        en: chapterEN10,
        te: chapterTE10
    },
    chapter11: {
        sn: chapterSN11,
        en: chapterEN11,
        te: chapterTE11
    },
    chapter12: {
        sn: chapterSN12,
        en: chapterEN12,
        te: chapterTE12
    },
    chapter13: {
        sn: chapterSN13,
        en: chapterEN13,
        te: chapterTE13
    },
    chapter14: {
        sn: chapterSN14,
        en: chapterEN14,
        te: chapterTE14
    },
    chapter15: {
        sn: chapterSN15,
        en: chapterEN15,
        te: chapterTE15
    },
    chapter16: {
        sn: chapterSN16,
        en: chapterEN16,
        te: chapterTE16
    },
    chapter17: {
        sn: chapterSN17,
        en: chapterEN17,
        te: chapterTE17
    },
    chapter18: {
        sn: chapterSN18,
        en: chapterEN18,
        te: chapterTE18
    }
    
    // chapteryyy: {
    //     sn: chapterSNyyy,
    //     en: chapterENyyy,
    //     te: chapterTEyyy
    // }
}

export const allSettings = createContext();

function SettingsContextProvider(props) {

    const [Setting, setSetting] = useState({
        chapterNum: 1,
        chapterObj: Chapters[0],
        verseNum: 1,
        verseObj: {
            verse: chapterSN1[0].verse,
            transliteration: [
                Geeta.chapter1.en[0].transliteration
            ],
            wordToWord: [
                Geeta.chapter1.en[0].wordToWord
            ],
            translation: [
                Geeta.chapter1.en[0].translation
            ]
        },
        chapterLang: 'en',
        transliteration: ['en'],
        wordToWord: ['en',],
        translation: ['en']

    });

    const setChapter = (chapNum) => {
        let SelChapter = Chapters.filter(chap => {
            return chap.id === chapNum
        })
        let ch = 'chapter' + chapNum;
        const verse = 1;

        setSetting({
            ...Setting,
            chapterNum: chapNum,
            chapterObj: SelChapter[0],

            verseNum: verse,
            verseObj: {
                ...Setting.verseObj,
                verse: Geeta[ch]['sn'][verse-1].verse,
                ...getInternalData(Setting, chapNum, verse)
            }
        });
    }

    const getInternalData = (settingsObj, chapterNum, verseNum) => {

        let ch = 'chapter' + chapterNum

        let transliteration = settingsObj.transliteration.map((lang) => {
            return Geeta[ch][lang][verseNum-1].transliteration
        })

        let wordToWord = settingsObj.wordToWord.map((lang) => {
            return Geeta[ch][lang][verseNum-1].wordToWord
        })

        let translation = settingsObj.translation.map((lang) => {
            return Geeta[ch][lang][verseNum-1].translation
        })

        return {
            transliteration,
            wordToWord,
            translation
        }
    }
    
    const setVerse = (verse) => {

        let ch = 'chapter' + Setting.chapterNum

        setSetting({
            ...Setting,
            verseNum: verse,
            verseObj: {
                ...Setting.verseObj,
                verse: Geeta[ch]['sn'][verse-1].verse,
                ...getInternalData(Setting, Setting.chapterNum, verse)
            }
        })
    }

    const updateLanguages = ({transliteration, wordToWord, translation, chapterLang}) => {

        setSetting({
            ...Setting,
            transliteration,
            wordToWord,
            translation,
            chapterLang,
            verseObj: {
                ...Setting.verseObj,
                ...getInternalData({transliteration, wordToWord, translation, chapterLang}, Setting.chapterNum, Setting.verseNum)
            }
        })
    }

    return  <allSettings.Provider value={{...Setting, setChapter, setVerse, updateLanguages}}>
                { props.children }
            </allSettings.Provider>
}


export default SettingsContextProvider;