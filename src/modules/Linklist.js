/**
 * Defines the Linklist object
 *
 * Output HTML
 * <_tag class=" _type ">
 *     <Link />
 * </_tag>
 *
 * @params
 *  _tag (string) ul or ol
 *  _class (string)
 *  _listItems (array) List of title text in same order as _urls.
 *  _urls (array) Comma separated list of URLs
 *  _targets (array) Comma separated list of targets in same order as _urls.
 *
 */
import Link from "./Link";
import List from "./List";
import { delimiter } from "./Delimiter";

class Linklist extends List {
    constructor(
        _tag,
        _class,
        _listItems,
        _urls,
        _targets,
        _classes,
        _icons
    ) {
        super(_tag,_class,_listItems);

        this._urls = _urls ? _urls.split(delimiter) : [];
        this._targets = _targets ? _targets.split(delimiter) : [];
        this._classes = _classes ? _classes.split(delimiter) : [];
        this._icons = _icons ? _icons.split(delimiter) : [];
    }

    /**
     * Return the HTML output for this Link List.
     * @returns {string}
     */
    render(){
        if(!this._urls.length > 0){ return '';}

        let links = '';
        let target = '';
        this._urls.map( (url, i) => {

            // Include the link target if provided.
            // if(this._targets[i]){
            //     target = this._targets[i];
            // }
            let link_text = this._listItems[i];
            let target = this._targets.length > 0 ? this._targets[i] : '';
            let link_class = this._classes.length > 0 ? this._classes[i] : '';
            let icon = this._icons.length > 0 ? this._icons[i] : '';

            // Create a Link object.
            let l = new Link('a', link_class, target, link_text, link_text, url, icon);

            // Append to the HTML output.
            links += `<li>${ l.render() }</li>`;
        });

        return `<${ this._tag } class="${ this._class }-list">${ links }</${ this._tag }><!-- /.${this._class}-list -->`;
    }
}

export default Linklist;