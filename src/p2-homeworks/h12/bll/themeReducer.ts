const initState = {
    value: 'some',
    themes: ['dark', 'red', 'some', 'new']
};

export type InitialStateThemeType = {
    value: string
    themes: Array<string>
}

type ActionsType = ChangeThemeACType;

export const themeReducer = (state: InitialStateThemeType = initState, action: ActionsType):
    InitialStateThemeType => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {...state, value: action.value};
        }
        default:
            return state;
    }
};

type ChangeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (value: string) => ({
    type: 'CHANGE_THEME', value
} as const); // fix any