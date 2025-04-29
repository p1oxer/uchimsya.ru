import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import StoriesImg from "./StoriesImg";
import { Link } from "react-router-dom";

export default function StoriesItem({ item }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div className="story">
            <div className="body-story__img">
                <StoriesImg
                    imagePath={`/assets/images/stories/${item.img}.jpg`}
                    alt={item.name}
                />
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
                            {item.name}, курс:{" "}
                            <Link to={item.link}>{item.courseName}</Link>
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
                        {item.name}, курс: <Link to={item.link}>{item.courseName}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
