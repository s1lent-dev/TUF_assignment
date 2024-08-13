import SingleCommunity from "./singleCommunity"
import { community } from "./communityData"

const Community = () => {
  return (
    <section>
      <div className="communityContainer">
      <div className="heading">
          <h4>Connect with our community</h4>
          <p>
            Join our community and stay connected with us. We are here to build the future together.
          </p>
        </div>
        <div className="communities">
          {community.map((community, index) => (
            <SingleCommunity key={index} {...community} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community
