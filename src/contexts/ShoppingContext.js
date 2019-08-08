import React from "react"

const defaultContextValue = {
  items: [],
  selectedItemIds: [],
  buyerInfo: {
    creditCard: {
      id: "",
      expiredYear: "",
      expiredMonth: "",
      securityCode: ""
    },
    name: "",
    phone: "",
    address: "",
  }
}

const Context = React.createContext(defaultContextValue)

class ShoppingProvider extends React.PureComponent {
  constructor(props) {
    super(props)

    const mergedItems = props.items.map(item => ({
      ...item,
      imageData: props.itemImageData[item.id]
    }))

    this.state = {
      items: mergedItems,
      selectedItemIds: [],
      buyerInfo: {
        creditCard: {
          id: "",
          expiredYear: "",
          expiredMonth: "",
          securityCode: ""
        },
        name: "",
        phone: "",
        address: "",
      }
    }
  }

  render = () => {
    const { children } = this.props

    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    )
  }
}

const ShoppingConsumer = Context.Consumer

export { Context as default, ShoppingProvider, ShoppingConsumer }
