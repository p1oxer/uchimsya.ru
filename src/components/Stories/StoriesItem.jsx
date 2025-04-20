import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function StoriesItem({ item, imagePath }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className="story">
            <div className="body-story__img">
                <picture>
                    {imagePath ? (
                        <>
                            <source
                                srcSet={imagePath} // Используем переданный путь
                                media="(min-width: 551px)"
                            />
                            <source
                                srcSet={imagePath.replace(".jpg", "-small.jpg")} // Меняем на малое изображение
                                media="(max-width: 550px)"
                            />
                            <img src={imagePath} alt={item.name} />{" "}
                            {/* Используем переданный путь */}
                        </>
                    ) : (
                        <img src="/path/to/default-image.jpg" alt="default" /> // Путь к изображению по умолчанию
                    )}
                </picture>
            </div>
            <div className="story__body body-story">
                <button
                    onClick={() => setModalVisible(!modalVisible)}
                    className="body-story__hint"
                >
                    <IoIosInformationCircleOutline />
                </button>
                <div
                    className={
                        modalVisible
                            ? `story__modal modal-story visible`
                            : `story__modal modal-story`
                    }
                >
                    <div className="modal-story__body">
                        <div className="modal-story__top">
                            {item.name}, курс: <a href="#">{item.courseName}</a>
                        </div>
                        <div className="modal-story__text">{item.story}</div>
                    </div>
                </div>

                <p className="body-story__text heading-small">«{item.story}»</p>
                <div className="body-story__bottom">
                    <div className="body-story__path">
                        <span className="heading-small">{item.oldProfession}</span>
                        <BsArrowRight />
                        <span className="heading-small">{item.newProfession}</span>
                    </div>
                    <div className="body-story__details">
                        {item.name}, курс: <a href="#">{item.courseName}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
