import '../index.css';

function PopupAddPlaceComponent() {
    return (
        <div>
        <div className="popup__label">
            <input readOnly required minLength="1" maxLength="30" type="text"
                name ="name" value="" placeholder = "Название"
                className="popup__input popup__input_text_namePlace">
            </input>
            <span className="popup__input-error"></span>
            
        </div>
        <div className="popup__label">
            <input readOnly required type="url" name ="link" value=""
                placeholder = "Ссылка на катинку" className="popup__input popup__input_text_link">
            </input>
            <span className="popup__input-error"></span>
        </div>
        </div>
    );
}

export default PopupAddPlaceComponent;