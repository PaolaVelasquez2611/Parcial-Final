import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions:Actions, state:AppState) => {
    const {action,payload} = actions
    switch (action) {
        case SomeActions.X:
            state.recetas = [...state.recetas,payload]
            return state;
            break;
    
        default:
            return state;
            break;
    }


}