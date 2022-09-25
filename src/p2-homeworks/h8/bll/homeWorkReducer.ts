import {UserType} from "../HW8";
type ActionType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: 18}
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let coppyState = [...state].sort((a , b) => {
                if(a.name > b.name) return 1
                else if(a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? coppyState : coppyState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(user => user.age >= action.payload)
        }
        default: return state
    }
}