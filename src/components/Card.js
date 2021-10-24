import '../index.css';

function Card({onCardClick, card}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
                <div className="rectangle-item-template">
                    <article className="rectangle">
                        <img className="rectangle__image" onClick={handleClick} src={card.src} alt={card.alt}/>
                        <button type ="button" aria-label="trash" className="rectangle__trash opacit.y-buttons"></button>
                        <div className="rectangle__info">
                            <h2 className="rectangle__mesto-text">{card.name}</h2>
                            <div className="rectangle__likes">
                                <button type ="button" aria-label="like" className="rectangle__mesto-like opacity-like"></button>
                                <h3 className="rectangle__mesto-numbersLike">{card.likes.length}</h3>
                            </div>
                        </div>
                    </article>
                </div>
    );
}

export default Card;