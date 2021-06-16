/**
 * Defines a Link object.
 *
 * Output HTML
 *
 * <a href="_url" title="_title" target="_self"> <_tag>Text</_tag> </_a>
 *
 *
 * @params:
 *  _tag string (h2 | h3 | button)
 *  _target string (self | parent | top | blank)
 *  _text string
 *  _title string
 *  _url string
 *
 */
import Icon from "./Icon.js";

class Link {
    constructor(
        _tag = 'a', // Accepts 'h2', 'h3' and 'button' as options.
        _class = '',
        _target = 'self', // Accepts 'blank' as an option.
        _text = 'Text',
        _title = 'Title',
        _url = '_url',
        _icon = '',
        _icon_color = '#333'
    ) {
        this._tag = _tag;
        this._class = _class !== '' ? `class="${_class}"` : '';
        this._target = _target;
        this._text = _text;
        this._title = _target === 'blank' ? `${_title}. This link opens in new window.` : _title;
        this._url = encodeURI(_url);
        this._icon = _icon;
        this._icon_color = _icon_color;
    }
    render(){
        // Icon markup.
        //let arrow_icon = `<span class="material-icons">arrow_forward</span>`;
        //let chevron_icon = `<span class="material-icons">chevron_right</span>`;
        //let icon = `<span class="material-icons chevron">&#10095;</span>`;
        let icon = Icon(this._icon, this._icon_color);

        // The default string output
        let output = `<a ${this._class} href="${this._url}" title="${this._title}" target="${this._target}">${this._text} ${icon}</a>`;

        switch (this._tag) {
            // Wrap the output within a h2/h3 tag.
            case 'h2':
            case 'h3':
                return `<${this._tag}>${output}</${this._tag}>`;

            // Wrap the <a> around a button.
            case 'button':
                return `<a href="${this._url}" title="${this._title}" target="${this._target}"><button ${this._class}>${this._text}</button></a>`;

            default:
                return output;
        }
    }
}

export default Link;