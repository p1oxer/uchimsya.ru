import React, { useState } from "react";
import { InputMask } from "@react-input/mask";
import { supabase } from "../../supaBaseClient";
import Modal from "../UI/Modal";

export default function FooterForm() {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [open, setOpen] = useState(false);

    const isPhoneComplete = (phone) => {
        const digitsOnly = phone.replace(/\D/g, "");
        return digitsOnly.length === 11;
    };

    async function createCallbackRequest(e, phone, name) {
        e.preventDefault();
        try {
            if (!isPhoneComplete(phone)) {
                alert("Пожалуйста, введите полный номер телефона.");
                return;
            }
            const { error } = await supabase
                .from("callback-requests")
                .insert([{ name: name, phone: phone }]);
            if (error) {
                console.error("Ошибка при отправке заявки: ", error);
                return { success: false, error: error };
            }
            setPhone("");
            setName("");
            setOpen(true);
        } catch (error) {
            console.error("Произошла ошибка: ", error);
        }
    }
    return (
        <>
            <Modal open={open} onClose={() => setOpen(false)}>
                Заявка успешно отправлена
            </Modal>
            <form
                onSubmit={(e) => createCallbackRequest(e, phone, name)}
                className="body-footer__form"
            >
                <p className="heading-small">Остались вопросы?</p>
                <p className="text">Перезвоним в течение 5 минут</p>
                <div className="inputs">
                    <InputMask
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        placeholder="Номер телефона*"
                        required={true}
                        value={phone}
                        mask="+7 (___) ___-__-__"
                        replacement={{ _: /\d/ }}
                    />
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Ваше имя"
                        required={false}
                        value={name}
                    />
                </div>
                <button type="submit" className="button-main button-main-mini">
                    Отправить
                </button>
            </form>
        </>
    );
}
