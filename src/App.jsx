import { useNavigate } from "react-router-dom";
import { allOrders } from "./constants/orders";
import { allProducts } from "./constants/products";

const App = () => {
  const totalProducts = allProducts.length;
  const totalOrders = allOrders.length;
  const navigate = useNavigate();

  return (
    <div className="bg-my-img bg-no-repeat bg-cover bg-center p-8 shadow-md text-white h-screen">
      <h1 className="text-4xl font-extrabold mb-4 text-center drop-shadow-2xl">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-1 mt-6">
        <div className="bg-orange-500 p-5 col-start-1 col-end-3 rounded-full w-96 m-8 shadow-2xl shadow-gray-700">
          <p className="text-xl font-semibold text-white text-center">Total Products</p>
          <p className="text-3xl font-extrabold text-center">{totalProducts}</p>
        </div>
        <div className="bg-yellow-400 p-5 col-end-7 col-span-2 rounded-full w-96 m-8 shadow-2xl shadow-gray-700">
          <p className="text-xl font-semibold text-white text-center">Total Orders</p>
          <p className="text-3xl font-extrabold text-center">{totalOrders}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        <button 
          className="bg-blue-400 hover:bg-blue-600 col-start-2 col-end-3 w-64 mx-8 text-white
           px-6 py-3 mx-1 rounded-md transition duration-300 ease-in-out transform hover:scale-105
            focus:outline-none shadow hover:text-xl"
          onClick={() => navigate("/products")}
        >
          Manage Products
        </button>
        <button
          className="bg-green-400 hover:bg-green-600 col-end-5 col-span-2 w-64 mr-2 text-white 
          px-6 py-3 mx-1 rounded-md transition duration-300 ease-in-out transform hover:scale-105 
          focus:outline-none hover:text-xl"
          onClick={() => navigate("/orders")}
        >
          Manage Orders
        </button>
      </div>
    </div>
  );
};

export default App;