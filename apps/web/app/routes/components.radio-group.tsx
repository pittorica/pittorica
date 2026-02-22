import { Flex, RadioGroup, RadioGroupItem, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function RadioGroupRoute() {
  return (
    <DocPage
      name="RadioGroup"
      description="RadioGroup manages a set of radio items, ensuring that only one option can be selected at a time."
      packageName="radio-group-react"
      props={[
        {
          name: 'defaultValue',
          type: 'string',
          description: 'Initially selected value.',
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
          description: 'Color of selected items.',
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
          title: 'Selection List',
          description: 'A mutually exclusive list of options.',
          code: `<RadioGroup defaultValue="1">
          <Flex direction="column" gap="3">
            <Flex align="center" gap="2">
              <RadioGroupItem value="1" id="r1" />
              <Text as="label" htmlFor="r1">Option One</Text>
            </Flex>
            <Flex align="center" gap="2">
              <RadioGroupItem value="2" id="r2" />
              <Text as="label" htmlFor="r2">Option Two</Text>
            </Flex>
          </Flex>
        </RadioGroup>`,
          render: (
            <RadioGroup defaultValue="1">
              <Flex direction="column" gap="3">
                <Flex align="center" gap="2">
                  <RadioGroupItem value="1" id="r1" />
                  <Text as="label" htmlFor="r1" style={{ cursor: 'pointer' }}>
                    Option One
                  </Text>
                </Flex>
                <Flex align="center" gap="2">
                  <RadioGroupItem value="2" id="r2" />
                  <Text as="label" htmlFor="r2" style={{ cursor: 'pointer' }}>
                    Option Two
                  </Text>
                </Flex>
              </Flex>
            </RadioGroup>
          ),
        },
        {
          title: 'Required Group',
          description: 'Ensure a selection is made within this group.',
          code: `<RadioGroup required name="survey">
          <Flex gap="4">
            <Flex align="center" gap="2">
              <RadioGroupItem value="yes" id="sy" />
              <Text as="label" htmlFor="sy">Yes</Text>
            </Flex>
            <Flex align="center" gap="2">
              <RadioGroupItem value="no" id="sn" />
              <Text as="label" htmlFor="sn">No</Text>
            </Flex>
          </Flex>
        </RadioGroup>`,
          render: (
            <RadioGroup required name="survey">
              <Flex gap="4">
                <Flex align="center" gap="2">
                  <RadioGroupItem value="yes" id="sy" />
                  <Text as="label" htmlFor="sy" style={{ cursor: 'pointer' }}>
                    Yes
                  </Text>
                </Flex>
                <Flex align="center" gap="2">
                  <RadioGroupItem value="no" id="sn" />
                  <Text as="label" htmlFor="sn" style={{ cursor: 'pointer' }}>
                    No
                  </Text>
                </Flex>
              </Flex>
            </RadioGroup>
          ),
        },
      ]}
    />
  );
}
