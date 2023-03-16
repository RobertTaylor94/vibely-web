import SideCard from './SideCard.js'
import TweetBox from './TweetBox.js'
import StoriesBar from './StoriesBar.js'

export default function Home() {
    return (
      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <SideCard />
          </div>
          <div class="col-6">
            <StoriesBar />
            <TweetBox />
          </div>
          <div class="col">
            <SideCard />
          </div>
        </div>
      </div>
    )
}
