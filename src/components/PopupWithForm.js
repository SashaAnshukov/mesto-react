import '../index.css';

function PopupWithForm({name, title, isOpen, onClose, children}) {
    return (
        //<div className= {`popup ${isOpen && "popup_visible"} popup_type_${name}`}>
        <div className= {`popup_type_${name} popup ${isOpen ? 'popup_visible' : ''} `}> 
                <div className="popup__container">
                    <button type ="button" aria-label="close" onClick={onClose}
                        className="popup__close-button opacity-buttons">
                    </button>
                    <h2 className="popup__name">{title}</h2>
                    <form noValidate name ={`${name}`} className="popup__form">
                        {children}
                        <button type ="submit" aria-label="saveButton"
                            className="popup__button popup__button_invalid">Сохранить
                        </button>
                    </form>
                </div>
        </div>
    );
}

export default PopupWithForm;