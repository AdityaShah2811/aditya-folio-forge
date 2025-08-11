import React, { createContext, useContext } from "react";
import { portfolioConfig, type PortfolioConfig } from "@/config/portfolio.config";

interface ProfileContextValue {
  data: PortfolioConfig;
  loading: boolean;
  error?: string;
}

const ProfileContext = createContext<ProfileContextValue>({ 
  data: portfolioConfig, 
  loading: false 
});

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ProfileContext.Provider value={{ data: portfolioConfig, loading: false }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
