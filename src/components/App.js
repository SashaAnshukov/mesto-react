import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {useState, useEffect} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const onEditAvatar = () => {setIsEditAvatarPopupOpen(true)};

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const onEditProfile = () => {setIsEditProfilePopupOpen(true)};

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  console.log(isAddPlacePopupOpen)
  const onAddPlace = () => {setIsAddPlacePopupOpen(true)};
  
  const closeAllPopups = (form) => {
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

  const [currentUser , setCurrentUser] = useState('');
  useEffect(() => {
    api.getUserData().then(res => {
        setCurrentUser(res);
    })
    .catch(err => {
        console.log ('Ошибка: ${err}')
    })
  }, [])

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getInitialCards().then(res => {
      setCards(res);
    })
    .catch(err => {
        console.log ('Ошибка: ${err}')
    })
  }, [])

  function handleCardLike(card) {
    
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.сhangeLikeCard(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => {
      console.log ('Ошибка: ${err}')
    })
    /*const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (isLiked) {
      api.deleteLikeCard(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
    }
    else {
      api.setLikeCard(card._id, !isLiked).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }*/
}

function handleCardDelete (card) {
  // Отправляем запрос в API и удаляем карточку
  api.deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((i) => i._id !== card._id));
      })
      .catch(err => {
        console.log ('Ошибка: ${err}')
      })
} 

function handleUpdateUser (dataUser) {
  // Отправляем запрос в API и обновляем значения профиля
  //console.log(data)
  api.setUserData(dataUser).then((res) => {
      setCurrentUser(res);
      closeAllPopups()
    })
    .catch(err => {
        console.log ('Ошибка: ${err}')
    })
}

function handleUpdateAvatar (dataAvatar) {
  // Отправляем запрос в API и обновляем аватар
  //console.log(data)
  api.setUserAvatar(dataAvatar).then((res) => {
      setCurrentUser(res);
      closeAllPopups()
    })
    .catch(err => {
        console.log ('Ошибка: ${err}')
    })
}

function handleAddPlaceSubmit (newCard) {
  // Отправляем запрос в API и обновляем аватар
  //console.log(data)
  api.setMyCard(newCard).then((newCard) => {
    setCards([newCard, ...cards]);
      closeAllPopups()
    })
    .catch(err => {
        console.log ('Ошибка: ${err}')
    })
}

  return (
    
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main 
        handleEditAvatarClick = {onEditAvatar} handleEditProfileClick = {onEditProfile}
        handleAddPlaceClick = {onAddPlace} onCardClick ={handleCardClick}
        onCardLike = {handleCardLike} onCardDelete ={handleCardDelete} cards={cards} 
      />
      <Footer />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
        onUpdateAvatar = {handleUpdateAvatar}
      />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
        onUpdateUser = {handleUpdateUser}
      />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        onAddPlace = {handleAddPlaceSubmit}
      />
      <ImagePopup 
        card = {selectedCard} isOpen = {isPicturePopupOpen} onClose = {closeAllPopups} >
      </ImagePopup>
      </CurrentUserContext.Provider>
    </div>
  );
  
}

export default App;