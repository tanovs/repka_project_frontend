import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Cart } from "../../modules/cart";
import Checkout from "../../modules/checkout";
import OrderData from "../../modules/order-data/order-data";
import SearchResults from "../../modules/search-results";
import CartPage from "../cart-page";
import { CategoriesPage } from "../categories-page/categories-page";
import { HomePage } from "../home-page/home-page";
import { MainPage } from "../main-page/main-page";
import OrderComplete from "../order-complete/order-complete";
import ProductListPage from "../product-list-page/product-list-page";
import ProductPage from "../product-page/product-page";
import SupplierDocumentUploadPage from "../supplier-document-upload-page/supplier-document-upload-page";
import SupplierFormComplete from "../supplier-form-complete/supplier-form-complete";
import { SupplierPage } from "../supplier-page/supplier-page";
import SupplierProductAddPage from "../supplier-product-add-page/supplier-product-add-page";
import SupplierProductListPage from "../supplier-product-list-page/supplier-product-list-page";
import SupplierRegisterForm from "../supplier-register-form/supplier-register-form";
import SupplierRegisterWrapper from "../supplier-register-wrapper/supplier-register-wrapper";
import SupplierRegistrationComplete from "../supplier-registration-complete/supplier-registration-complete";
import SupplierRegistrationOffer from "../supplier-registration-offer/supplier-registration-offer";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<MainPage />}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="categories" element={<CategoriesPage />}></Route>
        <Route path="search" element={<SearchResults />}></Route>
      </Route>
      <Route
        path="categories/:categoryId"
        element={<ProductListPage />}
      ></Route>
      <Route path="supplier/:supplierId" element={<SupplierPage />}></Route>
      <Route
        path="supplier/:supplierId/products"
        element={<SupplierProductListPage />}
      ></Route>
      <Route path="product/:productId" element={<ProductPage />}></Route>
      <Route path="cart" element={<CartPage />}>
        <Route path="" element={<Cart />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="complete" element={<OrderComplete />}></Route>
        <Route path="order-data/:orderId" element={<OrderData />}></Route>
      </Route>
      <Route path="supplier-sign-up" element={<SupplierRegisterWrapper />}>
        <Route path="welcome" element={<SupplierRegistrationOffer />} />
        <Route path="" element={<SupplierRegisterForm />} />
        <Route path="form-complete" element={<SupplierFormComplete />} />
        <Route path="add-products" element={<SupplierProductAddPage />} />
        <Route
          path="upload-documents"
          element={<SupplierDocumentUploadPage />}
        />
        <Route
          path="registration-complete"
          element={<SupplierRegistrationComplete />}
        />
      </Route>
    </Route>,
  ),
);
