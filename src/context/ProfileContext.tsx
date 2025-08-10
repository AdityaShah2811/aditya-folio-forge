import React, { createContext, useContext, useEffect, useState } from "react";
import type { ProfileData } from "@/types/profile";

interface ProfileContextValue {
  data: ProfileData | null;
  loading: boolean;
  error?: string;
}

const ProfileContext = createContext<ProfileContextValue>({ data: null, loading: true });

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    let mounted = true;
    fetch("/data/profile.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load profile.json (${res.status})`);
        return res.json();
      })
      .then((json) => {
        if (mounted) {
          setData(json as ProfileData);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (mounted) {
          setError(e.message);
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ data, loading, error }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
