import "./styles.scss"

import CategoryItem from "../CategoryItem"

function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory