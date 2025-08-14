import React, { createContext, useContext } from "react";
import { portfolioConfig, type PortfolioConfig } from "@/config/portfolio.config";

/**
 * Profile Context Value Interface
 * 
 * Defines the shape of data provided by the ProfileContext.
 * Includes portfolio data, loading state, and optional error handling.
 */
interface ProfileContextValue {
  data: PortfolioConfig;
  loading: boolean;
  error?: string;
}

/**
 * Profile Context
 * 
 * React Context for sharing portfolio data across all components.
 * Provides a centralized source of truth for portfolio information
 * including personal details, experience, projects, skills, etc.
 */
const ProfileContext = createContext<ProfileContextValue>({ 
  data: portfolioConfig, 
  loading: false 
});

/**
 * Profile Provider Component
 * 
 * Provides portfolio data to all child components through React Context.
 * Currently uses static configuration from portfolio.config.ts, but can
 * be extended to fetch data from APIs or other sources.
 * 
 * @param children - React components that need access to portfolio data
 */
export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ProfileContext.Provider value={{ data: portfolioConfig, loading: false }}>
      {children}
    </ProfileContext.Provider>
  );
};

/**
 * useProfile Hook
 * 
 * Custom hook to access portfolio data from any component.
 * Returns the current portfolio configuration, loading state, and any errors.
 * 
 * @returns ProfileContextValue containing portfolio data and state
 */
export const useProfile = () => useContext(ProfileContext);
