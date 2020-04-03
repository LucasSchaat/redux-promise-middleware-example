const initialState = {
    memes: []
}

const SAVE_MEMES = 'SAVE_MEMES'

export const saveMemes = memes => {
    return {
        type: SAVE_MEMES,
        payload: memes
    }
}

export default function (state = initialState, action){
    const {type, payload} = action
    switch(type){
        case SAVE_MEMES:
            return {memes: payload}
        default:
            return state
    }
}