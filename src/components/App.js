import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupAvatarComponent from './PopupAvatarComponent';
import PopupProfileComponent from './PopupProfileComponent';
import PopupAddPlaceComponent from './PopupAddPlaceComponent';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {useState, useEffect} from 'react';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const onEditAvatar = () => {setIsEditAvatarPopupOpen(true)};

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const onEditProfile = () => {setIsEditProfilePopupOpen(true)};

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const onAddPlace = () => {setIsAddPlacePopupOpen(true)};
  
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPicturePopupOpen(false);
    setSelectedCard ({name:'', src:''})
  };

  

  const [selectedCard, setSelectedCard] = useState({name:'', src:''});
  const [isPicturePopupOpen, setIsPicturePopupOpen] = useState(false);
  const onPicturePopup = () => {setIsPicturePopupOpen(true)}
  const handleCardClick  = (card) => {setSelectedCard(card); onPicturePopup()};

  return (
    <div className="page">
      <Header />
      <Main 
        handleEditAvatarClick = {onEditAvatar} handleEditProfileClick = {onEditProfile}
        handleAddPlaceClick = {onAddPlace} onCardClick ={handleCardClick}
      />
      <Footer />

      <PopupWithForm 
        name = {'change-avatar'} title = {'Обновить аватар'} isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups} buttonText = {'Сохранить'}>
        <PopupAvatarComponent />
      </PopupWithForm>

      <PopupWithForm 
        name = {'edit'} title = {'Редактировать профиль'} isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups} buttonText = {'Сохранить'}>
        <PopupProfileComponent />
      </PopupWithForm>

      <PopupWithForm 
        name = {'add-card'} title = {'Новое место'} isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups} buttonText = {'Сохранить'}>
        <PopupAddPlaceComponent />
      </PopupWithForm>

      <ImagePopup 
        card = {selectedCard} isOpen = {isPicturePopupOpen} onClose = {closeAllPopups}>
      </ImagePopup>

    </div>
  );
  
}

export default App;