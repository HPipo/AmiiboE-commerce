import "./ProductCard.css"

function ProductCard( props ) {
    let { title, image, series, price } = props
    return (
        <div className="card-container">
            <img className="card-img" src={image} alt="logo"/>
            <h3 className="card-title">{title}</h3>
            <h3 className="card-price">{"$" + price}</h3>
            <div className="card-desc">
                <p className="card-series">{"℗" + series}</p>
                <button className="card-button">Buy!</button>
            </div>
        </div>
    )
}

export default ProductCard