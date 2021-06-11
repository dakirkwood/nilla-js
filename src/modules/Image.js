/**
 * Defines the Image object.
 *
 * HTML Output:
 * <figure>
 *     <div class="img-box">
 *         <img src="" alt="" />
 *      </div>
 *     <figcaption></figcaption>
 * </figure>
 *
 * @params
 *  _imgUrl (string)
 *  _imgAlt (string)
 *  _imgFormat (string)
 *    Options:
 *    'portrait' -- 3:4 ratio, vertical rectangle DEFAULT
 *    'square' -- 1:1 ratio box
 *    'landscape' -- 4:3 ratio, horizontal rectangle
 *    'wide' -- 16:9 horizontal rectangle
 *    'circle' -- You know, a circle
 *
 *  _showCaption: (boolean)
 *    If true, the _imgAlt value is displayed as the figcaption.
 *
 *  _imgX: (integer)
 *    Percentage to move the image horizontally within the container.
 *
 *  _imgY: (integer)
 *    Percentage to move the image vertically within the container.
 *
 *  _imgBorder (boolean)
 *    If true, a border is added to the div.img-box container.
 *
 *  _imgBorWidth (integer)
 *    Width in pixels of the image border.
 */

class Image {
  constructor(
    _imgUrl,
    _imgAlt,
    _imgFormat, //options: portrait | square | landscape | wide
    _showCaption, // boolean: true | false
    _imgX,
    _imgY,
    _imgBorder,
    _imgBorWidth,
    _imgShadow
  ) {
    this._url = encodeURI(_imgUrl);
    this._alt = _imgAlt ? _imgAlt : 'This is a nice image.';
    this._format = _imgFormat ? _imgFormat : 'landscape';
    this._caption = _showCaption ? this._alt : '';
    this._imgX = _imgX ? _imgX : 50;
    this._imgY = _imgY ? _imgY : 50;
    this._imgBorder = _imgBorder ? _imgBorder : 0;
    this._imgBorWidth = _imgBorWidth ? _imgBorWidth : 0;
    this._imgShadow = _imgShadow ? _imgShadow : 0;

    // Determine the desired ratio.
    switch (_imgFormat) {
      case 'portrait':
        this.ratio_multiplier = 4 / 3;
        break;

      case 'square':
      case 'circle':
        this.ratio_multiplier = 1;
        break;

      case 'wide':
        this.ratio_multiplier = 9 / 16;
        break;

      default: // landscape
        this.ratio_multiplier = 3 / 4;
    }
  }

  /**
   * Return the inline style declaration by tag.
   * @param tag
   * @returns {string}
   */
  style(tag){

    switch (tag){
      case 'div-frame':
        return this._imgBorder ? `padding: ${this._imgBorWidth}px;` : '';

      case'div-crop':
        let circle = this._format === 'circle' ? `border-radius: 50%; overflow: hidden;` : '';
        return `${circle} width:100%; height:0; padding-top:calc(100% * ${this.ratio_multiplier}); position:relative;`;

      case 'img':
        return `width:100%; height:100%; top:0; object-fit:cover; object-position:${this._imgX}% ${this._imgY}%; position:absolute;`;
    }
  }

  /**
   * Return the HTML output for the image.
   * @returns {string}
   */
  render(){
    // For responsive image markup, we need the filename w/o extension.
    let pattern = /([\w_\-\/\d%\s]+).[jpegsvn]+/;
    let filename = this._url.match(pattern);
    filename = decodeURI(filename[1]);  //style="${ this.style('div-crop') }"

    const html = `
      <figure>
        <div class="media-frame" style="${ this.style('div-frame') }">
          <div class="crop-box ${ this._format }">
            <img srcset=".${ filename }_600w.jpg 600w,
                         .${ filename }_1200w.jpg 1200w,
                         .${ filename }_1600w.jpg 1600w" 
                sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1600px" 
                src="${ this._url }" 
                alt="${ this._alt }" 
                style="${ this.style('img') }" 
                loading="lazy" />
          </div><!-- /.crop-box -->
        </div><!-- /.media-frame -->
        <figcaption>${ this._caption }</figcaption>
      </figure>
    `;
    return html;
  }
}

export default Image;
