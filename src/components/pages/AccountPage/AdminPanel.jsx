import React, { useState, useEffect } from "react";
import { supabase } from "../../../supaBaseClient";
import { FaRegTrashAlt } from "react-icons/fa";
export default function AdminPanel() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCallbackRequests = async () => {
            const { data, error } = await supabase
                .from("callback-requests")
                .select("*")
                .order("created_at", { ascending: false }); // самые новые сверху

            if (error) {
                console.error("Ошибка чтения:", error);
            } else {
                setRequests(data ?? []);
            }
            setLoading(false);
        };

        fetchCallbackRequests();
    }, []);

    /* ─────────── Удаление записи ─────────── */
    const handleDelete = async (id) => {
        if (!window.confirm("Удалить заявку?")) return;

        const { error } = await supabase.from("callback-requests").delete().eq("id", id);

        if (error) {
            console.error("Ошибка удаления:", error);
        } else {
            setRequests((prev) => prev.filter((item) => item.id !== id));
        }
    };

    return (
        <section className="admin">
            {loading && (
                <div className="loading">
                    <div className="loader"></div>
                </div>
            )}

            {!loading && (
                <>
                    <p className="admin__title block-title">Заявки</p>
                    <p className="heading-small">Заявки на обратный звонок</p>
                    <table className="admin__table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Дата создания</th>
                                <th>Имя</th>
                                <th>Телефон</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {requests.length === 0 && (
                                <tr>
                                    <td colSpan={5} style={{ textAlign: "center" }}>
                                        Заявок нет
                                    </td>
                                </tr>
                            )}

                            {requests.map((req, idx) => (
                                <tr key={req.id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        {new Date(req.created_at).toLocaleString("ru-RU")}
                                    </td>
                                    <td>{req.name}</td>
                                    <td>{req.phone}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(req.id)}
                                            className="admin__delete-btn"
                                            title="Удалить"
                                        >
                                            <FaRegTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </section>
    );
}
