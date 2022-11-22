# Svelte Switcher

A fully accessible, mobile-friendly and customisable toggle component for svelte apps.

### [View examples and demo here](https://svelte-switcher.vercel.app/)

## Installation

Install `svelte-switcher` with npm

```bash
  npm install svelte-switcher
```

## Usage/Examples

### [Click here to view examples](https://svelte-switcher.vercel.app/)

```javascript
<script>
    import Toggle from 'svelte-switcher'
</script>

<Toggle
    id="svelte-toggle"
    name="theme-toggle"
    defaultChecked={false}
    on:toggle={handleToggle}
    ...
/>
```

## API

#### Props

| Props            | Description                                   | Default value           |
| :--------------- | :-------------------------------------------- | :---------------------- |
| `checked`        | determines if the toggle is active            | `false`                 |
| `disabled`       | determines if the toggle is disabled          | `false`                 |
| `onChange`       | fires when toggle status change               | `void`                  |
| `onFocus`        | fires when toggle is focused                  | `void`                  |
| `onBlur`         | fires when toggle is unfocused                | `void`                  |
| `name`           | `name` attr for the underlying input element  | `svelte-switcher-name`  |
| `value`          | `value` attr for the underlying input element | `svelte-switcher-value` |
| `id`             | `id` attr for the underlying input element    | `svelte-switcher-id`    |
| `ariaLabelledBy` | `ariaLabelledBy` attr                         |                         |
| `ariaLabel`      | `ariaLabel` attr                              |                         |

#### Slots

| Slot Name             | Description                               | Default value |
| :-------------------- | :---------------------------------------- | :------------ |
| `checked-component`   | Slot for checked state icon / component   |               |
| `unchecked-component` | Slot for unchecked state icon / component |               |

#### Events

| Event Name | Description                      | Payload              |
| :--------- | :------------------------------- | :------------------- |
| `toggle`   | Fires when toggle status changes | `isChecked: boolean` |
