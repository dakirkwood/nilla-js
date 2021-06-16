/**
 * Defines a Background object.
 *
 * Output HTML (outputs an inline style attribute for a tag)
 *
 * style="background-color:_color;background-image: _uri, _gradient;background-attachment: _attachment;"
 *
 * @params:
 *  _uri (string)
 *  _gradient (string)
 *  _color (string)
 *  _attachment (string)
 *
 */

class Background {
    constructor(
        _uri = "",
        _gradient = "",
        _color = "",
        _attachment = "",
    ) {
        this._uri = _uri;
        this._gradient = _gradient;
        this._color = _color;
        this._attachment = _attachment;
    }

    /**
     * Return the inline styles string for the Background element.
     * @returns {string}
     */
    render(){
        // Return an empty string if no background values were supplied.
        let val_check = '';
        for(const property in this){
            val_check += this[property];
            if(val_check === ''){ return ''; }
        }

        let bgImg = this._gradient ? `url(${this._uri}), ${this._gradient}` : `url(${this._uri})`;
        return `background-attachment: ${this._attachment}; background-color: ${this._color};background-image: ${bgImg};`;
    }
}

export default Background;