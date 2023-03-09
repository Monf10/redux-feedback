import { createStore } from "@reduxjs/toolkit";

//აღვწერეთ reducer ფუნქცია (შეგიძლიათ გაიტანოთ ცალკეც)
const initialState = {
    feedback: ''
  };
function feedbackReducer (state = initialState, action) {
    switch (action.type) {
      case 'addFeedback':
        return { ...state, feedback: action.data }; // მონაცემები დაემატება არსებულ სთეითს
      default:
        return state;
    }
  }
const store = createStore(feedbackReducer); // განსაზღვრულ ფუნქციას იყენებს რიდაქს store

export default store;