import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../context";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);
    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, product.id]);

  const { id, name, overview, price, rating, poster, best_seller } = product;
  function handleClick(product) {
    addToCart(product);
  }

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Best Seller
          </span>
        )}
        <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
      </Link>

      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>

        <div className="flex items-center my-2">
          {/* <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
      <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
      <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
      <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
      <i className="text-lg bi bi-star-half text-yellow-500 mr-1"></i> */}
          {/* <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
        4.5 (1,200 reviews)
      </span> */}
          <Rating rating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{price}</span>
          </span>

          {isInCart && (
            <button
              onClick={() => removeFromCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Remove Item <i className="ml-1 bi bi-trash3"></i>
            </button>
          )}
          {!isInCart && (
            <button
              onClick={() => addToCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                product.in_stock ? "" : "cursor-not-allowed hover:bg-red-600 "
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
