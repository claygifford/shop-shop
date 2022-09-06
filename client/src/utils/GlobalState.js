import React from "react";
import { useProductStore } from "./reducers";

// const StoreContext = createContext();
// const { Provider } = StoreContext;
import { Provider } from "react-redux";

const StoreProvider = ({ value = [], ...props }) => {
  const store = useProductStore({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });
  // const [state, dispatch] = useProductReducer({
  //   products: [],
  //   cart: [],
  //   cartOpen: false,
  //   categories: [],
  //   currentCategory: '',
  // });

  return <Provider store={store} {...props} />;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

export { StoreProvider }; //, useStoreContext };
