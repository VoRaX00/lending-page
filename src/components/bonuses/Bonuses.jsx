import React from "react";
import "./Bonuses.css";
import cloudImg from "../../assets/cloud.png";
import backgroundImg from "../../assets/background.png";
import dogImg from "../../assets/dog.png";

import letterB from "../../assets/b.png";
import letterO from "../../assets/o.png";
import letterN from "../../assets/n.png";
import letterU from "../../assets/y.png";
import letterS from "../../assets/c.png";
import letterY from "../../assets/q.png";
import bonus1 from "../../assets/Камера.png";
import bonus2 from "../../assets/Кубок.png";
import bonus3 from "../../assets/Смайлик.png";
import Bonus from "../bonus/Bonus";

const Bonuses = () => {
    const bonuses = [
        {
            title: "Фото и видео с прохождения",
            description: "Каждый получит крутые кадры с мероприятия!",
            className: "bonus-1",
            image: bonus1,
        },
        {
            title: "Награждение победителей",
            description: "Медали, сертификаты и призы от партнеров!",
            className: "bonus-2",
            image: bonus2,
        },
        {
            title: "Веселье и новые знакомства",
            description:
                "Отличная возможность провести время активно и зарядиться эмоциями!",
            className: "bonus-3",
            image: bonus3,
        },
    ];

    return (
        <div className="bonuses-page">
            {/* Фоновое изображение */}
            <div
                className="background"
                style={{backgroundImage: `url(${backgroundImg})`}}
            ></div>

            {/* Облака */}
            <img src={cloudImg} alt="Облако" className="cloud cloud-1"/>
            <img src={cloudImg} alt="Облако" className="cloud cloud-2"/>

            {/* Собачка */}
            <div className="character-container">
                <img src={dogImg} alt="Собачка" className="character"/>
            </div>

            {/* Заголовок "БОНУСЫ" в форме радуги */}
            <div className="rainbow-title">
                {/* Буква Б */}
                <div
                    className="letter-container"
                    style={{left: "100px", bottom: "10px"}}
                >
                    <img src={letterB} alt="Б" className="title-letter"/>
                </div>

                {/* Буква О */}
                <div
                    className="letter-container"
                    style={{left: "150px", bottom: "55px"}}
                >
                    <img src={letterO} alt="О" className="title-letter"/>
                </div>

                {/* Буква Н */}
                <div
                    className="letter-container"
                    style={{left: "220px", bottom: "75px"}}
                >
                    <img src={letterN} alt="Н" className="title-letter"/>
                </div>

                {/* Буква У */}
                <div
                    className="letter-container"
                    style={{left: "300px", bottom: "80px"}}
                >
                    <img src={letterU} alt="У" className="title-letter"/>
                </div>

                {/* Буква С */}
                <div
                    className="letter-container"
                    style={{left: "365px", bottom: "65px"}}
                >
                    <img src={letterS} alt="С" className="title-letter"/>
                </div>

                {/* Буква Ы */}
                <div
                    className="letter-container"
                    style={{left: "425px", bottom: "15px"}}
                >
                    <img src={letterY} alt="Ы" className="title-letter"/>
                </div>
            </div>

            {/* Список бонусов */}
            <div className="bonuses-list">
                {bonuses.map((bonus, index) => (
                    <Bonus
                        key={index}
                        title={bonus.title}
                        description={bonus.description}
                        className={bonus.className}
                        image={bonus.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Bonuses;