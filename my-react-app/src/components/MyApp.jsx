import React from 'react';

// Компонент MyButton
function MyButton() {
    return <button>Я кнопка</button>;
}

// Компонент MyApp
export function MyApp() {
    return (
        <div>
            <h2>Привет из компонента MyApp!</h2>
            <MyButton />
        </div>
    );
}