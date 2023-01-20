import axios from "axios";
import {
  ADD_PRODUCT_COMPLATE,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../Constant/ProductConstants";

// GET ALL PRODUCT
export const listProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    // console.log(keyword.keyword)
    const { data } = await axios.get(`/api/products/p`);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};

//GET SINGLE PRODUCT
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};

//ADD NEW PRODUCT

export const AddnewProduct =
  (name, description, price, stock, image1) => async (dispatch) => {
    try {
      // console.log(name, description, price, stock, { image1 });
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      dispatch({
        type: ADD_PRODUCT_REQUEST,
      });

      const formData = new FormData();
      formData.append("image", image1);
      // name.append('name', name)
      //formData.append('filename', image1.name);
      // console.log({formData})

      const { data } = await axios.post(
        `/api/import/adminproduct`,
        { name, description, price, stock },
        config
      );

      const { IMGdata } = await axios.post(
        `/api/import/adminproduct/img`,
        formData,
        config
      );
      console.log(IMGdata);

      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_FAIL,
        payload: error,
      });
    }
  };
export const ComplateProductAdd = () => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_COMPLATE });
};

//PRODUCT DELETE
export const adminproductdelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });
    const data = await axios.post(`/api/products/delete`, { id });
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};
