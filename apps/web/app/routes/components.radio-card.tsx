import { IconBuildingStore, IconPackage, IconTruck } from '@tabler/icons-react';

import { Flex, RadioCard, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function RadioCardRoute() {
  return (
    <DocPage
      name="RadioCard"
      description="RadioCard combines radio selection with a card layout. It is perfect for choosing between plans, delivery methods, or any set of mutually exclusive options that require detailed descriptions."
      packageName="radio-card-react"
      props={[
        {
          name: 'defaultValue',
          type: 'string',
          description: 'Initially selected item.',
        },
        {
          name: 'columns',
          type: 'string',
          default: '"1"',
          description: 'Number of grid columns.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'indigo',
          description: 'Highlight color.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          description: 'Marks all radio items in the group as required.',
        },
      ]}
      examples={[
        {
          title: 'Delivery Methods',
          description: 'Choosing between different shipping options.',
          code: `<RadioCard.Root defaultValue="standard" columns="3">
  <RadioCard.Item value="standard">
    <Flex direction="column" align="center" gap="1">
      <IconPackage size={24} />
      <Text weight="bold">Standard</Text>
    </Flex>
  </RadioCard.Item>
</RadioCard.Root>`,
          render: (
            <RadioCard.Root defaultValue="standard" columns="3">
              <RadioCard.Item value="pickup">
                <Flex direction="column" gap="1" align="center">
                  <IconBuildingStore size={24} />
                  <Text weight="bold">Pickup</Text>
                </Flex>
              </RadioCard.Item>
              <RadioCard.Item value="standard">
                <Flex direction="column" gap="1" align="center">
                  <IconPackage size={24} />
                  <Text weight="bold">Standard</Text>
                </Flex>
              </RadioCard.Item>
              <RadioCard.Item value="express">
                <Flex direction="column" gap="1" align="center">
                  <IconTruck size={24} />
                  <Text weight="bold">Express</Text>
                </Flex>
              </RadioCard.Item>
            </RadioCard.Root>
          ),
        },
        {
          title: 'Required Choice',
          description: 'Ensure the user selects one of the available options.',
          code: `<RadioCard.Root required name="preference">
  <RadioCard.Item value="a">Option A</RadioCard.Item>
  <RadioCard.Item value="b">Option B</RadioCard.Item>
</RadioCard.Root>`,
          render: (
            <RadioCard.Root required name="preference" columns="2">
              <RadioCard.Item value="a">Option A</RadioCard.Item>
              <RadioCard.Item value="b">Option B</RadioCard.Item>
            </RadioCard.Root>
          ),
        },
      ]}
    />
  );
}
