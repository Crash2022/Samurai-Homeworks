const initState = {
    isLoading: false
}

export type InitialStateType = {
    isLoading: boolean
}

export type LoadingReducerActionsType = LoadingACType;

export const loadingReducer = (state: InitialStateType = initState, action: LoadingReducerActionsType):
    InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, isLoading: true}
        }
        default:
            return state
    }
}

export type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean): any => ({
    type: 'SET_LOADING',
    isLoading
} as const) // fix any