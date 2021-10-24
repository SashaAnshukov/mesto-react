import '../index.css';

function PopupAvatarComponent() {
    return (
        <div className="popup__label">
            <input readOnly required="" type="url" name="avatar" value=""
                placeholder="Ссылка на аватар" className="popup__input popup__input_text_linkAvatar">
            </input>
        </div>    
    );
}

export default PopupAvatarComponent;