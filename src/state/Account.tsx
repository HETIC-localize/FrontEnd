import { createContext, FC, ReactNode, useContext, useReducer } from "react";

export type Action = { type: "log user" };
export type Dispatch = (action: Action) => void;
export type State = {};

// export const AccountContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)

// export const AccountReducer = (state: State, action: Action) =>  {
//     switch(action.type) {
//         case 'log user': {
//             return { ...state }
//         }
//         default: {
//             throw new Error(`Unhandled action type: ${action}`)
//         }
//     }
// }

// export const AccountProvider: FC<{ children: ReactNode }> = ({ children }) => {
//     const [state, dispatch] = useReducer(AccountReducer, {})
//     const value = { state, dispatch }

//     return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>>
// }
