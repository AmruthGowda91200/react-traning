// ProductDetail.js
import { useParams } from 'react-router-dom';
import contents from '../Data/content';

const ProductDetail = () => {
  const { productId } = useParams(); // Get the productId from URL params
  const product = contents.find(content => content.id === parseInt(productId)); // Find the product by id

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='productDetail'>
      <img src={product.image} alt='product-img' className='productImage'></img>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Total Sales: {product.totalSales}</p>
      <p>Time Left: {product.timeLeft} days</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
}

export default ProductDetail;
