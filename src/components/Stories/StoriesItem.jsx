import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function StoriesItem({ item }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <div className="story">
                <div className="body-story__img">
                    <picture>
                        <source
                            srcSet={`./img/stories/${item.img}.jpg`}
                            media="(min-width: 551px)"
                        />
                        <source
                            srcSet={`./img/stories/${item.img}-small.jpg`}
                            media="(max-width: 550px)"
                        />
                        <img src={`./img/stories/${item.img}.jpg`} alt="" />
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
        </>
    );
}
