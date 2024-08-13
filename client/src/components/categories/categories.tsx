import SingleCategory from "./singleCategory"
import { categories } from "./categoryData"

const Categories = () => {
  return (
    <section>
      <div className="categoryContainer">
        <div className="categories">
          {categories.map((category, index) => (
            <SingleCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
