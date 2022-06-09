import * as React from "react";

const HOC = (WrappedComponent, Entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${Entity}`
        );
        const responseJSON = await response.json();
        this.setState({ ...this.state, data: responseJSON });
      };
      fetchData();
    }
    render() {
      const { data, term } = this.state;
      let filteredData = data.filter((item) => {
        if (Entity === "users") {
          const { name } = item;
          return name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        }
        if (Entity === "todos") {
          const { title } = item;
          return title.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        }
      });
      return (
        <div className="hoc">
          <h2>{Entity}</h2>
          <input
            type={"text"}
            placeholder={"Search"}
            value={term}
            onChange={(event) =>
              this.setState({ ...this.state, term: event.target.value })
            }
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default HOC;
