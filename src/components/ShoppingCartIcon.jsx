import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ShoppingCartIcon = ({ itemCount }) => (
  <div className="relative">
    <Link to="/cart" className="flex items-center">
      <ShoppingBag size={24} color="#cc0000" />
    </Link>
    {itemCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
        {itemCount}
      </span>
    )}
  </div>
);

// ... rest of your code

export default ShoppingCartIcon
// ... rest of your code