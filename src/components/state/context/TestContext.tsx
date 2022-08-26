import React, { createContext, useState } from 'react'

type TestingContextProviderProps = {
  children: React.ReactNode
}

type AuthUser = {
  name: string
  email: string
}

type TestingContextProps = {
  test: AuthUser | null
  setTest: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

const TestingContext = createContext({} as TestingContextProps)

const TestingContextProvider = ({ children }: TestingContextProviderProps) => {
  const [test, setTest] = useState<AuthUser | null>(null)

  return <TestingContext.Provider value={{ test, setTest }}>{children}</TestingContext.Provider>
}
