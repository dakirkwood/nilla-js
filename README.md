	# nilla-js
<p>A small library of JS modules used to create page components on University of North Texas websites.</p>
<h2>Intro</h2>
<p>The purpose of this library is to provide a way to generate the HTML for various block and card level page components. Block-level components are added to the page using &lt;section&gt; tags; card-level components are added using &lt;article&gt; tags. Attributes are added using a specific list of data-* attributes. NillaJS processes these data-* attributes and outputs the raw HTML that can then be styled. Using this system provides consistent markup across all components allowing for easier long-term management of CSS and code.</p>
<h2>Attribute List</h2>
<p>About the attribute values:</p>
<ul>
	<li>Attributes marked with an asterisk (*) are required values.</li>
	<li>'Option-Value' attributes are inserted into the classList and must be selected from one of the supported options.</li>
	<li>'Content-Value' attributes will be inserted as content.</li>
</ul>
<dl>
	<dt><code>data-block-content</code>* Option-Value</dt>
	<dd>
		<h3>Block Content</h3>
      <table>
        <caption>
          Use one of these values (case-sensitive) for the <code>data-block-content</code> attribute in your <code>&lt;section class="u-block"&gt;</code>.
          </caption>
        <tbody>
          <tr>
            <th scope="col" width="10%">Value</th>
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
      </table>
		<hr />
		<h3>Card Content</h3>
      <table>
        <caption>
          Use one of these values (case-sensitive) for the <code>data-block-content</code> attribute in your <code>&lt;article class="u-card"&gt;</code>.
          </caption>
        <tbody>
          <tr>
            <th scope="col" width="10%">Value</th>
            <th scope="col">Content description</th>
          </tr>
           <tr>
            <td><code>Standard_card</code></td>
            <td>Standard cards display within a <code>Grid_block</code> and contain text and an optional image. (<a href="#clo">See Card Layout options</a>)</td>
          </tr>
         <tr>
            <td><code>Date_card</code></td>
            <td>a box containing information about an individual Date appearing within a <code>Date_block</code>.</td>
          </tr>
          <tr>
            <td><code>Stat_card</code></td>
            <td>a box containing a statistic appearing within a <code>Stat_block</code></td>
          </tr>
        </tbody>
      </table>
		<hr />
	</dd>
<dt><code>data-block-layout</code>* Option-Value</dt>
	<dd>
		<h3>Block Layout Options</h3>
		<table>
			<caption><code>Grid_block</code>: Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.</caption>
			<thead>
				<th scope="col" width="10%">Value</th>
				<th scope="col">Description</th>
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
		</table>
		<table>
			<caption><code>Image_block</code>: Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.</caption>
			<thead>
				<th scope="col" width="10%">Value</th>
				<th scope="col">Description</th>
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
		</table>
		<table>
			<caption><code>Link_block</code>: Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.</caption>
			<thead>
				<th scope="col" width="10%">Value</th>
				<th scope="col">Description</th>
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
					<td><code>lbl4</code></td>
					<td>Four-column grid of links.</td>
				</tr>
			</tbody>
		</table>
		<table>
			<caption><code>Stat_block</code>: Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.</caption>
			<thead>
				<th scope="col" width="10%">Value</th>
				<th scope="col">Description</th>
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
		</table>
		<table>
			<caption><code>Text_block</code>: Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.</caption>
			<thead>
				<th scope="col" width="10%">Value</th>
				<th scope="col">Description</th>
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
		</table>
		<hr />
		<h3><a name="clo">Card Layout Options</a></h3>
		<table>
			<caption><code>Standard_card</code>: Use one of these values (case-sensitive) for the <code>data-block-layout</code> attribute.</caption>
			<thead>
				<th scope="col" width="10%">Value</th>
				<th scope="col">Description</th>
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
		</table>
	</dd>
<dt><code>data-header-variant</code> Option-Value</dt>
	<dd>
		<p>The <code>data-header-variant</code> attribute can be used to select different header styles.</p>
		<table>
			<caption> Use one of these values (case-sensitive) for the <code>data-header-variant</code> attribute.</caption>
			<thead>
				<th scope="col" width="10%">Value</th>
				<th scope="col">Description</th>
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
		</table>		
	</dd>
<dt><code>data-mobile-compact</code> Option-Value (boolean)</dt>
	<dd>
		<table>
			<caption> Use one of these values for the <code>data-mobile-compact</code> attribute.</caption>
			<thead>
				<th scope="col" width="10%">Value</th>
				<th scope="col">Description</th>
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
		</table>		
	</dd>
<dt><code>data-headline</code> Content-Value</dt>
	<dd>The text provided will be inserted into the block inside an &lt;h2&gt; tag for blocks, &lt;h3&gt; tag for cards.</dd>
<dt><code>data-headline-color</code> Content-Value</dt>
	<dd>This value won't be inserted into the content but will be applied inside a <em>style</em> attribute.</dd>
<dt><code>data-headline-url</code> Content-Value</dt>
	<dd>If you wish for the headline itself to function as the link, provide the URL with this attribute.</dd>
<dt><code>data-headline-date</code> Content-Value</dt>
	<dd>Promote a specific date in your block. The provided text will be inserted along with the headline inside the appropriate tag but wrapped in a <code>&lt;span class="promote-date"&gt;</code> element.</dd>
<dt><code>data-leader</code> Content-Value</dt>
	<dd>The provided text will be inserted into the block inside a &lt;p&gt; element.</dd>
<dt><code>data-leader-list-tag</code> Option-Value</dt>
	<dd>Choose from <code>&lt;ul&gt;</code> for a bullet list, or <code>&lt;ol&gt;</code> for a numbered list. The default is <code>&lt;ul&gt;</code>.</dd>
<dt><code>data-leader-list-class</code> Content-Value</dt>
	<dd>You may enter a custom class name here if you need to target this list to modify the default characteristics.</dd>
<dt><code>data-leader-list-items</code> Content-Value</dt>
	<dd>If you have a list of data points to include (such as in a <code>Stat_block</code>), list the text here. Separate each list item with space-pipe-space (' | '). Nilla will break this string into an array and wrap each value inside &lt;li&gt; tags.</dd>
<dt><code>data-link-titles</code> Content-Value</dt>
	<dd>Add links to your block or card by providing a list of titles in the order you want them to display. These titles will display as the linked text. Separate each title using space-pipe-space (' | '). Nilla will break this string into an array and wrap each value inside &lt;li&gt; tags.</dd>
<dt><code>data-link-urls</code> Content-Value</dt>
	<dd>In the same order as the link titles, provide the list of URLs to match with link-titles. Separate each URL with space-pipe-space (' | '). Nilla will break this string into an array that will be used when processing the link-titles.</dd>
<dt><code>data-link-classes</code> Option-Value</dt>
	<dd>In the same order as the link titles, you may provide a list of classes for each link. Separate each class name with a space-pipe-space (' | '). Nilla will break this string into an array that will be used when processing the link-titles. Each value can be comprised from the available class names listed below separated by a space (' ').<br />Example: [size] [color] [icon] <br /><code>"small clean chevron | small green arrow | (etc)"</code>
        <h3>Size Classes</h3>
		<table>
            <caption>Available these values for the <code>data-link-classes</code> attribute.</caption>
            <thead>
                <th scope="col" width="10%">Value</th>
                <th scope="col">Description</th>
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
        </table>
		<hr />
		<h3>Color Classes</h3>
		<table>
            <caption>Available these values for the <code>data-link-classes</code> attribute.</caption>
            <thead>
                <th scope="col" width="10%">Value</th>
                <th scope="col">Description</th>
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
        </table>
		<hr />
		<h3>Icon Classes</h3>
		<table>
            <caption>Available values for the <code>data-link-classes</code> attribute.</caption>
            <thead>
                <th scope="col" width="10%">Value</th>
                <th scope="col">Description</th>
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
        </table>
</dd>
<dt><code>data-img-url</code> Content-Value</dt>
	<dd>Provide the URL of the image you wish to have inserted. Only processed with <code>Image_block</code> sections, or <code>Standard_card</code> articles with the <code>sclA</code> layout attribute value.</dd>
<dt><code>data-img-alt</code> Content-Value</dt>
	<dd>Provide the alt text to be inserted into the HTML for accessibility.</dd>
<dt><code>data-img-format</code> Option-Value</dt>
	<dd>Select how the image should be formatted from the options listed below.
		<table>
            <caption>Available formats for the <code>data-img-format</code> attribute.</caption>
            <thead>
                <th scope="col" width="10%">Value</th>
                <th scope="col">Description</th>
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
        </table>
	<hr />
	</dd>
<dt><code>data-img-caption</code> Option-Value (boolean)</dt>
	<dd>
		<table>
            <caption>Available values for the <code>data-img-caption</code> attribute.</caption>
            <thead>
                <th scope="col" width="10%">Value</th>
                <th scope="col">Description</th>
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
        </table>
	<hr />
	</dd>
<dt><code>data-img-border-width</code> Content-Value</dt>
	<dd>In some blocks, you can provide a border width for the image in pixels. Provide only the number, no units. Nilla will add the 'px' unit when processing. Max width is 10.</dd>
<dt><code>data-img-shadow</code> Option-Value (boolean)</dt>
	<dd>In some blocks, you can display a shadow around the image. Provide only the number of in terms of spread (shadow size), no units. Nilla will add the 'px' unit when processing.</dd>
<dt><code>data-img-x</code> Content-Value</dt>
	<dd>If necessary, you can move the image horizontally within the display frame. Small numbers move the image left; large numbers move the image right. Nilla provides a default of 50 which is centered.</dd>
<dt><code>data-img-y</code> Content-Value</dt>
	<dd>If necessary, you can move the image vertically within the display frame. Small numbers move the image up; large numbers move the image down. Nilla provides a default of 50 which is centered.</dd>
<dt><code>data-bg-colr</code> Content-Value</dt>
	<dd>If you need to provide a specific background color to a block, add the Hex here. Nilla will insert it into a <code>style=""</code> attribute in the tag.</dd>
	<dt><code>data-bg-img</code> Content-Value</dt>
	<dd>You can provide a URL of a background image for your block.</dd>
<dt><code>data-bg-grad</code> Content-Value</dt>
	<dd>You can provide the CSS gradient markup to be applied to the background if necessary.</dd>
<dt><code>data-bg-attach</code></dt>
	<dd>By default, background images will scroll with the element. You can also choose to have it fixed.
		<table>
            <caption>Available options for the <code>data-bg-attach</code> attribute.</caption>
            <thead>
                <th scope="col" width="10%">Value</th>
                <th scope="col">Description</th>
            </thead>
            <tbody>
                <tr>
                    <td><code>scroll</code> (default)</td>
                    <td>Background image scrolls with the element.</td>
                </tr>
                <tr>
                    <td><code>false</code></td>
                    <td>Image is fixed to the background while text and other elements scroll over the top.</td>
                </tr>
            </tbody>
        </table>
		<hr />
	</dd>
</dl>
