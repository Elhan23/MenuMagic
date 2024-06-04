import axios from "axios";

export const SEARCH_REQEST = "SEARCH_REQEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const searchReqest = () => ({
  type: SEARCH_REQEST,
});

export const searchSuccess = () => ({
  type: SEARCH_SUCCESS,
  payload: results,
});

export const searchFailure = () => ({
  type: SEARCH_FAILURE,
  payload: error,
});


export const ShopSearch = (product) =>  async (dispatch) => {
   dispatch(searchReqest());
   try {
       const res = await axios.get("")
      dispatch(searchSuccess(res.data))   
   } catch (error) {
      dispatch(searchFailure("error"))
   }
 }

