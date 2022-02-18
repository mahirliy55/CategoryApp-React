import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import ProductReducer from "./ProductReducer";
import SlideReducer from "./SlideReducer";
import FavoriteReducer from "./FavoriteReducer";

export default combineReducers({
  category: CategoryReducer,
  product: ProductReducer,
  slide: SlideReducer,
  favorite: FavoriteReducer,
});
