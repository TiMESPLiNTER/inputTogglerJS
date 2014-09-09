# inputTogglerJS

A small jQuery plugin which toggles HTML elements based on checkbox and/or radio input fields.

This plugin needs jQuery 1.9.x or higher to work.

## Examples

Please note the custom HTML attributes `toggle-id`, `toggle-class` and `toggle-reverse` in the HTML snippets below.

### Standard toggler
This toggler toggles an element based on it's `id` HTML attribute.

```html
<label><input type="checkbox" name="my_checkbox" id="my-checkbox" value="1" toggle-id="my-toggle-div"> My checkbox</label>
<div id="my-toggle-div">
	<p>This content will be shown if the checkbox is in "checked" state.</p>
</div>
```

### Class toggler
There is also the possibility to toggle HTML elements based on their CSS classes.

```html
<div class="my-toggle-divs">
	<p>This content will be shown above if the checkbox is in "checked" state.</p>
</div>

<label><input type="checkbox" name="my_checkbox" id="my-checkbox" value="1" toggle-class="my-toggle-divs"> My checkbox</label>

<div class="my-toggle-divs">
	<p>This content will be shown below if the checkbox is in "checked" state.</p>
</div>
```

### Reverse toggler

```html
<label><input type="checkbox" name="my_checkbox" id="my-checkbox" value="1" toggle-id="my-toggle-div" toggle-reverse="true"> My checkbox</label>
<div id="my-toggle-div">
	<p>Check the checkbox above and this content will disappear.</p>
</div>
```