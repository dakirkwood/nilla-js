/**
 * Defines the Header object.
 *
 * Output HTML
 * <header>
 *     <Title />
 *     <hr />
 *     <Leader />
 *     <Linklist />
 * </header>
 */

import Title from "./Title";
import Leader from "./Leader";
import List from "./List";
import Linklist from "./Linklist";

class Header {
    constructor(
        _type,
        _headlineTag = null,
        _headline = null,
        _headlineUrl = null,
        _headlineColor = '',
        _leader = null,
        _leaderListItems = null,
        _leaderListClass = '',
        _leaderListTag = 'ul',
        _lkUrls = null,
        _lkTtls = null,
        _lkTgts = null,
        _lkClas = null,
        _lkIcns = null,
    ) {
        this._title = _headline ? Title(_type, _headlineTag, _headline, _headlineColor, _headlineUrl) : '';
        this._leader = _leader ? Leader(_leader) : '';
        this._leaderList = _leaderListItems ? new List(_leaderListTag, _leaderListClass, _leaderListItems) : null;
        this._links = new Linklist('ul', 'btn', _lkTtls, _lkUrls, _lkTgts, _lkClas, _lkIcns);
        this._type = _type;
    }
    render() {
        // Get the list output string.
        let list = '';
        if(this._leaderList){
           list = this._leaderList.render();
        }

        let html = `
                ${ this._title }
                <hr />
                ${ this._leader }
                ${ list }
                ${ this._links.render() }
        `;

        // if(this._type[0] === 'Title_card' && this._type[1] !== 'tclB'){
        //     return html;
        // }
        return `<header>${ html }</header>`;
    }
}

export default Header;