import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case SORT_UP: {
            console.log('SORT_UP');
            return [...state.sort((a,b) => {
                    return a.name.localeCompare(b.name);
                }
            )];
        }
        case SORT_DOWN: {
            console.log('SORT_DOWN');
            return [...state.sort((a,b) => {
                    return b.name.localeCompare(a.name);
                }
            )];
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
}

export type ActionsType = UpSortACType | DownSortACType

const SORT_UP = 'SORT_UP';
export type UpSortACType = ReturnType<typeof UpSortAC>

export const UpSortAC = (payload: string) => {
    return {
        type: SORT_UP,
        payload: payload
    }
}

const SORT_DOWN = 'SORT_DOWN';
export type DownSortACType = ReturnType<typeof DownSortAC>

export const DownSortAC = (payload: string) => {
    return {
        type: SORT_DOWN,
        payload: payload
    }
}