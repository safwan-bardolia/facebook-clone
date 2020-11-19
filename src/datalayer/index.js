import React, { createContext, useContext, useReducer} from "react";

// preparing DataLayer/StateContext
export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) => (
    // passing reducer as value to datalayer (it is like redux-store, means it contain entire data of our app)
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>       
        {children}
    </DataLayerContext.Provider>
)

// to get the value from DataLayer
export const useDataLayerValue = () => useContext(DataLayerContext);