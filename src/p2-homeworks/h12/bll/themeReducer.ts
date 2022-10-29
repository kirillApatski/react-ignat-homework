const initState = {
    theme: 'some'
};
type initialStateType = {
    theme: string
}

export const themeReducer = (state = initState, action: changeThemeCType): initialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                theme: action.theme
            };
        }
        default: return state;
    }
};


export type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => ({type: 'CHANGE-THEME', theme} as const); // fix any