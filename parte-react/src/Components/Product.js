import React, {Component} from 'react';


class Productos extends Component {
  constructor() {
    super()
    this.state = {
      info: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/products")
      .then(results => {
        return results.json()
      })
      .then(information => {

        this.setState({ info: information.data })
        console.log(this.state.info);
        
        this.state.info.map(d => {
          console.log(d.title);
        })
      })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.info.map((item, i) => 
            <li key={item + i}>
              <h2>Title: {item.title}</h2>

              <h5>Description: </h5>
              {item.description}

              <h5>Quantity:</h5>
              {item.quantity}

              <h5>Price:</h5>
              {item.price}
            </li>)}
        </ul>
      </div>
    )
  }
}

export default Productos