/* eslint-disable no-unused-vars */
function car(speed, vertical, horizental, top, left, marker) {
  return {
    speed: function () {
      return speed
    },
    vertical: function () {
      return top
    },
    horizental: function () {
      return left
    },
    top: function () {
      return top
    },
    left: function () {
      return left
    },
    marker: function () {
      return marker
    },
    moveCar: function (top, left, speed) {
      if (vertical === 'up') {
        marker.top = marker.top + top + 'px'
      }
      if (vertical === 'down') {
        marker.top = marker.top - top + 'px'
      }
      if (horizental === 'left') {
        marker.left = marker.left + left + 'px'
      }
      if (horizental === 'right') {
        marker.left = marker.left - left + 'px'
      }
    }
  }
}

var $car = (1, 'down', 'right', 100, 100, document.querySelector('.car'))
$car.moveCar()
setInterval($car.moveCar, 100)
