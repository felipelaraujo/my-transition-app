import React, { ReactElement, createContext, useContext } from 'react'

interface AuthProps {}

const AuthContext = createContext<AuthProps>({} as AuthProps)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const value = {}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
