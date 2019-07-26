import React, { useContext, Fragment } from 'react'
import { allSettings } from '../data/chapters/SettingsContext';
import { Container } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const Verse = (props) => {
    const Settings = useContext(allSettings);
   
    const { verseObj, verseNum, setVerse, chapterObj } = Settings;

    const handleFloatClick = (verse) => {
        if( verse && verse <= chapterObj.verses) {
            setVerse(verse);
        } else if(verse > chapterObj.verses) {
            console.log("Well, time to get to next chapter.")
        } else {
            console.log("Well, time to get to previous chapter.")
        }
    }

    return  <Fragment>
                <Fab onClick={() => handleFloatClick(verseNum - 1)} size="small" color="primary" className="floatButton floatLeft" style={{position: "fixed"}} >
                    <ChevronLeft />
                </Fab>

                <Fab onClick={() => handleFloatClick(verseNum + 1)} size="small" color="primary" className="floatButton floatRight" style={{position: "fixed"}} >
                    <ChevronRight />
                </Fab>
                { verseObj ? (
                    <Fragment>
                        <Container maxWidth="sm">
                    <span className="headings">
                        Verse
                    </span>
                    <p className="verse">
                        { verseObj.verse }
                    </p>
                </Container>
                <Container maxWidth="sm">
                    <span className="headings">
                        Transliteration
                    </span>
                    {verseObj.transliteration.map((item, index) => {
                        return <p className="transliteration" key={index}>{item}</p>;
                    })}
                </Container>

                <Container maxWidth="sm">
                    <span className="headings">
                        Word-to-Word
                    </span>
                    {verseObj.wordToWord.map((item, index) => {
                        return <p className="wordToWord" key={index}>{item}</p>;
                    })}
                </Container>

                <Container maxWidth="sm">
                    <span className="headings">
                        Translation
                    </span>
                    {verseObj.translation.map((item, index) => {
                        return <p className="translation" key={index}>{item}</p>;
                    })}

                    <br/>
                    <br/>
                    <br/>
                </Container>
                    </Fragment>
                ) : <h2>Something went wrong. :(</h2> }

                
            </Fragment>
}


export default Verse;