import { Button, Flex } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function ButtonRoute() {
  return (
    <DocPage
      name="Button"
      description="Button triggers an action or event, such as submitting a form, opening a dialog, or performing a delete operation. Pittorica buttons follow Material Design 3 guidelines."
      packageName="button-react"
      props={[
        {
          name: 'variant',
          type: '"filled" | "tonal" | "outlined" | "elevated" | "text"',
          default: 'filled',
          description: 'The visual variant of the button.',
        },
        {
          name: 'size',
          type: '"xs" | "sm" | "md" | "lg" | "xl"',
          default: 'sm',
          description: 'The size of the button.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'indigo',
          description: 'The semantic color of the button.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'If true, the button will be disabled.',
        },
        {
          name: 'as',
          type: 'ElementType',
          default: 'button',
          description:
            'The component or HTML tag to render. Automatically becomes "a" if href is provided.',
        },
      ]}
      examples={[
        {
          title: 'Variants',
          description: 'The 5 MD3-inspired variants.',
          code: `<Flex gap="3" wrap="wrap">
  <Button variant="filled">Filled</Button>
  <Button variant="tonal">Tonal</Button>
  <Button variant="outlined">Outlined</Button>
  <Button variant="elevated">Elevated</Button>
  <Button variant="text">Text</Button>
</Flex>`,
          render: (
            <Flex gap="3" wrap="wrap">
              <Button variant="filled">Filled</Button>
              <Button variant="tonal">Tonal</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="elevated">Elevated</Button>
              <Button variant="text">Text</Button>
            </Flex>
          ),
        },
        {
          title: 'Colors',
          description: 'Buttons support all semantic color tokens.',
          code: `<Flex gap="3" wrap="wrap">
  <Button color="indigo">Indigo</Button>
  <Button color="crimson">Crimson</Button>
  <Button color="teal">Teal</Button>
  <Button color="orange">Orange</Button>
</Flex>`,
          render: (
            <Flex gap="3" wrap="wrap">
              <Button color="indigo">Indigo</Button>
              <Button color="crimson">Crimson</Button>
              <Button color="teal">Teal</Button>
              <Button color="orange">Orange</Button>
            </Flex>
          ),
        },
      ]}
    />
  );
}
