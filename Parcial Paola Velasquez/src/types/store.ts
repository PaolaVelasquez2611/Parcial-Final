import { Receta } from "./receta";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recetas: Receta [];
};

export enum SomeActions {
  "X" = "X",
}

export interface XAction {
  action: SomeActions.X;
  payload: Receta
}

export type Actions = XAction;
