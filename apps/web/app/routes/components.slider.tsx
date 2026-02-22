import { useState } from 'react';

import { Flex, Slider, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function SliderRoute() {
  const [value, setValue] = useState(50);

  return (
    <DocPage
      name="Slider"
      description="Slider allows users to make selections from a range of values by moving a slider thumb along a horizontal track."
      packageName="slider-react"
      props={[
        { name: 'value', type: 'number', description: 'Controlled value.' },
        { name: 'defaultValue', type: 'number', description: 'Initial value.' },
        {
          name: 'onValueChange',
          type: '(value: number) => void',
          description: 'Callback fired when value changes.',
        },
        {
          name: 'min',
          type: 'number',
          default: '0',
          description: 'Minimum value.',
        },
        {
          name: 'max',
          type: 'number',
          default: '100',
          description: 'Maximum value.',
        },
        {
          name: 'step',
          type: 'number',
          default: '1',
          description: 'The granularity of selection.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'source',
          description: 'Semantic color.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'If true, the slider is disabled.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'A standard slider with value display.',
          code: `const [value, setValue] = useState(50);

<Flex direction="column" gap="2" width="300px">
  <Text>Volume: {value}%</Text>
  <Slider value={value} onValueChange={setValue} />
</Flex>`,
          render: (
            <Flex direction="column" gap="2" width="300px">
              <Text>Volume: {value}%</Text>
              <Slider value={value} onValueChange={setValue} />
            </Flex>
          ),
        },
        {
          title: 'Stepped Slider',
          description: 'A slider that snaps to specific increments.',
          code: `<Slider defaultValue={20} step={20} min={0} max={100} color="orange" />`,
          render: (
            <Flex width="300px">
              <Slider
                defaultValue={20}
                step={20}
                min={0}
                max={100}
                color="orange"
              />
            </Flex>
          ),
        },
      ]}
    />
  );
}
