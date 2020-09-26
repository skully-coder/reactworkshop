import React from "react";
import Restaurant from "./Restaurant";
import Data from "./Data";
class Home extends React.Component {
  render() {
    const textfield = (
      <form>
        <input id="searchBar" placeholder="Enter your city" />
        <button id="search"> Search </button>
      </form>
    );

    return (
      <div className="home">
        <div className="heading">
          <div> Top Restaurants in Manipal</div>
          <div> {textfield}</div>
        </div>
        <div className="restaurants">
          {Data.map((rest, index) => {
            return <Restaurant image={rest.image}
            title={rest.title}
            rating={rest.rating}
            avgcost={rest.avgcost}
            likes={rest.likes}
            cuisine={rest.cuisine}
            location={rest.location}
            id={rest.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
