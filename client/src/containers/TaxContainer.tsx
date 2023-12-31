import { Container, Breadcrumbs, Anchor, Paper, Text } from "@mantine/core";

export const TaxContainer: React.FC = () => {
  return (
    <Container size="sm" px="lg">
      <Breadcrumbs mb="lg">
        <Anchor href="/">Home</Anchor>
        <Anchor href="/admin">Tax</Anchor>
      </Breadcrumbs>
      <Paper shadow="xs" p="md">
        <Text size={"sm"} style={{ fontStyle: "italic" }}>
          This would be the tax homepage
        </Text>
      </Paper>
    </Container>
  );
};
