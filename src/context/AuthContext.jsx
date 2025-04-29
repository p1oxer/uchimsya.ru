import { createContext, useEffect, useContext, useState } from "react";
import { supabase } from "../supaBaseClient";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined);

    // register function
    const registerNewUser = async (email, password, fullname, phone) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.error("Произошла ошибка при регистрации: ", error);
            return { success: false, error }; 
        }

        const user = data.user;
        if (user) {
            const { error: profileError } = await supabase
                .from("profiles")
                .insert([{ id: user.id, fullname: fullname, phone: phone }]);

            if (profileError) {
                console.error("Ошибка при добавлении профиля: ", profileError);
                return { success: false, error: profileError };
            }
            // Проверка, что запись создана
            const { error: fetchError } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();

            if (fetchError) {
                console.error("Ошибка при проверке профиля: ", fetchError);
                return { success: false, error: fetchError };
            }
        }

        return { success: true, data };
    };
    // login function
    const loginUser = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                // Обработка специфических ошибок
                let errorMessage = "Произошла ошибка при входе";
                if (error.status === 400) {
                    errorMessage = "Неверный пароль или почта";
                } else if (error.status === 404) {
                    errorMessage = "Пользователь с такой почтой не найден";
                } else {
                    console.error("Ошибка при авторизации: ", error);
                }

                return {
                    success: false,
                    error: errorMessage,
                };
            }

            return {
                success: true,
                data,
            };
        } catch (error) {
            console.error("Произошла ошибка: ", error);
            return {
                success: false,
                error: "Неизвестная ошибка",
            };
        }
    };

    // Logout function
    const logoutUser = () => {
        const { error } = supabase.auth.signOut();
        if (error) {
            console.error("Произошла проблема при выходе из аккаунта: ", error);
        }
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ session, registerNewUser, logoutUser, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
