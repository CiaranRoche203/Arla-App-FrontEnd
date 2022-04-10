import React, { useContext, useState, useEffect } from "react"

import { useHistory } from "react-router-dom"

import { auth } from "./firebase"

const AuthContext = React.createContext()

export function useAuth() { return useContext(AuthContext) }

//function to check the user
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const history = useHistory()

  //set the user that is signing in
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })
  }, [user, history])

  //set the user value
  const value = { user }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}