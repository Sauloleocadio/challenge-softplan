import { createStore } from "redux";
import rootreducer from "../modules/rootreducer";

const store = createStore(rootreducer);

export default store;
