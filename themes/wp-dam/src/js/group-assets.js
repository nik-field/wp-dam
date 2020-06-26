import { MDCCheckbox } from '@material/checkbox';
import { MDCSnackbar } from '@material/snackbar';
import { MDCMenu } from '@material/menu';
if (window.location.pathname !== '/share/') {
    var groupMenu;
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.timeoutMs = -1;
    const snackbarAction = snackbar.root_.querySelector('.mdc-snackbar__action');


    var checkboxGroup;
    var groupAssetButton = document.querySelector('.dam-group-asset__button');
    document.getElementById("search-results").addEventListener('searchdone', (e) => {
        checkboxGroup = [].map.call(document.querySelectorAll(".group-asset__checkbox"), function (el) { return new MDCCheckbox(el); });
        groupMenu = new MDCMenu(document.querySelector('.group-asset__menu'));
        var assetCards = document.querySelector("#search-results");
        var selectedAssets = [];

        function snackbarChangeHandler() {
            if (selectedAssets.length >= 1) {
                let selected = selectedAssets.length;
                snackbar.labelText = 'There' + (selected !== 1 ? ` are ${selected} assets ` : ` is ${selected} asset `) + 'selected. Do you want to copy a link to them?';
                snackbar.actionButtonText = 'Copy';
                groupAssetButton.classList.add("copy");
                snackbarAction.classList.add("copy");
                snackbarAction.setAttribute("data-clipboard-text", $homeUrl + '/share/?id=' + selectedAssets.join('+'));
                groupAssetButton.setAttribute("data-clipboard-text", $homeUrl + '/share/?id=' + selectedAssets.join('+'));
                var ripple = document.createElement("div");
                ripple.classList.add("mdc-button__ripple");
                snackbarAction.append(ripple);
                debugger;
            } else if (selectedAssets.length == 0) {
                snackbar.labelText = 'No assets selected! Use the checkboxes on asset cards to select them.';
                snackbar.actionButtonText = 'Show Me';
                var ripple = document.createElement("div");
                ripple.classList.add("mdc-button__ripple");
                groupAssetButton.classList.remove("copy");
                snackbarAction.classList.remove("copy");
                snackbarAction.setAttribute("data-clipboard-text", "No assets were selected");
                groupAssetButton.setAttribute("data-clipboard-text", "No assets were selected");
                snackbarAction.append(ripple);
            }
        }

        assetCards.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedAssets.push(e.target.value);
                console.log(selectedAssets);
                snackbarChangeHandler()
                debugger;
                if (!snackbar.isOpen) {
                    snackbar.open();
                }
            } else {
                selectedAssets = selectedAssets.filter((value) => { return value !== e.target.value });
                console.log(selectedAssets);
                snackbarChangeHandler()
            }
        });
        groupAssetButton.addEventListener('click', (e) => {
            snackbar.open();
            checkboxGroup.forEach(element => { element.ripple_.activate(); element.ripple_.deactivate(); });
            snackbar.listen('MDCSnackbar:opened', snackbarChangeHandler());
        })
        snackbar.listen('MDCSnackbar:closing', (e) => {
            if (e.detail.reason === 'action') {
                snackbar.open();
                checkboxGroup.forEach(element => { element.ripple_.activate(); element.ripple_.deactivate(); });
            }

        });

    })
}