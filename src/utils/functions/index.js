function formatNumber(number) {
  let n = number.toString();
  let r = "";
  let x = 0;

  for (let i = n.length; i > 0; i--) {
    r += n.substr(i - 1, 1) + (x === 2 && i !== 1 ? "." : "");
    x = x === 2 ? 0 : x + 1;
  }

  return r.split("").reverse().join("");
}

function getDistanceFromLatLonInKm(position1, position2) {
  const deg2rad = function (deg) {
      return deg * (Math.PI / 180);
    },
    R = 6371,
    dLat = deg2rad(position2[0] - position1[0]),
    dLng = deg2rad(position2[1] - position1[1]),
    a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(position1[0])) *
        Math.cos(deg2rad(position1[0])) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2),
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c * 1000).toFixed();
}

export { formatNumber, getDistanceFromLatLonInKm };
