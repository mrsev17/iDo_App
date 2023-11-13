import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeLanguage } from '../../redux/tasks/tasksSlice';
import './LanguageOptions.scss';

const RowRadioButtonsGroup = () => {
  const [selectLang, setSelectLanguage] = useState<string>('English');
  const languageState = useAppSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const dispatch = useAppDispatch();
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectLanguage(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <FormControl>
      <RadioGroup
        sx={{
          justifyContent: 'center',
          backgroundColor: '#6a5acd',
          borderRadius: '8px',
        }}
        row
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        value={languageState.currentLanguage}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value='English'
          control={
            <Radio
              sx={{
                color: '#9896f1',
                '&.Mui-checked': {
                  color: '#9896f1',
                },
              }}
            />
          }
          label={getCurrentLangDB.header.engOptionsToogle}
        />
        <FormControlLabel
          value='Ukrainian'
          control={
            <Radio
              sx={{
                color: '#9896f1',
                '&.Mui-checked': {
                  color: '#9896f1',
                },
              }}
            />
          }
          label={getCurrentLangDB.header.ukrOptionsToggle}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RowRadioButtonsGroup;
