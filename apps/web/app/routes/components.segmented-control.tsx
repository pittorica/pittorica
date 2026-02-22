import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';

import { SegmentedControl } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function SegmentedControlRoute() {
  return (
    <DocPage
      name="SegmentedControl"
      description="SegmentedControl is a linear set of two or more segments, each of which functions as a mutually exclusive button."
      packageName="segmented-control-react"
      props={[
        {
          name: 'defaultValue',
          type: 'string',
          description: 'Initial selected value.',
        },
        {
          name: 'onValueChange',
          type: '(value: string) => void',
          description: 'Callback when selection changes.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'indigo',
          description: 'Semantic color.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'Disabled state.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'Used for switching between views or modes.',
          code: `<SegmentedControl.Root defaultValue="preview">
  <SegmentedControl.Item value="preview">Preview</SegmentedControl.Item>
  <SegmentedControl.Item value="code">Code</SegmentedControl.Item>
</SegmentedControl.Root>`,
          render: (
            <SegmentedControl.Root defaultValue="preview">
              <SegmentedControl.Item value="preview">
                Preview
              </SegmentedControl.Item>
              <SegmentedControl.Item value="code">Code</SegmentedControl.Item>
            </SegmentedControl.Root>
          ),
        },
        {
          title: 'Icon Segments',
          description: 'Using icons instead of text labels.',
          code: `<SegmentedControl.Root defaultValue="system" color="orange">
  <SegmentedControl.Item value="light"><IconSun size={16} /></SegmentedControl.Item>
  <SegmentedControl.Item value="dark"><IconMoon size={16} /></SegmentedControl.Item>
  <SegmentedControl.Item value="system"><IconDeviceDesktop size={16} /></SegmentedControl.Item>
</SegmentedControl.Root>`,
          render: (
            <SegmentedControl.Root defaultValue="system" color="orange">
              <SegmentedControl.Item value="light">
                <IconSun size={16} />
              </SegmentedControl.Item>
              <SegmentedControl.Item value="dark">
                <IconMoon size={16} />
              </SegmentedControl.Item>
              <SegmentedControl.Item value="system">
                <IconDeviceDesktop size={16} />
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          ),
        },
      ]}
    />
  );
}
