/**
 * Defines a Block object.
 * The Card class (defined at the bottom of this file) extends Block.
 *
 * HTML Output
 * <section class="" id="" <Background /> >
 *     <Image />
 *     <Title />
 *     <Leader />
 *     <Link />
 * </section>
 *
 * @param dataset (object) The entire dataset of the element.
 *
 */
import Background from "./Background";
import Image from "./Image";
import Header from "./Header";

export default class Block {
    constructor( dataset, children ) {

        this._type = dataset.blockType && dataset.blockType.length > 0 ? dataset.blockType.split(' ') : [];
        this._list = dataset.leaderListItems ? dataset.leaderListItems : null;
        this._listClass = dataset.leaderListClass ? dataset.leaderListClass : '';
        this._header = new Header(
            this._type,
            'h2',
            dataset.headline,
            dataset.headlineUrl,
            dataset.headlineColor,
            dataset.leader,
            dataset.leaderListItems,
            dataset.leaderListClass,
            dataset.leaderListTag,
            dataset.linkUrls,
            dataset.linkTitles,
            dataset.linkTargets,
            dataset.linkClasses,
            dataset.linkIcons
        );
        this._img = dataset.imgUrl ?
            new Image(
                dataset.imgUrl,
                dataset.imgAlt,
                dataset.imgFormat,
                dataset.imgCaption,
                dataset.imgX,
                dataset.imgY,
                dataset.imgBorder,
                dataset.imgBorderWidth,
                dataset.imgShadow
            ) : null;
        this._bg = new Background(
            dataset.bgImg,
            dataset.bgGrad,
            dataset.bgColr,
            dataset.bgAttach
        );
        this._children = children ? children : [];
        this._mobileCompact = dataset.mobileCompact ? dataset.mobileCompact : 'false';
    }

    /**
     * Return an array of child elements (articles) to be formatted as cards.
     * @returns {[]}
     */
    get_cards(){
        let child_nodes = [];
        if(this._children.length > 0){
            let i;
            for(i = 0; i < this._children.length; i++){
                child_nodes[i] = this._children[i];
            }
        }
        return child_nodes;
    }

    /**
     * Return the background style attribute.
     * @returns {string}
     */
    background(){
        return this._bg.render();
    }

    /**
     * Return the HTML of this block.
     * @returns {string}
     */
    render(){

        let html = '';
        let imageLeft = '';
        let imageRight = '';

        // Process the image if there is one
        if(this._type[0] === 'Image_block' && this._img){
            if(
                //this._type.find(string => string === 'iblB') ||
                //this._type.find(string => string === 'iblD')
                this._type.indexOf('iblB') !== -1 || this._type.indexOf('iblD') !== -1
                ){
                imageRight = this._img.render();
            } else {
                imageLeft = this._img.render();
            }
        }

        // Process any cards if this is a grid.
        let cards = this.get_cards();

        // Assemble the HTML for the cards
        let cards_output = this._mobileCompact === 'true' ? `<div class="cards mobile-swipe">` : `<div class="cards">`;

        cards.forEach( (card) => {
            cards_output += new Card( card.dataset, this._mobileCompact ).render();
        });

        cards_output += `</div><!-- /.cards -->`;

        // Assemble the output.
        html += `
            <div class="block-content">
                ${imageLeft}
                ${this._header.render()}
                ${imageRight}
                ${cards_output}
            </div><!-- /.block-content -->
            `;

        return html;
    }
}

/**
 * Defines the Card object
 *
 *
 */
export class Card extends Block {
    constructor(dataset, mobile_compact) {
        super(dataset);

        this._header = new Header(
            this._type,
            'h3',
            dataset.headline,
            dataset.headlineUrl,
            dataset.headlineColor,
            dataset.leader,
            dataset.leaderListItems,
            dataset.leaderListClass,
            dataset.leaderListTag,
            dataset.linkUrls,
            dataset.linkTitles
        );
        this._mobileCompact = mobile_compact;
    }
    render(){
        let html = '';
        let img = '';

        // Generate the HTML for the image if included.
        if(this._type[0] === 'Image_card' && this._img){
            img += this._img.render();
        }

        // Add the mobile-swipe class if requested.
        let mobile = this._mobileCompact === 'true' ? 'mobile-swipe' : '';

        html = `
            <article class="card ${this._type.join(' ') } ${ mobile }">
                ${ img }
                ${ this._header.render() }
            </article>
        `;
        return html;
    }
}
