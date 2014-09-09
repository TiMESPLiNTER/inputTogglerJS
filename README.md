# inputTogglerJS

A small jQuery plugin which toggles HTML elements based on checkbox and/or radio input fields.

This plugin needs jQuery 1.9.x or higher to work.

## Examples

### Standard toggler

```html
<label><input type="checkbox" name="my_checkbox" id="my-checkbox" value="1" toggle-id="my-toggle-div"> My checkbox</label>
<div id="my-toggle-div">
	<p>This content will be shown if the checkbox is in "checked" state.</p>
</div>
```

### Reverse toggler

```html
<label><input type="checkbox" name="my_checkbox" id="my-checkbox" value="1" toggle-id="my-toggle-div" toggle-reverse="true"> My checkbox</label>
<div id="my-toggle-div">
	<p>Check the checkbox above and this content will disappear.</p>
</div>
```