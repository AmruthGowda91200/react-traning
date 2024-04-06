import { Link } from "react-router-dom";
import { Products } from "../Compontents/Product";
import contents from "../Data/content";
// import Navbar from '../Navbar/Navbar';
// import Navbar from '../Compontents/Navbar';
// import './product.css';

const App1 = () => {
  return (
    <div className="App1">
      {/* <Navbar/> */}
      <div className="App1">
        {contents.map((contents) => (
          <Link key={contents.id} to={`/product/${contents.id}`}>
            <Products
              key={contents.id}
              image={contents.image}
              name={contents.name}
              price={contents.price}
              totalSales={contents.totalSales}
              timeLeft={contents.timeLeft}
              rating={contents.rating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default App1;
