import React, { useContext, Fragment } from 'react'
import { Select, MenuItem } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import VerseList from './VerseList';
import { allSettings } from '../data/chapters/SettingsContext';
import Verse from './Verse';
import Chapters from '../data/Chapters'

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    selectOptions: {
      background: 'linear-gradient(80deg, #FE6B8BE0 40%, #FF8E53E0 90%)',

      border: 0,
      borderRadius: 5,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

      color: 'white',
      height: 40,
      padding: '0 30px',
      marginTop: '10px'
    },
  });

const ChapterList = (props, context) => {
    const Settings = useContext(allSettings);
    
    
    const [values, setValues] = React.useState({
        chapter: Settings.chapterNum
      });

    function handleChange(event) {
        Settings.setChapter(event.target.value)
        
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
        
    }

    const classes = useStyles();

    return  <Fragment>
                <Container maxWidth="sm" style={{textAlign: "center"}}>
                    <Select className={classes.selectOptions}
                        value={values.chapter}
                        onChange={handleChange}
                        inputProps={{
                            name: 'chapter'
                        }}
                    >
                        { Chapters.map(chapter => {
                            return <MenuItem value={chapter.id} key={chapter.id}>{chapter.name[Settings.chapterLang]}</MenuItem>
                        }) }
                    </Select> &nbsp;

                    <VerseList styleProps = {classes.selectOptions} />
                    
                </Container>
                <Verse />
            </Fragment>
}

export default ChapterList;