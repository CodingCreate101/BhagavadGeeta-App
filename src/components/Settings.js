import React, { useContext } from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { allSettings } from '../data/chapters/SettingsContext';
import { Container, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

function Settings(props) {

    const Settings = useContext(allSettings);

    const checkStatus = (section, langu) => {
        var index = Settings[section].indexOf(langu);
        if(index === -1) {
            return false;
            
        } else if (index > -1) {
            return true;
        }
    }

    const [state, setState] = React.useState({
        transliterationEN: checkStatus('transliteration', 'en'),
        transliterationTE: checkStatus('transliteration', 'te'),
        transliterationSN: checkStatus('transliteration', 'sn'),

        wordToWordEN: checkStatus('wordToWord', 'en'),
        wordToWordTE: checkStatus('wordToWord', 'te'),
        wordToWordSN: checkStatus('wordToWord', 'sn'),

        translationEN: checkStatus('translation', 'en'),
        translationTE: checkStatus('translation', 'te'),
        translationSN: checkStatus('translation', 'sn'),
        chapterLang: Settings.chapterLang
    });

    const [lang, setLang] = React.useState({
        transliteration: Settings.transliteration,
        wordToWord: Settings.wordToWord,
        translation: Settings.translation,
        chapterLang: Settings.chapterLang
    });
    
    const handleChange = (section, langu) => event => {

        let property = section + langu.toUpperCase()

        setState({
            ...state,
            [property]: event.target.checked
        });

        let tempVar = lang[section];
        var index = tempVar.indexOf(langu);
        if(event.target.checked && index === -1) {
            tempVar.push(langu)
            setLang({
                ...lang,
                [section]: tempVar
            });
        } else if (index > -1) {
            tempVar.splice(index, 1);
            setLang({
                ...lang,
                [section]: tempVar
            });
        }
    };

    const handleSave = () => {
        Settings.updateLanguages(lang)
        props.history.push('/');
    }

    function changeChapLang(event) {
        setState({
            ...state,
            chapterLang: event.target.value
        });

        setLang({
            ...lang,
            chapterLang: event.target.value
        })
      }

    return (
        <Container maxWidth="sm">
            <Button onClick={handleSave} variant="contained" color="secondary" className="saveButton">
                Save All
            </Button>
            <h3>Chapter title</h3>
            <Divider />
            <FormGroup row>
                <List component="nav" >
                    <ListItem>
                        <RadioGroup
                            name="cnl"
                            value={state.chapterLang}
                            onChange={changeChapLang}
                        >
                            <FormControlLabel value="en" control={<Radio />} label="English" />
                            <FormControlLabel value="te" control={<Radio />} label="తెలుగు" />
                        </RadioGroup>
                    </ListItem>
                </List>
            </FormGroup>

            <h3>Transliteration:</h3>
            <Divider />
            <FormGroup row>
                <List component="nav" >
                    <ListItem>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.transliterationEN}
                                    onChange={handleChange('transliteration', 'en')}
                                    value="transliterationEN"
                                />
                            }
                            label="English"
                        />
                    </ListItem>

                    <ListItem>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.transliterationTE}
                                    onChange={handleChange('transliteration', 'te')}
                                    value="transliterationTE"
                                />
                            }
                            label="తెలుగు"
                        />
                    </ListItem>
                </List>
            </FormGroup>

            <h3>Word To Word translation:</h3>
            <Divider />
            <FormGroup row>
                <List component="nav" >
                    <ListItem>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.wordToWordEN}
                                    onChange={handleChange('wordToWord', 'en')}
                                    value="wordToWordEN"
                                />
                            }
                            label="English"
                        />
                    </ListItem>

                    <ListItem>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.wordToWordTE}
                                    onChange={handleChange('wordToWord', 'te')}
                                    value="wordToWordTE"
                                />
                            }
                            label="తెలుగు"
                        />
                    </ListItem>
                </List>
            </FormGroup>

            <h3>Translation:</h3>
            <Divider />
            <FormGroup row>
                <List component="nav" >
                    <ListItem>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.translationEN}
                                    onChange={handleChange('translation', 'en')}
                                    value="translationEN"
                                />
                            }
                            label="English"
                        />
                    </ListItem>

                    <ListItem>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.translationTE}
                                    onChange={handleChange('translation', 'te')}
                                    value="translationTE"
                                />
                            }
                            label="తెలుగు"
                        />
                    </ListItem>
                </List>
            </FormGroup>
            <Divider />
        </Container>
    )
}

export default Settings;


// TODO: Try using localStorage for language settings on next update