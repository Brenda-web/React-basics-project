import {
  Card,
  CardBody,
  Flex,
  Image,
  StackDivider,
  Text,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/Tag";

export const RecipeItemCard = ({ recipe, clickFn }) => {
  return (
    <Card
      borderRadius="md"
      cursor="pointer"
      p={2}
      _hover={{ transform: "scale(1.01)" }}
      onClick={() => clickFn(recipe)}
    >
      <Image src={recipe.image} w="100%" h="40%" objectFit="cover" />
      <CardBody>
        <Flex direction="column" gap={2}>
          <Flex direction="column">
            <Text
              align="center"
              casing="uppercase"
              color="gray.500"
              fontWeight="500"
              fontSize="sm"
              pt={4}
            >
              {recipe.mealType}
            </Text>
            <Text as="b" align="center" fontSize="15px" color="gray.700">
              {recipe.label}
            </Text>
          </Flex>

          <HStack justify="center">
            <Tag
              labels={recipe.healthLabels.filter(
                (label) => label == "Vegan" || label == "Vegetarian"
              )}
              colorScheme="purple"
            />
          </HStack>

          <HStack justify="center">
            <Tag labels={recipe.dietLabels} colorScheme="green" />
          </HStack>

          <Flex justify="center" gap={2}>
            <Text>Dish:</Text>
            <Text as="b" fontSize="md" textTransform="capitalize">
              {recipe.dishType}
            </Text>
          </Flex>

          {recipe.cautions != "" && (
            <Flex direction="column" align="center">
              <Text>Cautions:</Text>
              <Tag labels={recipe.cautions} colorScheme="pink" />
            </Flex>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default RecipeItemCard;
