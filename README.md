# nilla-js

A factory script used to create page components for University of North Texas websites.

## Intro

NillaJS is a factory script used to generate a consistent HTML structure for various block and card level page components. Block-level components are added to the page using &lt;section&gt; tags. Card-level components are added as children to block-level tags using &lt;article&gt; tags. Attributes are added using a specific list of data-* attributes. NillaJS processes these data-* attributes and outputs the raw HTML that can then be styled. Having consistent markup across all components allows for easier long-term management of CSS and code.

## The Concept

The purpose of NillaJS is to provide consistent HTML structure for page modules/components. Block-level modules are constructed from &lt;section&gt; tags while Card-level modules are constructed from &lt;article&gt; tags. No actual contect is added; NillaJS will use the values from the data- attributes to construct the HTML output. For example, the following input:
```angular2html
<section class="u-block" 
         data-block-type="Image_block iblA" 
         data-headline="Don't lose your Aid" 
         data-leader="Did you know factors such as grades, residency, course load, and attendance can affect your loans, scholarships and more? Learn how to stay eligible for your financial aid" 
         data-img-url="/templating/img/20_0304_Fall-stock0070_1200w.jpg" 
         data-img-alt="Fall Campus colors." 
         data-img-format="landscape" 
         data-link-urls="https://financialaid.unt.edu" 
         data-link-titles="Learn about Award Requirements" 
         ></section>
```
…produces the following output:
```angular2html
<section class="u-block Image_block">
    <div class="block-content">
        <figure>
            <div class="media-frame" style="">
                <div class="crop-box landscape">
                    <img srcset="/templating/img/20_0304_Fall-stock0070_600w.jpg 600w,
                         /templating/img/20_0304_Fall-stock0070_1200w.jpg 1200w,
                         /templating/img/20_0304_Fall-stock0070_1600w.jpg 1600w" sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1600px" src="/templating/img/20_0304_Fall-stock0070_1200w.jpg" alt="Fall Campus colors." style="width:100%; height:100%; top:0; object-fit:cover; object-position:50% 50%; position:absolute;" loading="lazy">
                </div><!-- /.crop-box -->
            </div><!-- /.media-frame -->
            <figcaption></figcaption>
        </figure>
        <header>
            <h2>Don't lose your Aid</h2>
            <hr>
            <p class="leader">Did you know factors such as grades, residency, course load, and attendance can affect your loans, scholarships and more? Learn how to stay eligible for your financial aid</p>
            <ul class="btn-list"><li><a class="btn" href="https://financialaid.unt.edu" title="Learn about Award Requirements" target="">Learn about Award Requirements<span class="material-icons">chevron_right</span></a></li></ul><!-- /.btn-list -->
        </header>
        <div class="cards"></div><!-- /.cards -->
    </div><!-- /.block-content -->
</section>
```
The following input for a typical `Grid_block`:
```angular2html
<section class="u-block Grid_block">
    <div class="block-content">
        <header>
            <h2>[title]</h2>
            <p>[leader]</p>
        </header>
        <div class="cards">
            <article>
                <header>
                    <h3>[title]</h3>
                    <p>[leader]</p>
                    <ul>[link list]</ul>
                </header>
            </article>
            <article></article>
            <article></article>
        </div>
    </div>
</section>
```
…produces the following HTML output:
```angular2html
<section class="u-block" 
         data-block-type="Grid_block gbl3" 
         data-headline="Students" 
         data-leader="Find out what you need to know for registering courses and making the most of your time at UNT.">
            
            <article 
                    data-block-type="Title_card" 
                    data-headline="Registering for Classes" 
                    data-leader="Find out what to do before, during and after registration to stay on track towards your degree." 
                    data-link-urls="https://registrar.unt.edu" 
                    data-link-titles="About Registering"></article>
            
            <article data-block-type="Title_card" 
                    data-headline="Transcripts and Records" 
                    data-leader="Order a transcript or update your personal or residency information." 
                    data-link-urls="https://registrar.unt.edu" 
                    data-link-titles="About Transcripts"></article>
            
            <article data-block-type="Title_card" 
                     data-headline="Online Degree Audit" 
                     data-leader="Find out what you still have to take to stay on track." 
                     data-link-urls="https://registrar.unt.edu" 
                     data-link-titles="About Degree Audits"></article>
            
         </section>
```
…produces the following HTML output:
```angular2html
<section class="u-block Grid_block gbl3">
   <div class="block-content">
      <header>
        <h2>Students</h2>
        <hr>
        <p class="leader">Find out what you need to know for registering courses and making the most of your time at UNT.</p>
      </header>
      <div class="cards">
          <article class="card Title_card ">
            <h3>Registering for Classes</h3>
            <hr>
            <p class="leader">Find out what to do before, during and after registration to stay on track towards your degree.</p>
            <ul class="btn-list">
                <li>
                    <a class="btn" href="https://registrar.unt.edu" title="About Registering" target="">About Registering<span class="material-icons">chevron_right</span>
                    </a>
                </li>
            </ul><!-- /.btn-list -->
          </article>
          <article class="card Title_card ">
              <h3>Transcripts and Records</h3>
              <hr>
              <p class="leader">Order a transcript or update your personal or residency information.</p>
              <ul class="btn-list">
                  <li>
                      <a class="btn" href="https://registrar.unt.edu" title="About Transcripts" target="">About Transcripts<span class="material-icons">chevron_right</span>
                      </a>
                  </li>
              </ul><!-- /.btn-list -->
          </article>
          <article class="card Title_card ">
              <h3>Online Degree Audit</h3>
                <hr>
                <p class="leader">Find out what you still have to take to stay on track.</p>
                <ul class="btn-list">
                    <li>
                        <a class="btn" href="https://registrar.unt.edu" title="About Degree Audits" target="">About Degree Audits<span class="material-icons">chevron_right</span>
                        </a>
                    </li>
                </ul><!-- /.btn-list -->
          </article>
        </div><!-- /.cards -->
      </div><!-- /.block-content -->
</section>
```
## Code Examples

To get a feel for how to construct a module, cut and paste the examples below into the HTML of your page.

Example 1:

```angular2html
<section class="u-block" 
         data-block-content="Image_block" 
         data-block-layout="iblA" 
         data-headline="An Image Block"
         data-leader="This is an Image_block, layout A"
         data-link-titles="Link1 to info | Link2 to info"
         data-link-urls="/url1 | /url2"
         data-img-url=""
         data-img-alt=""
         data-img-format=""
> </section>
```

## Attribute List

- **Select-Option**: Select from one of the supported options.
- **User-Input**: Value will be used in the output.

<hr />
<dl>
  <dt id="block-content"><code>data-block-content</code> &mdash; REQUIRED, Select-Option</dt>
  <dd>
    <h3>Blocks</h3>
	  <p>Blocks span the width of the page and contain any combination of Headline, Leader Text and Links. Images can be included and layout variants can place the image on the left or right of the text content. Blocks can also contain Cards displayed in a grid with 2-, 3- and 4-column options.
    <table>
      <caption>
      Use one of these values for the <code>data-block-content</code> attribute in your <code>&lt;section class="u-block"&gt;</code>.
      </caption>
      <tbody>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Content description</th>
        </tr>
        <tr>
          <td><code>Contact_block</code></td>
          <td>Information on how to contact a department.</td>
        </tr>
        <tr>
          <td><code>Date_block</code></td>
          <td>Container for a collection of <em>Date_card</em>s</td>
        </tr>
        <tr>
          <td><code>Grid_block</code></td>
          <td>Container for a collection of <em>Image_card</em>s or <em>Text_card</em>s</td>
        </tr>
        <tr>
          <td><code>Image_block</code></td>
          <td>Displays a single image with text</td>
        </tr>
        <tr>
          <td><code>Link_block</code></td>
          <td>Displays a set of quick-links to resources</td>
        </tr>
        <tr>
          <td><code>Quote_block</code></td>
          <td>Displays a block with a quote</td>
        </tr>
        <tr>
          <td><code>Stat_block</code></td>
          <td>Container for a collection of <em>Stat_card</em>s</td>
        </tr>
        <tr>
          <td><code>Text_block</code></td>
          <td>Displays a block with just text</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
    <h3>Cards</h3>
	  <p>Cards are smaller boxes displayed within a block typically arranged on a 2-, 3- or 4-column grid Cards contain a Headline, Leader Text, Links and an optional image.</p>
    <table>
      <caption>
      Use one of these values for the <code>data-block-content</code> attribute in your <code>&lt;article class="u-card"&gt;</code>.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Content description</th>
        </tr>
      </thead>
      <tr>
        <td><code>Standard_card</code></td>
        <td>A box containing text and an optional image. (<a href="#clo">See Card Layout options</a>)</td>
      </tr>
      <tr>
        <td><code>Date_card</code></td>
        <td>A box containing information about an individual Date appearing within a <code>Date_block</code>.</td>
      </tr>
      <tr>
        <td><code>Stat_card</code></td>
        <td>A box containing a statistic appearing within a <code>Stat_block</code></td>
      </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
  </dd>
  <hr />
  <dt id="block-layout"><code>data-block-layout</code> &mdash; REQUIRED, Select-Option</dt>
  <dd>
    <h3>Blocks</h3>
    <h4><code>Grid_block</code> Layout Options</h4>
    <table>
      <caption>
      Use one of these values for the <code>data-block-layout</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>gbl2</code></td>
          <td>Two-column grid of image or text cards.</td>
        </tr>
        <tr>
          <td><code>gbl3</code></td>
          <td>Three-column grid of image or text cards.</td>
        </tr>
        <tr>
          <td><code>gbl4</code></td>
          <td>Four-column grid of image or text cards.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
    <p>Example: <code>data-block-content="Grid_block" data-block-layout="gbl3"</code></p>
    <h4><code>Image_block</code> Layout Options</h4>
    <table>
      <caption>
      Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>iblA</code></td>
          <td>50-50 Split with image on <strong>left</strong>.</td>
        </tr>
        <tr>
          <td><code>iblB</code></td>
          <td>50-50 Split with image on <strong>right</strong>.</td>
        </tr>
        <tr>
          <td><code>iblC</code></td>
          <td>Enlarged image on <strong>left</strong>.</td>
        </tr>
        <tr>
          <td><code>iblD</code></td>
          <td>Enlarged image on <strong>right</strong>.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
    <p>Example: <code>data-block-content="Image_block" data-block-layout="iblA"</code></p>
    <h4><code>Link_block</code> Layout Options</h4>
    <table>
      <caption>
      Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>lbl2</code></td>
          <td>Two-column grid of links.</td>
        </tr>
        <tr>
          <td><code>lbl3</code></td>
          <td>Three-column grid of links.</td>
        </tr>
        <tr>
          <td height="23"><code>lbl4</code></td>
          <td>Four-column grid of links.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
    <p>Example: <code>data-block-content="Link_block" data-block-layout="lbl3"</code></p>
    <h4><code>Stat_block</code> Layout Options</h4>
    <table>
      <caption>
      Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>sblA</code></td>
          <td>Stat_cards stacked vertically on the right of the descriptive text.</td>
        </tr>
        <tr>
          <td><code>sblB</code></td>
          <td>Stat_cards spread horizontally with/without descriptive text.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
    <p>Example: <code>data-block-content="Stat_block" data-block-layout="sblA"</code></p>
    <h4><code>Text_block</code> Layout Options</h4>
    <table>
      <caption>
      Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>tblA</code></td>
          <td>Left aligned text, typically with links stacked on the right.</td>
        </tr>
        <tr>
          <td><code>tblB</code></td>
          <td>Centered text, typically without links.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
    <p>Example: <code>data-block-content="Text_block" data-block-layout="tblA"</code></p>
    <h3><a name="clo">Card Layout Options</a></h3>
    <h4><code>Standard_card</code> Layout Options</h4>
    <table>
      <caption>
      Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>sclA</code></td>
          <td>Image (optional) with text and a border to the left.</td>
        </tr>
        <tr>
          <td><code>sclB</code></td>
          <td>Text-only block with a shadow.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
    <p>Example: <code>data-block-content="Standard_card" data-block-layout="sclA"</code></p>
  </dd>
  <hr />
  <dt id="header-variant"><code>data-header-variant</code> (optional) Select-Option</dt>
  <dd>
    <p>The <code>data-header-variant</code> attribute can be used to select different header styles.</p>
    <table>
      <caption>
      Use one of these values (case-sensitive) for the <code>data-header-variant</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>hvA</code></td>
          <td>Left-aligned, green text with bottom rule.</td>
        </tr>
        <tr>
          <td><code>hvB</code></td>
          <td>Center-aligned green text with bottom rule.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
  </dd>
  <hr />
  <dt id="mobile-compact"><code>data-mobile-compact</code> (optional) Select-Option (boolean)</dt>
  <dd>
    <table>
      <caption>
      Use one of these values for the <code>data-mobile-compact</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>true</code></td>
          <td>On small screens, the cards can be scrolled through horizontally and take up less vertical space.</td>
        </tr>
        <tr>
          <td><code>false</code></td>
          <td>Cards are stacked vertically on small screens.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
  </dd>
  <hr />
  <dt id="headline"><code>data-headline</code> (optional) User-Input</dt>
  <dd>The text provided will be inserted into the block inside an &lt;h2&gt; tag for blocks, &lt;h3&gt; tag for cards.</dd>
  <hr />
  <dt id="headline-color"><code>data-headline-color</code> (optional) User-Input</dt>
  <dd>This value won't be inserted into the content but will be applied inside a <em>style</em> attribute.</dd>
  <hr />
  <dt id="headline-url"><code>data-headline-url</code> (optional) User-Input</dt>
  <dd>If you wish for the headline itself to function as the link, provide the URL with this attribute.</dd>
  <hr />
  <dt id="headline-date"><code>data-headline-date</code> (optional) User-Input</dt>
  <dd>Promote a specific date in your block. The provided text will be inserted along with the headline inside the appropriate tag but wrapped in a <code>&lt;span class="promote-date"&gt;</code> element.</dd>
  <hr />
  <dt id="leader"><code>data-leader</code> (optional) User-Input</dt>
  <dd>The provided text will be inserted into the block inside a &lt;p&gt; element.</dd>
  <hr />
  <dt id="leader-list-tag"><code>data-leader-list-tag</code> (optional) Select-Option</dt>
  <dd>Choose from <code>&lt;ul&gt;</code> for a bullet list, or <code>&lt;ol&gt;</code> for a numbered list. The default is <code>&lt;ul&gt;</code>.</dd>
  <hr />
  <dt id="leader-list-class"><code>data-leader-list-class</code> (optional) User-Input</dt>
  <dd>You may enter a custom class name here if you need to target this list to modify the default characteristics.</dd>
  <hr />
  <dt id="leader-list-items"><code>data-leader-list-items</code> (optional) User-Input</dt>
  <dd>If you have a list of data points to include (such as in a <code>Stat_block</code>), list the text here. Separate each list item with space-pipe-space (' | '). Nilla will break this string into an array and wrap each value inside &lt;li&gt; tags.</dd>
  <hr />
  <dt id="link-titles"><code>data-link-titles</code> (optional) User-Input</dt>
  <dd>Add links to your block or card by providing a list of titles in the order you want them to display. These titles will display as the linked text. Separate each title using space-pipe-space (' | '). Nilla will break this string into an array and wrap each value inside &lt;li&gt; tags.</dd>
  <hr />
  <dt id="link-urls"><code>data-link-urls</code> (optional) User-Input</dt>
  <dd>In the same order as the link titles, provide the list of URLs to match with link-titles. Separate each URL with space-pipe-space (' | '). Nilla will break this string into an array that will be used when processing the link-titles.</dd>
  <hr />
  <dt id="link-classes"><code>data-link-classes</code> (optional) Select-Option</dt>
  <dd>In the same order as the link titles, you may provide a list of classes for each link. Separate each class name with a space-pipe-space (' | '). Nilla will break this string into an array that will be used when processing the link-titles. Each value can be comprised from the available class names listed below separated by a space (' ').<br />
    Example: [size] [color] [icon] <br />
    <code>"small clean chevron | small green arrow | (etc)"</code>
    <h3>Size Classes</h3>
    <table>
      <caption>
      Available these values for the <code>data-link-classes</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>small</code> (default)</td>
          <td>Small text, best for blocks and cards displaying several other elements.</td>
        </tr>
        <tr>
          <td><code>standard</code></td>
          <td>Larger, works best in text-only blocks. Not recommended for cards.</td>
        </tr>
        <tr>
          <td><code>large</code></td>
          <td>Need ample space, not a best choice for blocks. Not recommende for cards.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
    <h3>Color Classes</h3>
    <table>
      <caption>
      Available these values for the <code>data-link-classes</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>clean</code></td>
          <td>No background color with dark text.</td>
        </tr>
        <tr>
          <td><code>gray</code> (default)</td>
          <td>Light gray background with dark text.</td>
        </tr>
        <tr>
          <td><code>green</code></td>
          <td>Green background with white text.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
    <h3>Icon Classes</h3>
    <table>
      <caption>
      Available values for the <code>data-link-classes</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>chevron</code> (default)</td>
          <td>inserts a chevron icon.</td>
        </tr>
        <tr>
          <td><code>arrow</code></td>
          <td>Inserts an arrow icon.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
  </dd>
  <hr />
  <dt id="img-url"><code>data-img-url</code> (optional) User-Input</dt>
  <dd>Provide the URL of the image you wish to have inserted. Only processed with <code>Image_block</code> sections, or <code>Standard_card</code> articles with the <code>sclA</code> layout attribute value.</dd>
  <hr />
  <dt id="img-alt"><code>data-img-alt</code> (optional) User-Input</dt>
  <dd>Provide the alt text to be inserted into the HTML for accessibility.</dd>
  <hr />
  <dt id="img-format"><code>data-img-format</code> (optional) Select-Option</dt>
  <dd>Select how the image should be formatted from the options listed below.
    <table>
      <caption>
      Available formats for the <code>data-img-format</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>portrait</code></td>
          <td>Formats the image as a vertical 8x10. Good for people. (ratio 3:4)</td>
        </tr>
        <tr>
          <td><code>square</code></td>
          <td>Formats the image as a square. (ratio 1:1)</td>
        </tr>
        <tr>
          <td><code>landscape</code> (default)</td>
          <td>Formats the image as a horizontal 8x10. (ratio 4:3)</td>
        </tr>
        <tr>
          <td><code>wide</code></td>
          <td>Formats the image similar to a 1980 X 1020. (ratio 16:9)</td>
        </tr>
        <tr>
          <td><code>circle</code></td>
          <td>Clips the image to a circle. (ratio 1:1)</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
  </dd>
  <hr />
  <dt id="img-caption"><code>data-img-caption</code> (optional) Select-Option (boolean)</dt>
  <dd>
    <table>
      <caption>
      Available values for the <code>data-img-caption</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>true</code> (default)</td>
          <td>Displays the alt text as a figure caption.</td>
        </tr>
        <tr>
          <td><code>false</code></td>
          <td>No figure caption, but alt text will still be inserted into the markup.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
  </dd>
  <hr />
  <dt id="img-border"><code>data-img-border-width</code> (optional) User-Input</dt>
  <dd>In some blocks, you can provide a border width for the image in pixels. Provide only the number, no units. Nilla will add the 'px' unit when processing. Max width is 10.</dd>
  <hr />
  <dt id="img-shadow"><code>data-img-shadow</code> (optional) Select-Option (boolean)</dt>
  <dd>In some blocks, you can display a shadow around the image. Provide only the number of in terms of spread (shadow size), no units. Nilla will add the 'px' unit when processing.</dd>
  <hr />
  <dt id="img-x"><code>data-img-x</code> (optional) User-Input</dt>
  <dd>default value: 50 <br /> If necessary, you can move the image horizontally within the display frame. Small numbers move the image left; large numbers move the image right. Nilla provides a default of 50 which is centered.</dd>
  <hr />
  <dt id="img-y"><code>data-img-y</code> (optional) User-Input</dt>
  <dd>default value: 50 <br /> If necessary, you can move the image vertically within the display frame. Small numbers move the image up; large numbers move the image down. Nilla provides a default of 50 which is centered.</dd>
  <hr />
  <dt id="bg-colr"><code>data-bg-colr</code> (optional) User-Input</dt>
  <dd>If you need to provide a specific background color to a block, add the Hex here. Nilla will insert it into a <code>style=""</code> attribute in the tag.</dd>
  <hr />
  <dt id="bg-img"><code>data-bg-img</code> (optional) User-Input</dt>
  <dd>You can provide a URL of a background image for your block.</dd>
  <hr />
  <dt id="bg-grad"><code>data-bg-grad</code> (optional) User-Input</dt>
  <dd>You can provide the CSS gradient markup to be applied to the background if necessary.</dd>
  <hr />
  <dt id="bg-attach"><code>data-bg-attach</code> optional, Select-Option</dt>
  <dd><p>By default, background images will scroll with the element. You can also choose to have it fixed.</p>
    <table>
      <caption>
      Available options for the <code>data-bg-attach</code> attribute.
      </caption>
      <thead>
        <tr>
          <th scope="col" width="10%">Value*</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>scroll</code> (default)</td>
          <td>Background image scrolls with the element.</td>
        </tr>
        <tr>
          <td><code>fixed</code></td>
          <td>Image is fixed to the background while text and other elements scroll over the top.</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">* Listed values are case-sensitive.</td>
        </tr>
      </tfoot>
    </table>
  </dd>
</dl>
