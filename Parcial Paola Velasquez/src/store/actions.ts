import firebase from "../firebase";
import { Receta } from "../types/receta";
import { Actions, SomeActions } from "../types/store";



export const saveit = async(receta:Receta):Promise<Actions> => {
    await firebase.saveDB(receta)
        return {
            action: SomeActions.X,
            payload: receta,
        }}