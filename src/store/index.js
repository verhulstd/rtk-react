import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice";
import todos from "./todosSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import landscapesApi from "./landscapesApi";
const store = configureStore({
  reducer: {
    counter,
    todos,
    [landscapesApi.reducerPath]: landscapesApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      //   friendsApi.middleware,
      landscapesApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
