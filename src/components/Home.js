import SideCard from './SideCard.js'
import TweetBox from './TweetBox.js'
import StoriesBar from './StoriesBar.js'
import Postcard from './PostCard/PostCard.js'

export default function Home() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <SideCard />
          </div>
          <div className="col-6">
            <StoriesBar />
            <TweetBox />
            <div id='feed'>
              <Postcard />
            </div>
          </div>
          <div className="col">
            <SideCard />
          </div>
        </div>
      </div>
    )
}
