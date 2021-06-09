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
	</dd>
<dt><code>data-mobile-compact</code></dt>
<dt><code>data-headline</code></dt>
<dt><code>data-headline-color</code></dt>
<dt><code>data-headline-url</code></dt>
<dt><code>data-headline-date</code></dt>
<dt><code>data-leader</code></dt>
<dt><code>data-leader-list-tag</code></dt>
<dt><code>data-leader-list-class</code></dt>
<dt><code>data-leader-list-items</code></dt>
<dt><code>data-link-titles</code></dt>
<dt><code>data-link-urls</code></dt>
<dt><code>data-link-classes</code></dt>
<dt><code>data-img-url</code></dt>
<dt><code>data-img-alt</code></dt>
<dt><code>data-img-format</code></dt>
<dt><code>data-img-caption</code></dt>
<dt><code>data-img-border-width</code></dt>
<dt><code>data-img-shadow</code></dt>
<dt><code>data-img-x</code></dt>
<dt><code>data-img-y</code></dt>
<dt><code>data-bg-colr</code></dt>
<dt><code>data-bg-img</code></dt>
<dt><code>data-bg-grad</code></dt>
<dt><code>data-bg-attach</code></dt>
</dl>
