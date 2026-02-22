import { Box, Flex, Progress, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function ProgressRoute() {
  return (
    <DocPage
      name="Progress"
      description="Progress component displays an indicator of the status of a task or process, such as a file upload or a multi-step form."
      packageName="progress-react"
      props={[
        {
          name: 'value',
          type: 'number',
          default: '0',
          description: 'Current progress value (0 to max).',
        },
        {
          name: 'max',
          type: 'number',
          default: '100',
          description: 'The maximum value.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'indigo',
          description: 'Semantic color.',
        },
      ]}
      examples={[
        {
          title: 'Basic Progress',
          description: 'A simple progress bar at 40%.',
          code: `<Progress value={40} color="indigo" />`,
          render: (
            <Box width="300px">
              <Progress value={40} color="indigo" />
            </Box>
          ),
        },
        {
          title: 'Color States',
          description: 'Using different colors to represent status.',
          code: `<Flex direction="column" gap="4" width="300px">
  <Progress value={100} color="teal" />
  <Progress value={15} color="red" />
</Flex>`,
          render: (
            <Flex direction="column" gap="4" width="300px">
              <Box>
                <Text size="1" mb="1">
                  Completed
                </Text>
                <Progress value={100} color="teal" />
              </Box>
              <Box>
                <Text size="1" mb="1">
                  Low battery
                </Text>
                <Progress value={15} color="red" />
              </Box>
            </Flex>
          ),
        },
      ]}
    />
  );
}
