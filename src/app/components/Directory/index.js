import "./styles.scss"

import DirectoryItem from "../DirectoryItem"

function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory