import { Tag as CTag, HStack } from "@chakra-ui/react";

export const Tag = ({ labels, colorScheme, ...props }) => (
  <HStack gap={2} wrap="wrap" {...props}>
    {labels
      .map((label) => label.toUpperCase())
      .map((label) => (
        <CTag
          key={label}
          size={{ base: "sm", md: "md", lg: "md", xl: "md" }}
          p="1"
          borderRadius="sm"
          colorScheme={colorScheme}
          fontWeight="bold"
        >
          {label}
        </CTag>
      ))}
  </HStack>
);

/* export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={2}
      size="sm"
      variant="solid"
      bgColor="blue.300"
      color="white"
      {...props}
    >
      {children}
    </CTag>
  );
};
 */
