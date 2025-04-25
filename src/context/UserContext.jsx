// src/contexts/UserContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supaBaseClient";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserAndProfile = async () => {
        setLoading(true);

        const { data: authData, error: authError } = await supabase.auth.getUser();
        if (authError || !authData?.user) {
            setUser(null);
            setProfile(null);
            setLoading(false);
            return;
        }

        setUser(authData.user);

        const { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", authData.user.id)
            .single();

        if (profileError) {
            console.error("Ошибка загрузки профиля:", profileError);
            setProfile(null);
        } else {
            setProfile(profileData);
        }

        setLoading(false);
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setProfile(null);
    };

    useEffect(() => {
        fetchUserAndProfile();

        // Подписка на изменения сессии (например, логин/логаут)
        const { data: listener } = supabase.auth.onAuthStateChange(() => {
            fetchUserAndProfile();
        });

        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                profile,
                loading,
                logout,
                refreshProfile: fetchUserAndProfile,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
