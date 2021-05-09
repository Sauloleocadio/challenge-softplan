export default function countrie(state = null, action) {
  switch (action.type) {
    case "ADD_COUNTRIE":
      return [action.countrie];
    default:
      return state;
  }
}
