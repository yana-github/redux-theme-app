import { MAKE_LIGHT, MAKE_DARK } from "./redux/actions";

import { useDispatch, useSelector} from 'react-redux';

import { store } from "./redux/store";


const ThemeApp = () => {

    const dispatch = useDispatch();
    const themeStyles = useSelector((state) => state.themeStyles)

const changeThemeLight = () => {
    dispatch(MAKE_LIGHT);
}

const changeThemeDark = () => {
    dispatch(MAKE_DARK);
}

console.log('all store', store.getState()); 

    return (
        
        <div
        style={
            themeStyles === 'dark' ? {backgroundColor: 'black', color: 'white'} : {backgroundColor: 'lightblue'}
        }>

        <button onClick={changeThemeLight}>Cветлая тема</button>
        <button onClick={changeThemeDark}>Темная тема</button>

        {
            themeStyles && <h3>{`выбранная тема ${themeStyles}`}</h3>

        }
        </div>
    )
}

export default ThemeApp;