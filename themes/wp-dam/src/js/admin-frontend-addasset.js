/*

* Grouping Assets For Sharing *
  // TODO: [feat] Checkbox on cards and button to copy link that will show you all of them as a single query

* Asset Permissions *
  // TODO: [feat] Restrict viewable assets for certain users (david can only see david's assets)

* Frontend Add Assets *
  // TODO: [feat] Link and Creator field
  // TODO: [feat] Thumbnails for attachments with generated thumbnails (docs, videos)
  // TODO: [feat] Icon thumbnails for attachments that can not be processed into thumbnails (links, docx)
  // TODO: [feat] Project Type/Year labels and menu options
  // TODO: [feat] More hidden fields for attachment data (attachment ID, upload_dir/file_path,)
  // TODO: [feat] Construct wp_insert_post from form _POST data
  // TODO: [fix] Project Type/Year should be required only when New Project text field has input

* Frontend Edit Tags *
  // TODO: [feat] Tags: Just make them editable on the card by clicking them. Convert div to input and validate.

*/

import { MDCDialog } from "@material/dialog";
import { MDCRadio } from "@material/radio";
import { MDCSelect } from "@material/select";
import { MDCSelectHelperText } from '@material/select/helper-text';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTextField } from "@material/textfield/index"
import "../scss/frontend-media-uploader.scss";

var counter = 1;
function count() {
  console.log(counter);
  counter++;
}

/* ------------------------- Variable Instantiation ------------------------- */

var addAssetDialog = new MDCDialog(document.querySelector(".dam-add-asset-dialog"));
var addAssetFormEl = document.getElementById("frontend_add_asset_form");
var addAssetSidebar = document.getElementById("add-asset__sidebar");

var addAssetTitle = new MDCTextField(document.querySelector(".add-asset-title-input"));

var formatRadios = [].map.call(document.querySelectorAll(".mdc-radio"), function (el) { return new MDCRadio(el); });

var uploadButton = document.querySelector("#upload_button");
var uploadFileInput = document.querySelector("#upload_file");
var previewImageEl = document.querySelector(".add-asset__preview-image");
var previewContainerEl = document.querySelector(".add-asset__preview");
var previewAreaEl = document.querySelector(".add-asset__main");

var artistSelect = new MDCSelect(document.querySelector(".add-asset__category--artist"));
var artistSelectHelperText = new MDCSelectHelperText(document.querySelector('.add-asset__new-artist--helper-text'));
var artistSelectInput = document.getElementById("add-asset__category--artist-input");
var artistSelectMenuEl = document.querySelector(".add-asset__category--artist-select");

var cancelArtistHelperText = new MDCTextFieldHelperText(document.querySelector('.add-asset__cancel-artist--helper-text'));
var cancelProjectHelperText = new MDCTextFieldHelperText(document.querySelector('.add-asset__cancel-project--helper-text'));

var newArtistField = new MDCTextField(document.querySelector('.add-asset__new-artist--field'));
var newArtistForm = document.getElementById('add-asset__new-artist--container');

var newProjectField = new MDCTextField(document.querySelector('.add-asset__new-project--field'));
var newProjectForm = document.getElementById('add-asset__new-project--container');
var newProjectType = new MDCSelect(document.querySelector(".add-asset__new-project--type"));
var newProjectYear = new MDCSelect(document.querySelector(".add-asset__new-project--year"));
var projectSelect = new MDCSelect(document.querySelector(".add-asset__category--project"));
var projectSelectHelperText = new MDCSelectHelperText(document.querySelector('.add-asset__new-project--helper-text'));
var projectSelectList = document.querySelector("#project_select_list");
var projectsMenu = projectSelect.menu_;
debugger;

/* -------------------------------------------------------------------------- */
/*                                   ACTIONS                                  */
/* -------------------------------------------------------------------------- */

$(".dam-add-asset__button").on("click", function () {
  addAssetDialog.open();

});


/* -------------------------------------------------------------------------- */
/*                               FORM VALIDATION                              */
/* -------------------------------------------------------------------------- */

var changeEvent = new Event('change', { bubbles: true });

function checkSaveButton() {
  if (addAssetFormEl.checkValidity() === true) {
    addAssetDialog.buttons_[1].disabled = false;
  } else {
    addAssetDialog.buttons_[1].disabled = true;
  }
}


addAssetFormEl.addEventListener('change', (e) => {
  checkSaveButton();
  if (addAssetFormEl.elements.format.value === 'format_link') {
    uploadButton.disabled = true;
    $(uploadButton).animate({ opacity: '0' });
  } else {
    uploadButton.disabled = false;
    $(uploadButton).animate({ opacity: '100' });
  }
});
addAssetTitle.listen("input", (e) => { checkSaveButton() });
newArtistField.listen("input", (e) => { checkSaveButton() });

/* -------------------------------------------------------------------------- */
/*                           SIDEBAR FIELD HANDLING                           */
/* -------------------------------------------------------------------------- */

function isHidden(el) {
  return (el.offsetParent === null)
}

/* ------------------------ DOWN = SHOW | UP = HIDE ----------------------- */

function swapProjectField() {
  if (!isHidden(projectSelect.root_)) {
    $(projectSelect.root_).slideUp(150);
    $(newProjectForm).slideDown(150);
  } else {
    $(newProjectForm).slideUp(150);
    $(projectSelect.root_).slideDown(150);
  }

}

function swapArtistField(option) {
  if (!isHidden(artistSelect.root_)) {
    artistSelectInput.value = "";
    artistSelect.selectedIndex = 0;
    artistSelect.required = false;
    artistSelectInput.required = false;
    newArtistField.input_.required = true;
    $(artistSelect.root_).slideUp(150);
    $(newArtistForm).slideDown(150);
    $(cancelProjectHelperText.root_).hide();
    if (!isHidden(projectSelect.root_)) {
      swapProjectField();
    }
  } else {
    artistSelect.required = true;
    artistSelectInput.required = true;
    newArtistField.input_.required = false;
    newArtistField.foundation_.setValue("");
    $(newArtistForm).slideUp(150);
    $(artistSelect.root_).slideDown(150);
    $(cancelProjectHelperText.root_).hide();
    if (option !== 'cancel') {
      swapProjectField();
    } else {
      $(cancelProjectHelperText.root_).show()
    }
  }
  addAssetFormEl.dispatchEvent(changeEvent);
}

artistSelectHelperText.root_.addEventListener("click", (e) => {
  swapArtistField();
});
cancelArtistHelperText.root_.addEventListener("click", (e) => {
  swapArtistField('cancel');
});
projectSelectHelperText.root_.addEventListener("click", (e) => {
  swapProjectField();
});
cancelProjectHelperText.root_.addEventListener("click", (e) => {
  swapProjectField('cancel');
});

/* ---------------------- HANDLE "HIDDEN" INPUT FIELDS ---------------------- */

artistSelect.listen("MDCSelect:change", (e) => {
  if (artistSelectInput.value !== e.detail.value) {
    artistSelectInput.value = e.detail.value;
    debugger;
  }
  projectSelect.disabled = false;
  projectSelect.foundation_.setValue("");
  var projectsMenuItems = projectsMenu.items.slice(1);
  for (var item in projectsMenuItems) {
    var itemIndex = parseInt(item);
    var projectParentID = parseInt(projectsMenuItems[itemIndex].attributes.parent.value);
    projectsMenuItems[itemIndex].style.display = "none";
    if (projectParentID === parseInt(artistSelect.value)) {
      projectsMenuItems[itemIndex].style.display = "flex";
    }

  }
  addAssetFormEl.dispatchEvent(changeEvent);
  debugger;

});

projectSelect.listen("MDCSelect:change", (e) => {
  var projectInputEl = document.querySelector("#cat_project_id");
  projectInputEl.value = e.detail.value;
});


/* -------------------------------------------------------------------------- */
/*                          WORDPRESS MEDIA UPLOADER                          */
/* -------------------------------------------------------------------------- */


var mediaUploader;
uploadButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (mediaUploader) {
    mediaUploader.open();
    return;
  }
  mediaUploader = wp.media(wp.media.view.MediaFrame.Select);
  mediaUploader.on('select', function () {
    var attachment = mediaUploader.state().get('selection').first().toJSON();
    uploadFileInput.setAttribute('value', attachment.url);
    debugger;
    previewAreaEl.style = "border: none";
    previewImageEl.src = attachment.sizes.medium.url;
    previewContainerEl.style = "display: flex";
    uploadButton.style = "margin: 1rem auto";
    uploadButton.firstChild.innerHTML = "Change File";

  });
  mediaUploader.open();
});

/* -------------------------------------------------------------------------- */
/*                           RESET FIELDS ON CANCEL                           */
/* -------------------------------------------------------------------------- */

addAssetDialog.listen("MDCDialog:closing", (e) => {
  if (e.detail.action === "reset") {
    var formInputs = addAssetDialog.root_.querySelectorAll("input");
    artistSelect.selectedIndex = 0;
    projectSelect.selectedIndex = 0;
    previewAreaEl.style = "";
    previewImageEl.src = "";
    previewContainerEl.style = "display: none";
    uploadButton.style = "margin auto";
    uploadButton.firstChild.innerHTML = "Add File";
    for (var input in formInputs) {

      var inputIndex = parseInt(input);
      var inputEl = formInputs[inputIndex];
      if (inputEl !== undefined && inputEl.type !== "radio")
        inputEl.value = "";

    }

  }
});

