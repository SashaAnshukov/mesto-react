import '../index.css';
import api from '../utils/Api';
import Card from './Card';

import {useState, useEffect} from 'react';

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, onCardClick}) {

    /*function handleEditAvatarClick() {
        document.querySelector('.popup_type_change-avatar').classList.add('popup_visible')
    }
    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('popup_visible')
    }
    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add-card').classList.add('popup_visible')
    }*/

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        api.getUserData().then(res => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        })
        .catch(err => {
            console.log ('Ошибка: ${err}')
        })
    }, [])

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        api.getInitialCards().then(res => {
            const arr = res.map((item) => {
                return {
                    src: item.link,
                    name: item.name,
                    likes: item.likes.length,
                    id: item._id
                }
            })
            setCards(arr);
        })
        .catch(err => {
            console.log ('Ошибка: ${err}')
        })
    }, [])

    return (
        <main>
            <div className="page__container">
            <section className="profile">
                <div className="profile__space">
                    <div className = "profile__holder">
                        <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя"/>
                        <button type ="button" aria-label="edit" onClick={handleEditAvatarClick} 
                        className="profile__avatar-button"></button>
                    </div>    
                        <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <button type ="button" aria-label="edit" onClick={handleEditProfileClick}
                        className="profile__edit-button opacity-buttons"></button>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button type ="button" aria-label="add" onClick={handleAddPlaceClick}
                className="profile__add-button opacity-buttons"></button>
            </section>
            
            

            <section className="elements">
                {cards.map (card => {
                    return <Card onCardClick = {onCardClick} card={card} key = {card.id}/>
                })}
            </section>
            </div>
        </main>
    );
}

export default Main;