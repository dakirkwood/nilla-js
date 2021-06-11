/**
 * Defines a Leader.
 *
 * HTML Output
 * <p class="leader"> { Leader }</p>
 *
 */

function Leader (text) {
    if( text === ''){ return ''; }
    return `<p class="leader">${text}</p>`;
}

export default Leader;