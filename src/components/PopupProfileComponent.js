import '../index.css';

function PopupProfileComponent() {
    return (
        <div>
        <div className="popup__label">
            <input readOnly required minLength="2" maxLength="40" type="text"
                name ="name" value="" className="popup__input popup__input_text_name">
            </input>
            <span className="popup__input-error"></span>
        </div>
        <div className="popup__label">
            <input readOnly required minLength="2" maxLength="200" type="text"
                name ="profession" value="" className="popup__input popup__input_text_profession">
            </input>
            <span className="popup__input-error"></span>
        </div>
        </div>
    );
}

export default PopupProfileComponent;