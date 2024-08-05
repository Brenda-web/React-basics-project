import {
  Flex,
  Image,
  Box,
  Button,
  Text,
  SimpleGrid,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Tag } from "../components/ui/Tag";
/* this shld detailed page*/

export const RecipePage = ({ recipe, clickFn }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex justify="center" bg="gray.200">
      <Box w="15%" bgGradient="linear(to-r, green.200, pink.500)" />

      <Box w="70%">
        <Box h="10vh" p={2}>
          <Button
            height="100%"
            colorScheme="teal"
            variant="ghost"
            fontSize="2xl"
            fontWeight="bold"
            color="green"
            onClick={() => clickFn()}
          >
            &#60;
          </Button>
        </Box>

        <Image src={recipe.image} width="100%" h="25vh" fit="cover" />

        <Flex minH="70vh" p={5}>
          <SimpleGrid
            columns={{ base: "1", md: "2" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Flex direction="column">
              <Box>
                <Text
                  casing="uppercase"
                  fontSize="sm"
                  color="
                  blackAlpha.600"
                >
                  {recipe.mealType}
                </Text>

                <Text as="b" color="blackAlpha.900" fontSize="xl">
                  {recipe.label}
                </Text>
              </Box>

              <SimpleGrid columns={2} mt={3}>
                <Text>Total cooking time: </Text>
                <Text>{recipe.totalTime} Minutes</Text>
                <Text>Servings:</Text>
                <Text>{recipe.yield}</Text>
              </SimpleGrid>

              <Flex direction="column" gap={2}>
                <Text as="b" mt={4}>
                  Ingredients:
                </Text>
                <Flex direction="column" gap={2}>
                  {recipe.ingredientLines.map((item) => (
                    <Text key={item}>{item} </Text>
                  ))}
                </Flex>
              </Flex>
            </Flex>

            <Flex direction="column" gap={5}>
              <Box>
                <Text mb={2}>Health labels:</Text>
                <Tag labels={recipe.healthLabels} colorScheme="purple" />
              </Box>

              {recipe.dietLabels != "" && (
                <Box>
                  <Text mb={2}>Diet:</Text>
                  <Tag labels={recipe.dietLabels} colorScheme="green" />
                </Box>
              )}

              {recipe.cautions != "" && (
                <Box>
                  <Text mb={2}>Cautions:</Text>
                  <Tag labels={recipe.cautions} colorScheme="pink" />
                </Box>
              )}

              <Box>
                <Heading size="md" fontWeight="normal">
                  Total Nutrients
                </Heading>
              </Box>

              <Flex wrap="wrap" gap={4}>
                <Box>
                  <Text>{Math.round(recipe.calories)}</Text>
                  <Text fontWeight="600">CALORIES</Text>
                </Box>

                <Box>
                  <Text>
                    {Math.round(recipe.totalNutrients.CHOCDF.quantity)}{" "}
                    {recipe.totalNutrients.CHOCDF.unit}
                  </Text>
                  <Text fontWeight="600">
                    {recipe.totalNutrients.CHOCDF.label.toUpperCase()}
                  </Text>
                </Box>

                <Box>
                  <Text>
                    {Math.round(recipe.totalNutrients.PROCNT.quantity)}{" "}
                    {recipe.totalNutrients.PROCNT.unit}
                  </Text>

                  <Text fontWeight="600">
                    {recipe.totalNutrients.PROCNT.label.toUpperCase()}
                  </Text>
                </Box>

                <Box>
                  <Text>
                    {Math.round(recipe.totalNutrients.FAT.quantity)}{" "}
                    {recipe.totalNutrients.FAT.unit}
                  </Text>

                  <Text fontWeight="600">
                    {recipe.totalNutrients.FAT.label.toUpperCase()}
                  </Text>
                </Box>

                <Box>
                  <Text>
                    {Math.round(recipe.totalNutrients.CHOLE.quantity)}{" "}
                    {recipe.totalNutrients.CHOLE.unit}
                  </Text>

                  <Text fontWeight="600">
                    {recipe.totalNutrients.CHOLE.label.toUpperCase()}
                  </Text>
                </Box>

                <Box>
                  <Text>
                    {Math.round(recipe.totalNutrients.NA.quantity)}{" "}
                    {recipe.totalNutrients.NA.unit}
                  </Text>
                  <Text fontWeight="600">
                    {recipe.totalNutrients.NA.label.toUpperCase()}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Box>
      <Box w="15%" bgGradient="linear(to-r, green.200, pink.500)" />
    </Flex>
  );
};

export default RecipePage;
