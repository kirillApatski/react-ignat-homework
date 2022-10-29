const initState = {
    isLoading: false
}
type InitialStateType = {
    isLoading: boolean
}

type isLoadingType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: isLoadingType): InitialStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'IS-LOADING',
        isLoading
    } as const
} // fix any