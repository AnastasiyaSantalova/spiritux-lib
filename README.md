# 🌟 Spiritux UI Library

**Spiritux** is a customizable UI component library for **Angular**, designed to be flexible and reusable across multiple projects.\
It uses modern **CSS Variables** and SCSS tokens to make styling and theming easy.

---

## 🚀 Quick Start

### 📦 Install

```bash
npm install spiritux
```

---

## ⚙️ Usage

### 1️⃣ Import a component

In your Angular standalone component or module, import and use it like this:

```ts
import { SpirituxButtonComponent } from 'spiritux';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SpirituxButtonComponent],
  template: `<spiritux-button name="Click me!"></spiritux-button>`,
})
export class AppComponent {}
```

---

### 2️⃣ Add theme tokens

To make sure your design tokens are available globally, add them to your main `styles.scss`:

```scss
@use 'spiritux/styles/variables/colors';
```

And don’t forget to include `styles.scss` in your `angular.json`:

```json
"styles": [
  "src/styles.scss"
]
```

This makes sure your `:root` CSS variables are injected into the final build.

---

## 🎨 Theming

**Spiritux** uses CSS custom properties for easy theme customization.\
You can override them globally, for example:

```css
:root {
  --theme-primary: #5A1F8E;
  --theme-primary-contrast: #FFFFFF;
  --theme-primary-dark: #4A148C;

  --theme-secondary: #C6426A;
  --theme-secondary-contrast: #FFFFFF;
  --theme-secondary-dark: #A62A58;

  /* Add more colors as needed */
}
```

💡 Pro tip: You can switch themes dynamically by adding different classes to `<body>`.

---

## 🔘 Example: Button with icon

```html
<spiritux-button
  name="Save"
  variant="solid"
  color="primary"
  [icon]="'close'"
  iconPosition="left">
</spiritux-button>
```

---

# 🗂️ Available Inputs

| Input          | Type                                               | Description                                         |
|----------------|----------------------------------------------------|-----------------------------------------------------|
| `name`         | `string`                                           | Button text                                         |
| `type`         | `'button' \| 'submit' \| 'reset'`                   | Native HTML type (`button` by default)              |
| `variant`      | `'solid' \| 'outline' \| 'ghost' \| 'link'`         | Visual style variant (`solid` by default)           |
| `color`        | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'danger'` | Theme color (`primary` by default) |
| `size`         | `'small' \| 'medium' \| 'large'`                    | Button size (`medium` by default)                   |
| `shape`        | `'square' \| 'circle' \| 'pill'`                     | Shape of the button (`pill` by default)             |
| `icon`         | `'none' \| 'close' \| 'arrow-right' \| 'arrow-left' \| 'angle-right' \| 'angle-left'` | Built-in icon name (`none` by default) |
| `iconPosition` | `'left' \| 'right'`                                 | Icon position when icon and text are used (`right` by default) |
| `iconOnly`     | `boolean`                                          | Shows only the icon, no text                        |
| `disabled`     | `boolean`                                          | Disables the button                                 |
| `loading`      | `boolean`                                          | Shows a loading state                               |
| `fullWidth`    | `boolean`                                          | Makes button take full container width              |
| `ariaLabel`    | `string`                                           | ARIA label for accessibility                        |

---

## 🧩 Adding Custom Icons

Spiritux comes with a set of built-in SVG icons.\
You can add your own by extending the icon map or using `ngComponentOutlet`.

---

## 📚 Storybook & Demos

A full Storybook with examples will help you test all components in isolation.\
(Coming soon: add a link here when you deploy it!)

---

## 🤍 License

MIT License.\
Use Spiritux freely in your personal and commercial projects.

---

## ✨ Author

Created with love by **Anastasiia S**.\
If you like this library, star the repo ⭐ and feel free to contribute!

---

**Happy coding!** 🚀
