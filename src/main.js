import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './img/equilateral.png';
import './img/isoceles.png';
import './img/scalene.svg';
import './img/wuth.jpg'
import { Triangle } from './project';

function hideAndShow() {
  $('#triangle-form').hide();
  $('#results').slideDown();
}

$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    let side1 = parseInt($('#side1').val());
    let side2 = parseInt($('#side2').val());
    let side3 = parseInt($('#side3').val());
    
    let userTriangle = new Triangle(side1, side2, side3);

    if(userTriangle.checkType() === "not a triangle") {
      hideAndShow();
      $('.triangle_type').text('Not a Triangle');
      $('.triangle-image').html(`<img src="img/wuth.jpg" alt="question mark">`);
    } else if(userTriangle.checkType() === "equilateral") {
      hideAndShow();
      $('.triangle_type').text('Equilateral');
      $('.triangle-image').html(`<img src="img/equilateral.png" alt="equilateral triangle">`);
    } else if(userTriangle.checkType() === "isosceles") {
      hideAndShow();
      $('.triangle_type').text('Isoceles');
      $('.triangle_image').html(`<img src="img/isoceles.png alt="isoceles triangle>`);
    } else if(userTriangle.checkType() === 'scalene') {
      hideAndShow();
      $('.triangle_type').text('Scalene');
      $('.triangle_image').html(`<img src="img/scalene.svg alt="scalene triangle>`);
    }
  });
  $('#restart').click(function() {
    $('#user_input')[0].reset();
    $('#results').slideUp();
    $('#triangle-form').slideDown();
  })
});
