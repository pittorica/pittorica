# 🎨 Pittorica

**Pittorica** is a painterly, CSS-first UI framework that brings elegant, lightweight structure to modern interfaces. Built with a focus on aesthetics and performance, it provides a set of highly customizable React components and a robust CSS foundation.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/pittorica.svg)](https://badge.fury.io/js/pittorica)

---

## ✨ Features

- 🖌️ **Painterly Aesthetics**: Designed with a unique, elegant visual language that stands out from generic UI kits.
- ⚡ **CSS-First**: Core logic resides in clean, modular CSS variables and utilities.
- 🧩 **React Components**: A comprehensive library of 50+ polymorphic components built with TypeScript.
- 🛠️ **Fully Customizable**: Leverages CSS variables for easy theming without the overhead of heavy runtime libraries.
- ♿ **Accessible**: Built with accessibility in mind, ensuring your interfaces work for everyone.
- 📦 **Lightweight**: Minimal dependencies, keeping your bundle size lean.

---

## 🚀 Installation

Install Pittorica via pnpm (recommended), npm, or yarn:

```bash
pnpm add pittorica
```

You should also install the required peer dependencies if you haven't already:

```bash
pnpm add react react-dom
```

---

## 📖 Quick Start

### 1. Import Styles

Add the Pittorica global styles to your main entry point (e.g., `main.tsx` or `_app.tsx`):

```tsx
import 'pittorica'; // Imports the core CSS
```

### 2. Wrap with Theme

Wrap your application or specific sections with the `PittoricaTheme` provider to enable consistent theming:

```tsx
import { PittoricaTheme } from 'pittorica/react';

function App() {
  return (
    <PittoricaTheme appearance="light">
      <YourAppContent />
    </PittoricaTheme>
  );
}
```

### 3. Use Components

Now you can start using Pittorica components:

```tsx
import { Button, Card, Text, Flex } from 'pittorica/react';

export const MyComponent = () => (
  <Card variant="surface" size="3">
    <Flex direction="column" gap="4">
      <Text size="5" weight="bold">
        Hello, Pittorica!
      </Text>
      <Text color="slate">
        A painterly UI framework for modern web applications.
      </Text>
      <Button variant="tonal" onClick={() => console.log('🎨')}>
        Get Started
      </Button>
    </Flex>
  </Card>
);
```

---

## 🎨 Components

Pittorica includes a wide range of components:

- **Layout**: Box, Flex, Grid, Section, Container, Stack, Inset.
- **Typography**: Heading, Text, Code, Blockquote, Quote, Strong, Em, Kbd.
- **Actions**: Button, IconButton, SegmentedControl, Link.
- **Forms**: TextField, TextArea, Checkbox, Radio, Select, Switch, Slider, InputOTP.
- **Feedback**: Callout, Badge, Progress, Skeleton, Toast, Tooltip.
- **Overlays**: Dialog, AlertDialog, Sheet, Popover, ContextMenu, DropdownMenu, HoverCard.
- **Data Display**: Card, Avatar, Table, DataList, Chip.
- **Utilities**: AspectRatio, Divider, Carousel.

---

## 🛠️ Development

### Setup

```bash
# Clone the repository
git clone https://github.com/pittorica/pittorica.git

# Install dependencies
pnpm install
```

### Storybook

Explore and develop components in isolation:

```bash
pnpm run storybook
```

### Build

```bash
pnpm run build:react
```

### Testing

```bash
pnpm test
```

---

## 📄 License

Pittorica is licensed under the [MIT License](LICENSE).

---

Built with ❤️ by [Davide Di Criscito](https://dcdavidev.me).
