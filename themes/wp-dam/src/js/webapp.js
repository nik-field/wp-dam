import { MDCComponent, MDCFoundation } from "@material/base/index";

/*=============================================
=            Include Ripple Effect            =
=============================================*/

import { MDCRipple } from "@material/ripple/index";

// Instantiation
const buttons = document.querySelectorAll(".mdc-ripple");
buttons.forEach((button) => MDCRipple.attachTo(button));

$(document).ajaxSuccess(function () {
  const buttons = document.querySelectorAll(".mdc-ripple");
  buttons.forEach((button) => MDCRipple.attachTo(button));
});

/*===========================================
=            Include Top App Bar            =
===========================================*/
//

/*==========================================
=            Include Text Field            =
==========================================*/

import { MDCTextField } from "@material/textfield";

//Instantiation
//const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const searchTextField = new MDCTextField(
  document.querySelector(".dam-search-input")
);

/*===========================================
=            Include Line Ripple            =
===========================================*/

import { MDCFormField } from "@material/form-field";


const formFields = [].map.call(
  document.querySelectorAll(".mdc-form-field"),
  function (el) {
    return new MDCFormField(el);
  }
);

import Clipboard from "clipboard";

new Clipboard(".copy");

import { delegate } from "tippy.js";
import tippy from "tippy.js";

delegate(".site-main, .mdc-dialog, .mdc-snackbar, #dam-floating-actions", {
  target: ".copy",
});

tippy.setDefaultProps({
  theme: "material",
  content: "Copied!",
  trigger: "click",
});

// import truncate from 'truncate.js';
// $('.large-asset-card__title').truncate( {
//     lines: 2
// });

import { MDCMenu, Corner } from "@material/menu";
import { MDCMenuSurface } from "@material/menu-surface";

$(document).ajaxSuccess(function () {
  const menuEls = Array.from(document.querySelectorAll(".mdc-card-menu"));

  menuEls.forEach(function (menuEl) {
    const menu = new MDCMenu(menuEl);
    const menuToggle = menuEl.parentElement.querySelector(".mdc-menu-toggle");
    menuToggle.addEventListener("click", function () {
      menu.open = !menu.open;
    });
    menu.setAnchorCorner(Corner.BOTTOM_RIGHT);
  });
});

import "./asset-search";
import "./asset-access";
import "./group-assets";

