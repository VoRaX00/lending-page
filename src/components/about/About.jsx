import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="event-banner">
            <div className="rainbow" />
            <div className="clouds-bottom" />

            <div className="content">
                <h2 className="subtitle">БАТУТНЫЙ ЦЕНТР “ПОЛЕТАЕМ”</h2>
                <h1 className="title">
                    МЕРОПРИЯТИЕ “ПОЛОСА<br />ПРЕПЯТСТВИЙ”
                </h1>

                <div className="cloud-date">
                    <div className="cloud-date-text">
                        <div>20 мая в</div>
                        <strong>15:00</strong>
                    </div>
                </div>

                <p className="description">
                    Динамичные соревнования с элементами развлечения<br />
                    для всех! Участвуйте индивидуально или соберите<br />
                    команду друзей/семью.
                </p>

                <div className="buttons">
                    <button className="signup-button">ЗАПИСАТЬСЯ</button>
                </div>
                <div className="buttons">
                    <button className="details-button">Узнать подробности</button>
                </div>

                <div className="dog" />
            </div>
        </div>
    );
}

export default About;