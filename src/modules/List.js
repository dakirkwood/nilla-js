/**
 * Defines the List object.
 *
 * Output HTML
 * <_tag>
 *     <li>_listItems[i]</li>
 * </_tag>
 *
 * @params
 *  _tag (string) options are ul | ol
 *  _class (string)
 *  _list_items (string)
 *
 */

export default class List {
    constructor(_tag = '', _class, _listItems = null){
        this._tag = _tag ? _tag : 'ul';
        this._class = _class ? _class : '';
        this._listItems = _listItems ? _listItems.split(' | ') : [];
    }

    render(){
        // Process the list items.
        let listItems_output = '';
        this._listItems.forEach( (item) => {
           listItems_output += `<li>${ item }</li>`;
        });

        // Process the class attribute
        let list_class = '';
        if(this._class.length > 0){
            list_class = `class="${ this._class }"`;
        }

        return `<${ this._tag } ${ list_class }>${ listItems_output }</${ this._tag }>`;
    }
}