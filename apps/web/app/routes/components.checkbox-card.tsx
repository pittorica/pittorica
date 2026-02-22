import { CheckboxCard, Flex, Heading, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function CheckboxCardRoute() {
  return (
    <DocPage
      name="CheckboxCard"
      description="CheckboxCard combines the selection logic of a checkbox with the layout of a card. It's ideal for rich selection lists where each item needs more context."
      packageName="checkbox-card-react"
      props={[
        {
          name: 'defaultValue',
          type: 'string[]',
          description: 'Initially selected items.',
        },
        {
          name: 'orientation',
          type: '"horizontal" | "vertical"',
          default: '"vertical"',
          description: 'Layout direction.',
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
          description: 'Marks the input as required.',
        },
      ]}
      examples={[
        {
          title: 'Selection Grid',
          description: 'Cards used for a tiered pricing selection.',
          code: `<CheckboxCard orientation="horizontal" defaultValue={['1']}>
  <CheckboxCard.Item value="1">
    <Flex direction="column" gap="1">
      <Heading size="2">Basic</Heading>
      <Text color="gray">Free forever.</Text>
    </Flex>
  </CheckboxCard.Item>
</CheckboxCard>`,
          render: (
            <CheckboxCard orientation="horizontal" defaultValue={['1']}>
              <CheckboxCard.Item value="1" style={{ width: '180px' }}>
                <Flex direction="column" gap="1">
                  <Heading size="2">Basic</Heading>
                  <Text color="gray" size="1">
                    Free forever.
                  </Text>
                </Flex>
              </CheckboxCard.Item>
              <CheckboxCard.Item value="2" style={{ width: '180px' }}>
                <Flex direction="column" gap="1">
                  <Heading size="2">Pro</Heading>
                  <Text color="gray" size="1">
                    $12/month.
                  </Text>
                </Flex>
              </CheckboxCard.Item>
            </CheckboxCard>
          ),
        },
        {
          title: 'Required Selection',
          description: 'Ensure at least one option is considered.',
          code: `<CheckboxCard required name="agreement">
  <CheckboxCard.Item value="terms">I agree to terms</CheckboxCard.Item>
</CheckboxCard>`,
          render: (
            <CheckboxCard required name="agreement">
              <CheckboxCard.Item value="terms" style={{ width: '250px' }}>
                <Text weight="bold">I agree to the Terms & Conditions</Text>
              </CheckboxCard.Item>
            </CheckboxCard>
          ),
        },
      ]}
    />
  );
}
