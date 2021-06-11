/**
 * Returns a formatted Title.
 *
 * HTML Output
 * <_tag>{ Title }</_tag>
 * If _url is provided, Title will be wrapped in <a> tags.
 *
 * @params
 *  _tag (string)
 *  _text (string)
 *  _url (string)
 *
 */
import Link from "./Link";

function Title(_type, _tag, _text, _color = '', _url = null) {
    // If no text is provided, return an empty string.
    if(_text === ''){ return ''; }

    // Replace '*/*' with <br /> tag.
    _text = _text.replace(/\*\/\*/, '<br />');

    // Create the style attribute if _color is provided.
    let shadow = _color === 'white' ? 'black' : 'white';
    let color = _color !== '' ? `style="color:${_color};text-shadow:0 0 5px ${shadow};"` : '';

    // If url is provided, return as a link.
    if(_url){
        // Create a Link object.
        let title_link = new Link('a','','self',_text, _text, _url);

        return `<${ _tag } ${color}>${ title_link.render() }</${ _tag }>`;
    }

    return `<${ _tag } ${color}>${ _text }</${ _tag }>`;
}

export default Title;