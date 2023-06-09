import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { RecipeListView } from '../../models/recipe';
import RecipeBasicInfo from '../../common/components/RecipeBasicInfo';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textDecoration: 'none',

  ':hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

interface RecipeListItemProps {
  recipe: RecipeListView;
}

function RecipeListItem({ recipe }: RecipeListItemProps) {
  const {
    categories,
    imageId,
    cookingTime,
    description,
    id,
    rating,
    servings,
    title,
    favorite,
  } = recipe;
  return (
    <Link to={`/recipes/${id}`} state={{ recipe }}>
      <StyledPaper>
        <RecipeBasicInfo
          imageId={imageId}
          categories={categories}
          cookingTime={cookingTime}
          description={description}
          rating={rating}
          servings={servings}
          title={title}
          favorite={favorite}
          id={id}
          disableFavoriteInteraction
        />
      </StyledPaper>
    </Link>
  );
}

export default RecipeListItem;
