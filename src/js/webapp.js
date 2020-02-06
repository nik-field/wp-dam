import {MDCComponent, MDCFoundation} from '@material/base/index';

/*=============================================
=            Include Ripple Effect            =
=============================================*/

import {MDCRipple} from '@material/ripple/index';

// Instantiation
const buttons = document.querySelectorAll('.mdc-ripple');
buttons.forEach(button => MDCRipple.attachTo(button));

$(document).ajaxSuccess(function () {
    const buttons = document.querySelectorAll('.mdc-ripple');
    buttons.forEach(button => MDCRipple.attachTo(button));
});

/*===========================================
=            Include Top App Bar            =
===========================================*/

import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
//const topAppBarElement = document.querySelector('.mdc-top-app-bar');
//const topAppBar = new MDCTopAppBar(topAppBarElement);

/*==========================================
=            Include Text Field            =
==========================================*/

import {MDCTextField} from '@material/textfield/index';

//Instantiation
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

/*===========================================
=            Include Floating Label           =
===========================================*/

import {MDCFloatingLabel} from '@material/floating-label/index';

//Instantiation
const floatingLabel = new MDCFloatingLabel(document.querySelector('.mdc-floating-label'));

/*===========================================
=            Include Line Ripple            =
===========================================*/

import {MDCLineRipple} from '@material/line-ripple/index';

import Clipboard from 'clipboard';

new Clipboard('.copy');




import {delegate} from 'tippy.js';
import tippy from 'tippy.js';

delegate('.site-main, .mdc-dialog', {
    target: '.copy'
});

tippy.setDefaultProps({
    theme: 'material',
    content: 'Copied!',
    trigger: 'click'
});

// import truncate from 'truncate.js';
// $('.large-asset-card__title').truncate( {
//     lines: 2
// });


import './asset-search';
import './asset-access';

