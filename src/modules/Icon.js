/**
 * Returns the HTML for the desired icon.
 *
 * @param icon {string} Accepts 'arrow' and 'chevron_right' as options.
 * @param color {string} Accepts hexadecimal values.
 * @returns {string}
 *
 */
export default function Icon(icon, color) {
    // Return an empty string if icon is not provided.
    if(icon === '') return '';

    switch (icon){
        case 'arrow':
            let arrow = '<svg ' +
                'aria-hidden="true" ' +
                //'focusable="false" ' +
                //'data-prefix="fas" ' +
                //'data-icon="arrow-circle-right" ' +
                //'role="img" ' +
                //'xmlns="http://www.w3.org/2000/svg" ' +
                'viewBox="0 0 512 512" ' +
                'class="text-unt-yellow"' +
                'style="color:' + color + ';">' +
                    '<path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path>' +
                '</svg>';
            return arrow;

        case 'chevron_right':
            let chevron_right = '<svg ' +
                'aria-hidden="true" ' +
                //'focusable="false" ' +
                //'data-prefix="fas" ' +
                //'data-icon="chevron-right" ' +
                //'role="img" ' +
                //'xmlns="http://www.w3.org/2000/svg" ' +
                'viewBox="0 0 320 512" ' +
                'class="svg-inline--fa fa-chevron-right fa-w-10"' +
                'style="color:' + color + ';">' +
                    '<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>' +
                '</svg>';
            return chevron_right;
    }
}