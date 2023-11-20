import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainPage } from "../main-page/main-page";
import { CategoriesPage } from "../categories-page/categories-page";
import { HomePage } from "../home-page/home-page";
import SearchResults from "../../modules/search-results";
import SupplierInfo from "../../modules/supplier-info";
import { SupplierPage } from "../supplier-page/supplier-page";
import ProductPage from "../product-page/product-page";
import CartPage from "../cart-page";
import { Cart } from "../../modules/cart";
import Checkout from "../../modules/checkout";

// function App() {
//   return ();
// }

// export default App;
