"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
      const storedUser = localStorage.getItem("user")

      if (isLoggedIn && storedUser) {
        setUser(JSON.parse(storedUser))
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to authenticate the user
      // For this demo, we'll simulate a successful login

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check if user exists in localStorage (for demo purposes)
      const storedUser = localStorage.getItem("user")

      if (storedUser) {
        const user = JSON.parse(storedUser)

        // In a real app, you would verify the password on the server
        // For this demo, we'll just check if the email matches
        if (user.email === email) {
          // Set user as logged in
          localStorage.setItem("isLoggedIn", "true")
          setUser(user)
          setIsLoading(false)
          return true
        }
      }

      setIsLoading(false)
      return false
    } catch (error) {
      console.error("Login error:", error)
      setIsLoading(false)
      return false
    }
  }

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to create the user
      // For this demo, we'll simulate a successful signup

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const newUser = {
        id: `user_${Date.now()}`,
        name,
        email,
        createdAt: new Date().toISOString(),
      }

      // Store user data in localStorage for demo purposes
      localStorage.setItem("user", JSON.stringify(newUser))
      localStorage.setItem("isLoggedIn", "true")

      setUser(newUser)
      setIsLoading(false)
      return true
    } catch (error) {
      console.error("Signup error:", error)
      setIsLoading(false)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("isLoggedIn")
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}

