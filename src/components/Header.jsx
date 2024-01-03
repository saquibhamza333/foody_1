import { Link } from 'react-router-dom';

import ShoppingCartIcon from './ShoppingCartIcon';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';

const Header = () => {
 
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-white shadow-md py-5 fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <Link to='/'>
          <span className="text-4xl font-extrabold tracking-tight text-red-600 cursor-pointer">
            🍔 Foody
          </span>
          </Link>
        </div>
        <SearchBar/>

        <nav className="flex items-center">
          <ul className="flex space-x-6">
            <li className="font-mono text-lg">
              <Link
                to="/"
                className="text-gray-800 hover:text-red-600 text-2xl transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="font-mono text-lg">
              <ShoppingCartIcon itemCount={cartItems.length} />
            </li>
            {/* Add other navigation links here */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;