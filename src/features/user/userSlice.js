import { createSlice } from '@reduxjs/toolkit';

const themes = {
    winter: 'theme-winter',
    dracula: 'theme-dracula',
}

const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user')) || { username: 'coding addict' };

const getFromLocalStorage = () => {
    const theme = localStorage.getItem('theme');
    document.getElementsByTagName('html')[0].classList.remove(theme === themes.winter ? themes.dracula : themes.winter);
    document.getElementsByTagName('html')[0].classList.add(theme);
    return theme;
}

const initialState = {
    user: getUserFromLocalStorage(),
    theme: getFromLocalStorage(),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const user = {...action.payload.user, token: action.payload.jwt};
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logoutUser: state => {
            state.user = null;
            localStorage.removeItem('user');
            console.log('logged out')
        },
        toggleTheme: state => {
            const { dracula, winter } = themes;
            state.theme = state.theme === dracula ? winter : dracula;
            document.getElementsByTagName('html')[0].classList.remove(state.theme === themes.winter ? themes.dracula : themes.winter);
            document.getElementsByTagName('html')[0].classList.add(state.theme);
            localStorage.setItem('theme', state.theme);
        }
    }
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;