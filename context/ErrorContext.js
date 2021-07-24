import React, {createContext, useContext, useState} from 'react';

// providers for the current page user is on
const ErrorContext = createContext();
const UpdateErrorContext = createContext();

export const ErrorContextProvider = ({children}) => {
    const [error, setError] = useState(false);

    return (
        <ErrorContext.Provider value={error}>
            <UpdateErrorContext.Provider value={setError}>
                {children}
            </UpdateErrorContext.Provider>
        </ErrorContext.Provider>
    )
}

export const useError = () => {
    return useContext(ErrorContext);
}

export const useUpdateError = () => {
    return useContext(UpdateErrorContext);
}