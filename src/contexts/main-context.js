/*
 * Context Providers are a powerful tool for streamlining development.
 * They allow you to use the same data/functions within any component in the tree without having to pass props down manually at every level.
 */
import React from 'react'
import { createContext } from 'react'

export const MainContext = createContext({
    insertMailerMutation: () => { },
})

/**
 * This context is for graphql queries, mutations, and more.
 */
export const MainProvider = (props: any) => {

    return (
        <MainContext.Provider
            value={{
                insertMailerMutation: () => { },
            }}
        >
            {props?.children}
        </MainContext.Provider>
    )
}