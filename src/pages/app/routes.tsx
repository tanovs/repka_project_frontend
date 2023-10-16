import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  createHashRouter,
} from "react-router-dom";
import { Cart } from "../../modules/cart";
import Checkout from "../../modules/checkout";
import SearchResults from "../../modules/search-results";
import CartPage from "../cart-page";
import { CategoriesPage } from "../categories-page/categories-page";
import { HomePage } from "../home-page/home-page";
import { MainPage } from "../main-page/main-page";
import ProductPage from "../product-page/product-page";
import { SupplierPage } from "../supplier-page/supplier-page";
import OrderComplete from "../order-complete/order-complete";
import OrderData from "../../modules/order-data/order-data";
import ProductListPage from "../product-list-page/product-list-page";
import SupplierRegistrationOffer from "../supplier-registration-offer/supplier-registration-offer";
import SupplierRegisterForm from "../supplier-register-form/supplier-register-form";
import SupplierFormComplete from "../supplier-form-complete/supplier-form-complete";
import SupplierRegisterWrapper from "../supplier-register-wrapper/supplier-register-wrapper";
import SupplierRegistrationComplete from "../supplier-registration-complete/supplier-registration-complete";
import SupplierDocumentUploadPage from "../supplier-document-upload-page/supplier-document-upload-page";
import SupplierProductAddPage from "../supplier-product-add-page/supplier-product-add-page";

// TODO изменить на createBrowserRouter когда переедем на хостинг
export const routes = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<MainPage />}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="categories" element={<CategoriesPage />}></Route>
        <Route
          path="categories/:categoryId"
          element={<ProductListPage />}
        ></Route>
        <Route path="search" element={<SearchResults />}></Route>
        <Route path="supplier/:supplierId" element={<SupplierPage />}></Route>
        <Route
          path="supplier/:supplierId/products"
          element={<ProductListPage />}
        ></Route>
        <Route path="product" element={<ProductPage />}></Route>
      </Route>
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
    </Route>
  )
);
