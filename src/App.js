import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import RandomPhotos from "./components/random-photos.component";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: Array.from({ length: 12 }),
    };
  }

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 12 })),
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1 className="heading">Infinite Scroll In React</h1>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h1 className="heading">Loading...</h1>}
        >
          {this.state.items.map((i, index) => (
            <RandomPhotos key={index} index={index} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
