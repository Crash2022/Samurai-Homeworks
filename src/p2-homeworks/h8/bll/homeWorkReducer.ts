import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case SORT_UP: {
            //console.log('SORT_UP');
            return [...state.sort((a,b) => {
                    return a.name.localeCompare(b.name);
                }
            )];
        }
        case SORT_DOWN: {
            //console.log('SORT_DOWN');
            return [...state.sort((a,b) => {
                    return b.name.localeCompare(a.name);
                }
            )];
        }
        case CHECK_AGE_LESS_18: {
            //console.log('CHECK_AGE_LESS_18');
            return [...state.filter(el => el.age > action.minAge)];
        }
        default: return state
    }
}

export type ActionsType = UpSortACType | DownSortACType | AgeFilterACType

const SORT_UP = 'SORT_UP';
export type UpSortACType = ReturnType<typeof UpSortAC>

export const UpSortAC = (payload: string) => ({
        type: SORT_UP,
        payload: payload
} as const )

const SORT_DOWN = 'SORT_DOWN';
export type DownSortACType = ReturnType<typeof DownSortAC>

export const DownSortAC = (payload: string) => ({
        type: SORT_DOWN,
        payload: payload
} as const )

const CHECK_AGE_LESS_18 = 'CHECK_AGE_LESS_18';
export type AgeFilterACType = ReturnType<typeof AgeFilterAC>

export const AgeFilterAC = (minAge: number) => ({
        type: CHECK_AGE_LESS_18,
        minAge
} as const )