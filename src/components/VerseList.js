import React, { useEffect, useState, useContext} from 'react'
import { Select, MenuItem } from '@material-ui/core';
import { allSettings } from '../data/chapters/SettingsContext';


const VerseList = (props) => {
    const Settings = useContext(allSettings);
    let arr = new Array(Settings.chapterObj.verses)

    const [values, setValues] = useState({
        verse: Settings.verseNum
    });

    function handleChange(event) {
        Settings.setVerse(event.target.value);
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
    }

    for(var i=0; i<arr.length; i++) {
        arr[i] = i;
    }

    useEffect(() => {
        setValues(oldValues => ({
            ...oldValues,
            verse: Settings.verseNum,
          }));
        }, [Settings.verseNum])

    return  <Select className={props.styleProps}
                value={values.verse}
                onChange={handleChange}
                inputProps={{
                name: 'verse'
                }}
            >

                { arr.map(verse => {
                    return <MenuItem value={verse+1} key={verse}>Verse {verse+1}</MenuItem>
                }) }
            </Select>
}


export default VerseList;