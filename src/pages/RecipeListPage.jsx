import {
  Flex,
  AspectRatio,
  Heading,
  Text,
  Box,
  Input,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/RecipeItemCard";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const listOfRecipes = data.hits.map((item) => item.recipe);

  const matchedRecipes = listOfRecipes
    .filter((recipe) => {
      return (
        recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
        recipe.healthLabels.some((e) =>
          e.toLowerCase().includes(searchField.toLowerCase())
        ) ||
        recipe.dietLabels.some((e) =>
          e.toLowerCase().includes(searchField.toLowerCase())
        )
      );
    })
    .filter((recipe) => {
      return recipe.healthLabels.some((e) => e.includes(searchFilter));
    });

  return (
    <Flex direction="column" align="center" gap={3} bg="pink.300">
      <Heading
        align="center"
        w="100%"
        py={15}
        size="lg"
        color="gray.800"
        bg="green.300"
      >
        Recipe Checker
      </Heading>

      <Input
        w={{ base: "80%", md: "70%", lg: "40%" }}
        size="md"
        bg="white"
        borderRadius="lg"
        placeholder="Search for recipes"
        color="teal"
        _placeholder={{ opacity: 2, color: "inherit" }}
        onChange={handleChange}
      />

      <CheckboxGroup
        size="md"
        colorScheme="teal"
        onChange={setSearchFilter}
        value={searchFilter}
      >
        <Stack p={2} spacing={2} direction={["column", "row"]}>
          <Checkbox value="">All Recipes</Checkbox>
          <Checkbox value="Vegan">Vegan</Checkbox>
          <Checkbox value="Vegetarian">Vegetarian</Checkbox>
          <Checkbox value="Pescatarian">Pescatarian</Checkbox>
        </Stack>
      </CheckboxGroup>

      <Flex justify="center" wrap="wrap" gap={7}>
        {matchedRecipes.map((recipe) => (
          <AspectRatio
            key={recipe.label}
            w={{ base: "90vw", md: "40vw", lg: "30vw", xl: "20vw" }}
            ratio={2 / 3}
          >
            <RecipeItemCard recipe={recipe} clickFn={clickFn} />
          </AspectRatio>
        ))}
      </Flex>
    </Flex>
  );
};

export default RecipeListPage;
