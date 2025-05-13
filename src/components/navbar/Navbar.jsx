import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left-section">
                <div className="logo">
                    <span>П</span>
                    <span>О</span>
                    <span>Л</span>
                    <span>Е</span>
                    <span>Т</span>
                    <span>А</span>
                    <span>Е</span>
                    <span>М</span>
                </div>
                <div className="additional-info">
                    <span>ул. Ладыгина, 3 (этаж 2)</span>
                    <span>Ежедневно, 10:00–21:00</span>
                </div>
            </div>
            <div className="menu-wrapper">
                <nav className="menu">
                    <a href="#about">О мероприятии</a>
                    <a href="#pricing">Стоимость</a>
                    <a href="#contact">Контакты</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
