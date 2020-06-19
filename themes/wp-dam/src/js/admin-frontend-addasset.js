import { MDCDialog } from "@material/dialog";
import { MDCRadio } from "@material/radio";
import { MDCSelect } from "@material/select";
import { MDCSelectHelperText } from '@material/select/helper-text';

var counter = 1;
function count() {
  console.log(counter);
  counter++;
}

const helperText = new MDCSelectHelperText(document.querySelector('.mdc-select-helper-text'));

const addAssetDialog = new MDCDialog(
  document.querySelector(".dam-add-asset-dialog")
);

var artistSelect = new MDCSelect(
  document.querySelector(".add-asset__category--artist")
);
var projectSelect = new MDCSelect(
  document.querySelector(".add-asset__category--project")
);

$(".dam-add-asset__button").on("click", function () {
  addAssetDialog.open();

});
addAssetDialog.listen("MDCDialog:closing", (e) => {
  if (e.detail.action === "reset") {
    var formInputs = addAssetDialog.root_.querySelectorAll("input");
    for (var input in formInputs) {
      var inputIndex = parseInt(input);
      var inputEl = formInputs[inputIndex];
      if (inputEl !== undefined && inputEl.type !== "radio")
        inputEl.value = "";
    }
  }
});

var artistSelectMenuEl = document.querySelector(
  ".add-asset__category--artist-select"
);
var projectSelectList = document.querySelector("#project_select_list");

var projectsMenu = projectSelect.menu_;


artistSelect.listen("MDCSelect:change", () => {

  count();
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

});
// var newHandle = function getProjects(event) {
//   var data = {
//     action: "frontend_add_asset_get_projects",
//     selected_artist: event.detail.value,
//   };
//   $.ajax({
//     type: "POST",
//     async: true,
//     url: ajax_url,
//     data: data,
//     beforeSend: function () {
//       console.log('Loading...');
//     },
//     success: function (results) {
//       console.log('Success!');
//       var counter = 1;
//       console.log(counter);
//       counter++;
//       projectSelect.disabled = false;
//       var projects = JSON.parse(results);

//       for (var project in projects) {
//         var projectListItem = `
//         <li class="mdc-list-item" data-value="${project}">
//             <span class="mdc-list-item__text">
//                 ${projects[project]}
//             </span>
//         </li>
//         `;
//         projectSelectList.innerHTML += projectListItem;
//       }
//     },
//   });

// }
// artistSelect.listen("MDCSelect:change", newHandle);



var radios = [].map.call(document.querySelectorAll(".mdc-radio"), function (el) {
  return new MDCRadio(el);
});

radios.forEach((radio) =>
  radio.root_.addEventListener("change", () => radioChange(radio))
);
function radioChange(radio) {
  console.log(radio.value);
}


//Uploader


var mediaUploader;
var uploadButton = document.querySelector("#upload_button");
var uploadFileInput = document.querySelector("#upload_file");
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
  });
  mediaUploader.open();
  debugger;
});
