import PopupWithForm from './PopupWithForm';
import {useRef} from 'react';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = useRef(null); 

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
    
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
        e.target.reset();
    }

    return (
        <PopupWithForm 
            name = {'change-avatar'} title = {'Обновить аватар'}
            isOpen = {isOpen} onClose = {onClose} buttonText = {'Сохранить'} onSubmit={handleSubmit}
        >
            <div className="popup__label">
                <input 
                ref={avatarRef} defaultValue=""
                required type="url" name="avatar"
                placeholder="Ссылка на аватар" className="popup__input popup__input_text_linkAvatar"
            />
            </div>  
        </PopupWithForm>

    );
}

export default EditAvatarPopup;