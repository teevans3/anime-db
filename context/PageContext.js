import React, {createContext, useContext, useState} from 'react';

// providers for the current page user is on
const PageContext = createContext();
const UpdatePageContext = createContext();

export const PageContextProvider = ({children}) => {
    const [page, setPage] = useState(1);

    return (
        <PageContext.Provider value={page}>
            <UpdatePageContext.Provider value={setPage}>
                {children}
            </UpdatePageContext.Provider>
        </PageContext.Provider>
    )
}

export const usePage = () => {
    return useContext(PageContext);
}

export const useUpdatePage = () => {
    return useContext(UpdatePageContext);
}