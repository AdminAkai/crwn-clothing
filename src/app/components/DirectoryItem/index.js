import { useNavigate } from 'react-router-dom'

import {
  BackgroundImage,
  DirectoryItemContainer,
  Body
} from "./styledComponents.js"

function DirectoryItem({ category }) {
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(`/shop/${category.title}`)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body to={`/shop/${category.title}`}>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem