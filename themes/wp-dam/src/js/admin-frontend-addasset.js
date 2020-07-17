/*

* Grouping Assets For Sharing *
  // DONE: [feat] Checkbox on cards and button to copy link that will show you all of them as a single query

* Frontend Add Assets *
  // TODO: [feat] Project Type/Year labels and menu options
  // TODO: [fix] Project Type/Year should be required only when New Project text field has input
  // TODO: [feat] Link and Creator field
  // TODO: [feat] Thumbnails for attachments with generated thumbnails (docs, videos)
  // TODO: [feat] Icon thumbnails for attachments that can not be processed into thumbnails (links, docx)
  // TODO: [feat] More hidden fields for attachment data (attachment ID, upload_dir/file_path,)
  // TODO: [feat] Construct wp_insert_post from form _POST data

* Thumbnails *
  // TODO: [feat] Redo how thumbnails are displayed. Every thumb can have a background of grey, a background-image, and an icon. If there's no image (ex. docx) then just icon shows.

* Frontend Edit Tags *
  // TODO: [feat] Tags: Just make them editable on the card by clicking them. Convert div to input and validate.

* Sidebar *
  // TODO: [feat] Sort Projects by Year with Current year expanded

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

var addAssetTemplate = document.getElementById("tpl-add-asset-dialog").innerHTML;
var addAssetDialogHTML = template.render(addAssetTemplate);
$('.mdc-dialog__content').append(addAssetDialogHTML);

function checkSaveButton() {
  if (addAssetFormEl.checkValidity() === true) {
    addAssetDialog.buttons_[1].disabled = false;
  } else {
    addAssetDialog.buttons_[1].disabled = true;
  }
}

/* ------------------------- Variable Instantiation ------------------------- */
var wasEscaped = false;
var addAssetFormEl, addAssetSidebar, addAssetTitle, artistSelect, artistSelectHelperText, artistSelectInput, artistSelectMenuEl, cancelArtistHelperText, cancelProjectHelperText, creatorField, currentPreviewEl, formatRadios, linkField, newArtistField, newArtistForm, newProjectField, newProjectForm, newProjectType, newProjectTypeInput, newProjectYear, newProjectYearInput, previewContainerEl, previewAudioEl, previewEl, previewDocEl, previewImageEl, previewThumbEl, previewVideoEl, previewZipEl, projectSelect, projectInputEl, projectSelectHelperText, projectSelectList, projectsMenu, uploadButton, uploadEditButton, uploadFileUrlInput, uploadFileIDInput;
function initialization() {

  addAssetFormEl = document.getElementById("frontend_add_asset_form");
  addAssetSidebar = document.getElementById("add-asset__sidebar");

  addAssetTitle = new MDCTextField(document.querySelector(".add-asset-title-input"));

  formatRadios = [].map.call(document.querySelectorAll(".mdc-radio"), function (el) { return new MDCRadio(el); });

  uploadButton = document.querySelector("#upload_button");
  uploadEditButton = document.querySelector("#edit_button");
  uploadFileUrlInput = document.querySelector("#upload_url");
  uploadFileIDInput = document.querySelector("#upload_file_id");
  creatorField = new MDCTextField(document.querySelector(".add-asset-creator-input"));
  linkField = new MDCTextField(document.querySelector(".add-asset-link-input"));
  previewThumbEl = document.querySelector(".add-asset__preview--thumb");
  previewEl = document.querySelector(".add-asset__preview");
  previewContainerEl = document.querySelector(".add-asset__file--container");

  artistSelect = new MDCSelect(document.querySelector(".add-asset__category--artist"));
  artistSelectHelperText = new MDCSelectHelperText(document.querySelector('.add-asset__new-artist--helper-text'));
  artistSelectInput = document.getElementById("add-asset__category--artist-input");
  artistSelectMenuEl = document.querySelector(".add-asset__category--artist-select");

  cancelArtistHelperText = new MDCTextFieldHelperText(document.querySelector('.add-asset__cancel-artist--helper-text'));
  cancelProjectHelperText = new MDCTextFieldHelperText(document.querySelector('.add-asset__cancel-project--helper-text'));

  newArtistField = new MDCTextField(document.querySelector('.add-asset__new-artist--field'));
  newArtistForm = document.getElementById('add-asset__new-artist--container');

  newProjectField = new MDCTextField(document.querySelector('.add-asset__new-project--field'));
  newProjectForm = document.getElementById('add-asset__new-project--container');
  newProjectType = new MDCSelect(document.querySelector(".add-asset__new-project--type"));
  newProjectTypeInput = document.querySelector('#new-project-type');
  newProjectYear = new MDCSelect(document.querySelector(".add-asset__new-project--year"));
  newProjectYearInput = document.querySelector('#new-project-year');
  projectSelect = new MDCSelect(document.querySelector(".add-asset__category--project"));
  projectInputEl = document.querySelector("#cat_project_id");
  projectSelectHelperText = new MDCSelectHelperText(document.querySelector('.add-asset__new-project--helper-text'));
  projectSelectList = document.querySelector("#project_select_list");
  projectsMenu = projectSelect.menu_;

}
var originalDialog = document.querySelector(".dam-add-asset-dialog").innerHTML;
var changeEvent = new Event('change', { bubbles: true });
var addAssetDialog = new MDCDialog(document.querySelector(".dam-add-asset-dialog"));
addAssetDialog.listen('MDCDialog:opening', () => {
  initialization();

  /* -------------------------------------------------------------------------- */
  /*                               FORM VALIDATION                              */
  /* -------------------------------------------------------------------------- */




  wasEscaped ? null : addAssetFormEl.addEventListener('change', (e) => {
    checkSaveButton();
    if (addAssetFormEl.elements.format.value === 'format_link') {
      creatorField.root_.style.display = 'flex';
      creatorField.root_.parentNode.style.display = 'flex';
      linkField.input_.required = true;
      uploadFileUrlInput.required = false;
      uploadFileIDInput.required = false;
      uploadButton.disabled = true;
      uploadEditButton.disabled = true;
      previewContainerEl.style.display = 'none';
      $(uploadButton).animate({ opacity: '0' });
      $(linkField).animate({ opacity: '100' });
      linkField.root_.style.display = 'flex';
      checkSaveButton();
    } else if (formatRadios.find(el => el.checked)) {
      creatorField.root_.style.display = 'flex';
      creatorField.root_.parentNode.style.display = 'flex';
      linkField.input_.required = false;
      uploadFileUrlInput.required = true;
      uploadFileIDInput.required = true;
      previewContainerEl.querySelector('#upload_button_helper-text').style.display = 'none';
      uploadButton.disabled = false;
      uploadEditButton.disabled = false;
      if (linkField.root_.style.display !== 'none') {
        linkField.root_.style.display = 'none';
      }
      $(linkField).animate({ opacity: '100' });
      if (previewContainerEl.style.display !== 'flex') {
        previewContainerEl.style.display = 'flex';
        $(previewContainerEl).animate({ opacity: '100' });
        $(uploadButton).animate({ opacity: '100' });
      }
      checkSaveButton();
    }
  });

  wasEscaped ? null : addAssetTitle.listen("input", (e) => { checkSaveButton() });
  wasEscaped ? null : linkField.listen("input", (e) => { checkSaveButton() });
  wasEscaped ? null : newArtistField.listen("input", (e) => { checkSaveButton() });
  wasEscaped ? null : newProjectField.listen("input", (e) => {

    if (e.rangeOffset === 0) {
      newProjectYearInput.required = false;
      newProjectTypeInput.required = false;
      newProjectYear.required = false;
      newProjectType.required = false;
      checkSaveButton();
    } else {
      newProjectYearInput.required = true;
      newProjectTypeInput.required = true;
      newProjectYear.required = true;
      newProjectType.required = true;
      checkSaveButton();
    }

  })

  /* -------------------------------------------------------------------------- */
  /*                           SIDEBAR FIELD HANDLING                           */
  /* -------------------------------------------------------------------------- */

  function isHidden(el) {
    return (el.offsetParent === null)
  }

  /* ------------------------ DOWN = SHOW | UP = HIDE ----------------------- */

  function swapProjectField() {
    if (!isHidden(projectSelect.root_)) {
      projectSelect.selectedIndex = 0;
      $(projectSelect.root_).slideUp(150);
      $(newProjectForm).slideDown(150);
      checkSaveButton();
    } else {
      newProjectField.value = "";
      newProjectType.selectedIndex = 0;
      newProjectTypeInput.required = false;
      newProjectYearInput.required = false;
      $(newProjectForm).slideUp(150);
      $(projectSelect.root_).slideDown(150);
      checkSaveButton()
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
      checkSaveButton()
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
      checkSaveButton()
    }
    addAssetFormEl.dispatchEvent(changeEvent);
  }

  wasEscaped ? null : artistSelectHelperText.root_.addEventListener("click", (e) => {
    swapArtistField();
  });
  wasEscaped ? null : cancelArtistHelperText.root_.addEventListener("click", (e) => {
    swapArtistField('cancel');
  });
  wasEscaped ? null : projectSelectHelperText.root_.addEventListener("click", (e) => {
    swapProjectField();
  });
  wasEscaped ? null : cancelProjectHelperText.root_.addEventListener("click", (e) => {
    swapProjectField('cancel');
  });

  /* ---------------------- HANDLE "HIDDEN" INPUT FIELDS ---------------------- */
  artistSelect.menu_.listen('MDCMenuSurface:opened', () => {
    var sidebarHeight = $("#add-asset__sidebar").height() - 56;
    console.log(sidebarHeight);
    artistSelect.menu_.menuSurface_.foundation_.adapter_.setMaxHeight(sidebarHeight + "px");
  });
  wasEscaped ? null : artistSelect.listen("MDCSelect:change", (e) => {
    if (artistSelectInput.value !== e.detail.value) {
      artistSelectInput.value = e.detail.value;
    }
    projectSelect.foundation_.setValue("");
    var projectsMenuItems = projectsMenu.items.slice(1);
    for (var item in projectsMenuItems) {
      var itemIndex = parseInt(item);
      var projectParentID = parseInt(projectsMenuItems[itemIndex].attributes.parent.value);
      projectsMenuItems[itemIndex].style.display = "none";
      if (projectParentID == parseInt(artistSelect.value)) {
        projectsMenuItems[itemIndex].style.display = "flex";
      }

    }
    addAssetFormEl.dispatchEvent(changeEvent);
  });

  wasEscaped ? null : projectSelect.listen("MDCSelect:change", (e) => {
    projectInputEl.value = e.detail.value;
  });
  wasEscaped ? null : newProjectType.listen("MDCSelect:change", (e) => {
    newProjectTypeInput.value = e.detail.value;
    addAssetFormEl.dispatchEvent(changeEvent);
  });
  wasEscaped ? null : newProjectYear.listen("MDCSelect:change", (e) => {
    newProjectYearInput.value = e.detail.value;
    addAssetFormEl.dispatchEvent(changeEvent);
  });


  /* -------------------------------------------------------------------------- */
  /*                          WORDPRESS MEDIA UPLOADER                          */
  /* -------------------------------------------------------------------------- */

  wasEscaped ? null : uploadEditButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (mediaUploader) {
      mediaUploader.open();
      return;
    }
  });
  wasEscaped ? null : uploadButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (mediaUploader) {
      mediaUploader.open();
      return;
    }
    mediaUploader.open();
  });
})

var mediaUploader;
$(document).ready(function () {
  function replaceExt(url, ext) {
    var pos = url.lastIndexOf(".");
    var newUrl = url.substr(0, pos < 0 ? url.length : pos) + ext;
    return newUrl;
  }
  mediaUploader = wp.media(wp.media.view.MediaFrame.Select)
  mediaUploader.on('select', function () {
    var attachment = mediaUploader.state().get('selection').first().toJSON();
    var selectedFormat = formatRadios.find(el => el.checked).value;
    switch (attachment.type) {
      case "image":

        formatRadios.find(el => el.value === 'format_image').checked = true;
        previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
        previewThumbEl.classList.remove('icon');
        currentPreviewEl ? currentPreviewEl.remove() : null;
        previewImageEl = document.createElement("img");
        previewThumbEl.prepend(previewImageEl);
        previewImageEl.classList.add('add-asset__preview-image');
        uploadFileUrlInput.setAttribute('value', attachment.url);
        uploadFileIDInput.setAttribute('value', attachment.id);
        previewImageEl.src = typeof attachment.sizes.medium !== 'undefined' ? attachment.sizes.medium.url : typeof attachment.sizes.thumbnail !== 'undefined' ? attachment.sizes.thumbnail.url : attachment.url;
        currentPreviewEl = previewImageEl;
        break;
      case "video":

        formatRadios.find(el => el.value === 'format_video').checked = true;
        previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
        previewThumbEl.classList.remove('icon');
        currentPreviewEl ? currentPreviewEl.remove() : null;
        previewVideoEl = document.createElement("img");
        previewThumbEl.prepend(previewVideoEl);
        previewVideoEl.classList.add('add-asset__preview-image');
        uploadFileUrlInput.setAttribute('value', attachment.url);
        uploadFileIDInput.setAttribute('value', attachment.id);
        previewVideoEl.src = replaceExt(attachment.url, '_thumb.jpg');
        currentPreviewEl = previewVideoEl;
        break;
      case "audio":
        formatRadios.find(el => el.value === 'format_audio').checked = true;
        previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
        currentPreviewEl ? currentPreviewEl.remove() : null;
        previewAudioEl = document.createElement("div");
        previewThumbEl.prepend(previewAudioEl);
        previewThumbEl.classList.add('icon');
        previewThumbEl.querySelector('.preview-file-name').append(attachment.filename);
        previewAudioEl.classList.add('add-asset__preview-icon', 'material-icons');
        previewAudioEl.innerHTML = 'library_music';
        uploadFileUrlInput.setAttribute('value', attachment.url);
        uploadFileIDInput.setAttribute('value', attachment.id);
        currentPreviewEl = previewAudioEl;
        break;
      case "application":
        switch (attachment.subtype) {
          case "vnd.openxmlformats-officedocument.wordprocessingml.document":
            formatRadios.find(el => el.value === 'format_document').checked = true;
            currentPreviewEl ? currentPreviewEl.remove() : null;
            previewDocEl = document.createElement("div");
            previewThumbEl.prepend(previewDocEl);
            previewThumbEl.classList.add('icon');
            previewThumbEl.querySelector('.preview-file-name').append(attachment.filename);
            previewDocEl.classList.add('add-asset__preview-icon', 'material-icons');
            previewDocEl.innerHTML = 'description';
            uploadFileUrlInput.setAttribute('value', attachment.url);
            uploadFileIDInput.setAttribute('value', attachment.id);
            currentPreviewEl = previewDocEl;
            break;
          case "pdf":
            formatRadios.find(el => el.value === 'format_document').checked = true;
            previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
            previewThumbEl.classList.remove('icon');
            currentPreviewEl ? currentPreviewEl.remove() : null;
            previewDocEl = document.createElement("img");
            previewThumbEl.prepend(previewDocEl);
            previewDocEl.classList.add('add-asset__preview-image');
            uploadFileUrlInput.setAttribute('value', attachment.url);
            uploadFileIDInput.setAttribute('value', attachment.id);
            previewDocEl.src = attachment.sizes.medium.url;
            currentPreviewEl = previewDocEl;
            break;
          case "zip":
            console.log(formatRadios.find(el => el.checked === true).value);
            if (formatRadios.find(el => el.checked === true).value !== 'format_audio-zip' && formatRadios.find(el => el.checked === true).value !== 'format_zip') {
              formatRadios.find(el => el.value === 'format_zip').checked = true;
            }
            previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
            currentPreviewEl ? currentPreviewEl.remove() : null;
            previewZipEl = document.createElement("img");
            previewThumbEl.classList.add('icon');
            previewThumbEl.querySelector('.preview-file-name').append(attachment.filename);
            previewThumbEl.prepend(previewZipEl);
            previewZipEl.classList.add('add-asset__preview-image');
            uploadFileUrlInput.setAttribute('value', attachment.url);
            uploadFileIDInput.setAttribute('value', attachment.id);
            previewZipEl.src = attachment.icon;
            currentPreviewEl = previewZipEl;
            break;
        }
        break;
      default:

    }
    checkSaveButton();
    previewEl.style = "display: flex";
    uploadButton.style = "display:none";
  })
});

/* -------------------------------------------------------------------------- */
/*                                   ACTIONS                                  */
/* -------------------------------------------------------------------------- */

$(".dam-add-asset__button").on("click", function () {
  addAssetDialog.open();
  checkSaveButton();
});



/* -------------------------------------------------------------------------- */
/*                           RESET FIELDS ON CANCEL                           */
/* -------------------------------------------------------------------------- */

addAssetDialog.listen("MDCDialog:closing", (e) => {
  if (e.detail.action === "reset") {

    $('.mdc-dialog__content').empty();
    $('.mdc-dialog__content').append(addAssetDialogHTML);

  } else {
    wasEscaped = true;
  }
});

/* -------------------------------------------------------------------------- */
/*                                 EDIT ASSETS                                */
/* -------------------------------------------------------------------------- */

$(document).ajaxSuccess(function () {
  var editAssetButtons = document.querySelectorAll(".dam-edit-asset__button");
  var editPostIDInput;

  editAssetButtons.forEach(el => $(el).on("click", function () {
    wasEscaped = false;
    addAssetDialog.open()
    var assetCard = event.target.closest('article');
    var assetData = JSON.parse(assetCard.attributes['data-asset-json'].value);
    var addAssetDialogRoot = document.querySelector('.dam-add-asset-dialog');

    // Create hidden input that adds post_id to the POST object for updating the post
    editPostIDInput = document.createElement('input');
    $(editPostIDInput).attr({ "name": "edit_post_id", 'id': "edit_post_id", 'style': "display:none;", 'value': assetData.id });
    addAssetFormEl.prepend(editPostIDInput);

    /* ------------------------ EDIT LABELS OUTSIDE FORM ------------------------ */

    addAssetDialogRoot.querySelector('.mdc-dialog__title').innerText = 'Editing: ' + assetData.title;
    addAssetDialogRoot.querySelector('#add-asset__save-button').innerText = 'Update';

    /* ----------------------- EDIT FORM LABELS AND INPUTS ---------------------- */

    // Asset Title
    addAssetTitle.root_.querySelector('.mdc-floating-label').innerText = 'Edit Title';
    addAssetTitle.value = assetData.title;

    // Format Option
    formatRadios.find(el => el.value === assetData.format).checked = true;

    // Creator Field
    assetData.creator ? creatorField.value = assetData.creator : null;

    // Artist Selection
    artistSelect.foundation_.setValue(assetData.artist_id.toString());
    artistSelect.menu_.list_.selectedIndex = artistSelect.selectedIndex;
    artistSelect.value = assetData.artist_id.toString();
    artistSelectInput.value = assetData.artist_id;
    artistSelect.foundation_.notchOutline(artistSelect.foundation_.adapter_.getLabelWidth());
    artistSelect.foundation_.adapter_.floatLabel(true);

    // Project Selection
    if (assetData.project_id) {
      projectSelect.foundation_.setValue(assetData.project_id.toString());
      projectSelect.menu_.list_.selectedIndex = projectSelect.selectedIndex;
      projectInputEl.value = assetData.project_id;
      projectSelect.foundation_.notchOutline(projectSelect.foundation_.adapter_.getLabelWidth());
      projectSelect.foundation_.adapter_.floatLabel(true);
    }
    /* -------------------------------------------------------------------------- */
    /*                               HANDLE PREVIEW                               */
    /* -------------------------------------------------------------------------- */
    previewEl.style = "display: none";
    previewContainerEl.style = "display: none";
    uploadButton.style = "display:flex";
    if (assetData.format === 'format_link') {
      debugger;
      creatorField.root_.style.display = 'flex';
      creatorField.root_.parentNode.style.display = 'flex';
      linkField.input_.required = true;
      linkField.value = assetData.permalink;
      uploadFileUrlInput.required = false;
      uploadFileIDInput.required = false;
      uploadButton.disabled = true;
      uploadEditButton.disabled = true;
      previewContainerEl.style.display = 'none';
      $(uploadButton).animate({ opacity: '0' });
      $(linkField).animate({ opacity: '100' });
      linkField.root_.style.display = 'flex';
      checkSaveButton();
    } else {
      debugger;
      creatorField.root_.style.display = 'flex';
      creatorField.root_.parentNode.style.display = 'flex';
      linkField.input_.required = false;
      uploadFileUrlInput.required = true;
      uploadFileIDInput.required = true;
      previewContainerEl.querySelector('#upload_button_helper-text').style.display = 'none';
      uploadButton.disabled = true;
      uploadEditButton.disabled = false;
      uploadButton.style = "display:none";
      if (linkField.root_.style.display !== 'none') {
        linkField.root_.style.display = 'none';
      }
      $(linkField).animate({ opacity: '100' });
      if (previewContainerEl.style.display !== 'flex') {
        previewContainerEl.style.display = 'flex';
        previewEl.style = "display:flex";
        $(previewContainerEl).animate({ opacity: '100' });
      }
      checkSaveButton();
    }
    $('input[type="checkbox"]').on('click', (e) => {
      debugger;
      checkSaveButton();
      if (addAssetFormEl.elements.format.value === 'format_link') {
        linkField.input_.required = true;
        uploadFileUrlInput.required = false;
        uploadFileIDInput.required = false;
        uploadButton.disabled = true;
        uploadEditButton.disabled = true;
        previewContainerEl.style.display = 'none';
        $(uploadButton).animate({ opacity: '0' });
        $(linkField).animate({ opacity: '100' });
        linkField.root_.style.display = 'flex';
        checkSaveButton();
      } else if (e.target.checked) {
        linkField.input_.required = false;
        uploadFileUrlInput.required = true;
        uploadFileIDInput.required = true;
        previewContainerEl.querySelector('#upload_button_helper-text').style.display = 'none';
        uploadButton.disabled = false;
        uploadEditButton.disabled = false;
        if (linkField.root_.style.display !== 'none') {
          linkField.root_.style.display = 'none';
        }
        $(linkField).animate({ opacity: '100' });
        if (previewContainerEl.style.display !== 'flex') {
          previewContainerEl.style.display = 'flex';
          previewEl.style.display = 'none';
          uploadButton.style.display = "flex";
        }
        checkSaveButton();
      }
    });
    var mimeType = assetData.mime;
    switch (mimeType.split("/")[0]) {
      case "image":
        formatRadios.find(el => el.value === 'format_image').checked = true;
        previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
        previewThumbEl.querySelector('.preview-file-name').style = 'display:none';
        previewThumbEl.classList.remove('icon');
        currentPreviewEl ? currentPreviewEl.remove() : null;
        previewImageEl = document.createElement("img");
        previewThumbEl.prepend(previewImageEl);
        previewImageEl.classList.add('add-asset__preview-image');
        uploadFileUrlInput.setAttribute('value', assetData.permalink);
        uploadFileIDInput.setAttribute('value', assetData.attachment_id);
        previewImageEl.src = assetData.thumbnail;
        currentPreviewEl = previewImageEl;
        break;
      case "video":

        formatRadios.find(el => el.value === 'format_video').checked = true;
        previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
        previewThumbEl.querySelector('.preview-file-name').style = 'display:none';
        previewThumbEl.classList.remove('icon');
        currentPreviewEl ? currentPreviewEl.remove() : null;
        previewVideoEl = document.createElement("img");
        previewThumbEl.prepend(previewVideoEl);
        previewVideoEl.classList.add('add-asset__preview-image');
        uploadFileUrlInput.setAttribute('value', assetData.permalink);
        uploadFileIDInput.setAttribute('value', assetData.attachment_id);
        previewVideoEl.src = assetData.thumbnail;
        currentPreviewEl = previewVideoEl;
        break;
      case "audio":
        formatRadios.find(el => el.value === 'format_audio').checked = true;
        previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
        previewThumbEl.querySelector('.preview-file-name').style = 'display:block';
        currentPreviewEl ? currentPreviewEl.remove() : null;
        previewAudioEl = document.createElement("div");
        previewThumbEl.prepend(previewAudioEl);
        previewThumbEl.classList.add('icon');
        previewThumbEl.querySelector('.preview-file-name').append(assetData.filename);
        previewAudioEl.classList.add('add-asset__preview-icon', 'material-icons');
        previewAudioEl.innerHTML = 'library_music';
        uploadFileUrlInput.setAttribute('value', assetData.permalink);
        uploadFileIDInput.setAttribute('value', assetData.attachment_id);
        currentPreviewEl = previewAudioEl;
        break;
      case "application":
        switch (mimeType.split("/")[1]) {
          case "vnd.openxmlformats-officedocument.wordprocessingml.document":
            formatRadios.find(el => el.value === 'format_document').checked = true;
            currentPreviewEl ? currentPreviewEl.remove() : null;
            previewDocEl = document.createElement("div");
            previewThumbEl.prepend(previewDocEl);
            previewThumbEl.classList.add('icon');
            previewThumbEl.querySelector('.preview-file-name').style = 'display:block';
            previewThumbEl.querySelector('.preview-file-name').append(assetData.filename);
            previewDocEl.classList.add('add-asset__preview-icon', 'material-icons');
            previewDocEl.innerHTML = 'description';
            uploadFileUrlInput.setAttribute('value', assetData.permalink);
            uploadFileIDInput.setAttribute('value', assetData.attachment_id);
            currentPreviewEl = previewDocEl;
            break;
          case "pdf":
            formatRadios.find(el => el.value === 'format_document').checked = true;
            previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
            previewThumbEl.querySelector('.preview-file-name').style = 'display:none';
            previewThumbEl.classList.remove('icon');
            currentPreviewEl ? currentPreviewEl.remove() : null;
            previewDocEl = document.createElement("img");
            previewThumbEl.prepend(previewDocEl);
            previewDocEl.classList.add('add-asset__preview-image');
            uploadFileUrlInput.setAttribute('value', assetData.permalink);
            uploadFileIDInput.setAttribute('value', assetData.attachment_id);
            previewDocEl.src = assetData.thumbnail;
            currentPreviewEl = previewDocEl;
            break;
          case "zip":
            console.log(formatRadios.find(el => el.checked === true).value);
            if (formatRadios.find(el => el.checked === true).value !== 'format_audio-zip' && formatRadios.find(el => el.checked === true).value !== 'format_zip') {
              formatRadios.find(el => el.value === 'format_zip').checked = true;
            }
            previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
            currentPreviewEl ? currentPreviewEl.remove() : null;
            previewZipEl = document.createElement("div");
            previewThumbEl.classList.add('icon');
            previewThumbEl.querySelector('.preview-file-name').style = 'display:block';
            previewThumbEl.querySelector('.preview-file-name').append(assetData.filename);
            previewThumbEl.prepend(previewZipEl);
            previewZipEl.classList.add('add-asset__preview-icon', 'media-archive-icon');
            previewZipEl.innerHTML = 'media-archive';
            uploadFileUrlInput.setAttribute('value', assetData.permalink);
            uploadFileIDInput.setAttribute('value', assetData.attachment_id);
            currentPreviewEl = previewZipEl;
            break;
        }
        break;
    }

    addAssetFormEl.dispatchEvent(changeEvent);
    /* -------------------------------------------------------------------------- */
    /*                                RESET DIALOG                                */
    /* -------------------------------------------------------------------------- */

    addAssetDialog.listen("MDCDialog:closed", (e) => {

      /* -------------------- RESET EDITED LABELS OUTSIDE FORM -------------------- */

      addAssetDialogRoot.querySelector('.mdc-dialog__title').innerText = 'Add New Asset';
      addAssetDialogRoot.querySelector('#add-asset__save-button').innerText = 'Save';


      $('.mdc-dialog__content').empty();
      $('.mdc-dialog__content').append(addAssetDialogHTML);
      wasEscaped = false;
    });
  }))
});