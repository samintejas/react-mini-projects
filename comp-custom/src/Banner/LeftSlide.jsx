function LeftSlide({ brandLabel, quote, description, button }) {

    return (
        <div className="left-slide">
            {brandLabel}
            <h2>{quote}</h2>
            <p>{description}</p>
            {button}
        </div>
    );

}

export default LeftSlide