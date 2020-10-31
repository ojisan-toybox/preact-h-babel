import { h, Fragment, Component } from "preact";

class App extends Component {
  constructor() {
    this.state = {
      count: 10000000,
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      count: 0,
      data: [{ name: "taro" }, { name: "hanako" }],
    });
  }

  componentWillReceiveProps(next) {
    console.log("next.props:", next.props);
  }

  render() {
    return (
      <div>
        <section>
          <h1>counting area</h1>
          <span>count: </span>
          <span>{this.state.count}</span>
          <button
            onClick={() =>
              this.setState({ ...this.state, count: this.state.count + 1 })
            }
          >
            add
          </button>
        </section>
        <section>
          <h1>user data area</h1>
          <ul>
            {this.state.data.map((d, i) => (
              <ListItem
                name={d.name}
                handleDelete={() => {
                  this.setState({
                    ...this.state,
                    data: this.state.data.filter((_, j) => {
                      return i !== j;
                    }),
                  });
                }}
              ></ListItem>
            ))}
          </ul>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const userName = e.target["name"].value;
              this.setState({
                ...this.state,
                data: [...this.state.data, { name: userName }],
              });
            }}
          >
            <input name="name"></input>
            <button type="submit">add</button>
          </form>
        </section>
      </div>
    );
  }
}

class ListItem extends Component {
  componentWillReceiveProps(nextProps, prevProps) {
    console.log("next.props:", nextProps);
    console.log("next.props:", prevProps);
  }
  render() {
    return (
      <>
        <li>{this.props.name}</li>
        <button onClick={() => this.props.handleDelete()}>delete</button>
      </>
    );
  }
}
