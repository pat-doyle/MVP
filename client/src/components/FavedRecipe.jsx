import React from 'react';
import{
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass';

const FavedRecipe = ({recipe, deleteFromDb}) => {
  return(
    <div className="recipe-entry">
      <Box 
        width={300}
        bg='rgb(220, 218, 218)'
      >
        <Card
          p={1}
          borderRadius={2}
          boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
          <a href={recipe.href} target="_blank"><Image src={recipe.thumbnail} /></a>
          <Box px={2}>
            <Heading as='h3'>
              {recipe.title}
            </Heading>
            <Text fontSize={4}>
              {recipe.ingredients}
            </Text>
            <Image 
              src="https://img.icons8.com/ios/50/000000/waste.png"
              width={[1/8]}
              onClick={() => deleteFromDb(recipe)}
            />
          </Box>
        </Card>
      </Box><br/>
    </div>
  );
}

export default FavedRecipe;


/*
<div className="recipe-title">
        <h3>{recipe.title}</h3>
      </div>
      <div className="recipe-picture">
        <a href={recipe.href} target="_blank"><img src={recipe.thumbnail}></img></a>
      </div>
      <div className="recipe-ingredients">
        {recipe.ingredients}
        <img className="favorite-heart" src="https://img.icons8.com/ios/50/000000/waste.png" onClick={() => deleteFromDb(recipe)}></img>
      </div>
*/