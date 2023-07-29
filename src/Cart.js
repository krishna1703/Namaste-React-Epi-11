import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import FoodItems from "./FoodItems";
import { ClearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  let totalPrice = 0;

  cartItems.map((item) => {
    let price = 

    (item?.card?.info?.price / 100)
     ||( item?.card?.info?.defaultPrice / 100 );

    totalPrice += price;

    return totalPrice;

  });




  const dispatch = useDispatch();

  const clearHandler = () => {

    dispatch(ClearCart());


  }

  return cartItems.length == 0 ? (

    <EmptyCart />


  ) : (
    <>
      <div className="flex w-3/4 m-auto p-10 mt-10  mb-10 flex-wrap  flex-col bg-gray-100 rounded-3xl shadow-2xl">
        <div className="font-medium flex items-center w-3/4 m-auto justify-between flex-wrap   ">
          <div>
            <h2> Your Items : {cartItems.length}</h2>
          </div>
          <div>
            <p>Total Charges : {totalPrice} Rs</p>
          </div>
          <div>
            <button className=" p-3 text-xl bg-red-700 rounded-md text-white"
              onClick={() => clearHandler()}
            >
              Clear items
            </button>
          </div>
        </div>

        <div className=" flex  w-3/4  m-auto flex-wrap">
          {cartItems.map((items, index) => {
            console.log(items);

            key = { index };
            return <FoodItems fooditem={items} />;
          })}
        </div>


        <div className="mb-10  flex justify-end">
        <button className="bg-green-600 p-4 hover:bg-green-700 text-xl rounded-md text-white">
           
              Order item
            </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
