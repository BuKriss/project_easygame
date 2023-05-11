import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineCalendar} from 'react-icons/ai';
import {FaVolleyballBall} from 'react-icons/fa';
import {ImManWoman} from 'react-icons/im';
import {GiVolleyballBall} from 'react-icons/gi';
import SectionHead from '../../components/SectionHead/SectionHead';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import '../../pages/games/games.css';

const SearchBar = () => {
    const [gamePlace, setGamePlace] = useState('');
    const [date, setDate] = useState(new Date());
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        man: 1,
        woman: 1
    }); 

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions(prev=>{return {
            ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
        }})
    }

    const handleSearch = () => {
        navigate('/gamesList', {state: {gamePlace, date, options }})
    }

    return (
        <div className='container searchBar__container'>
            <SectionHead icon={<GiVolleyballBall/>} title="Find the Game" className="search__head"/>
            <div className='searchBar-items'> 
                <div className='searchBar-item'>
                    <FaVolleyballBall className='searchBar_icon'/>
                    <input type="text"
                    placeholder='Choose the place'
                    className='searchBar_input'
                    onChange={e => setGamePlace(e.target.value)}/>         
                </div>
                <div className='searchBar-item'>
                    <AiOutlineCalendar className='searchBar_icon'/>
                    <span className='searchBar-date_text'></span>  
                    <DatePicker onChange={setDate} value={date}/>                          
                </div>
                <div className='searchBar-item'>
                    <ImManWoman className='searchBar_icon'/>
                    <span onClick={() => setOpenOptions(! openOptions)} className='searchBar-options'>{`${options.man} man ${options.woman} woman`}</span>
                    {openOptions && <div className='options'>
                        <div className="optionItem">
                            <span className="optionText">Man</span>
                            <div className="optionCounter">
                                <button 
                                type="submit"
                                disabled={options.man <= 0} 
                                className='btn btn sm' 
                                onClick={() => handleOption('man', 'd')}>
                                -</button>
                                <span className="optionCounterNumber">{options.man}</span>
                                <button  
                                type="submit" 
                                className='btn btn sm' 
                                onClick={() => handleOption('man', 'i')}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Woman</span>
                            <div className="optionCounter">
                                <button 
                                type="submit"
                                className='btn btn sm' 
                                disabled={options.woman <= 0} 
                                onClick={() => handleOption('woman', 'd')}>
                                -</button>
                                <span className="optionCounterNumber">{options.woman}</span>
                                <button 
                                type="submit"
                                className='btn btn sm' 
                                onClick={() => handleOption('woman', 'i')}>+</button>
                            </div>
                        </div>
                    </div>}           
                </div>
                <div className='searchBar-item'>
                    <button 
                        type="submit" 
                        className='btn btn lg'
                        onClick={handleSearch}>Search</button>           
                </div>
            </div>
        </div>
    )
};

export default SearchBar;