# inputTogglerJS

A small jquery plugin which toggles HTML elements based on checkbox and/or radio input fields.

## Examples

### Standard toggler

```html
<input type="checkbox" name="my_checkbox" id="my-checkbox" value="1" toggle-id="my-toggle-div">
<div id="my-toggle-div">
	<p>This content will be shown if the checkbox is in "checked" state.</p>
</div>
```

### Reverse toggler

```html
<input type="checkbox" name="my_checkbox" id="my-checkbox" value="1" toggle-id="my-toggle-div" toggle-reverse="true">
<div id="my-toggle-div">
	<p>Check the checkbox above and this content will disappear.</p>
</div>
```