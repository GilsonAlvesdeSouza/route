import { Reducer } from "redux";
import { Usuario } from "../types/Usuario";

const initialState: Usuario = {
  name: "",
};

const UsuarioReducer: Reducer<Usuario> = ( state = initialState, action ) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload.name };
    default:
      break;
  }
  return state;
};

export default UsuarioReducer;
