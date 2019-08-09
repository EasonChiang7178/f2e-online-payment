import React from "react"

const defaultContextValue = {
  items: [],
  selectedItems: [],
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
  },
  addItem: () => {},
  updateItem: () => {},
  updateItems: () => {}
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
      selectedItems: [],
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
      },
      addItem: this.addItem,
      updateItem: this.updateItem,
      updateItems: this.updateItems
    }
  }

  addItem = (itemId) => {
    const i = this.state.selectedItems.findIndex(i => i.id === itemId)
    if (i > -1) {
      return
    }

    this.setState(state => ({
      selectedItems: state.selectedItems.concat({ id: itemId, count: 1 })
    }))
  }

  updateItem = (updatedItem) => {
    const i = this.state.selectedItems.findIndex(i => i.id === updatedItem.id)

    this.setState(state => ({
      selectedItems: [
        ...state.selectedItems.slice(0, i),
        updatedItem,
        ...state.selectedItems.slice(i + 1)
      ]
    }))
  }

  updateItems = (updatedItems) => {
    this.setState(() => ({ selectedItems: updatedItems }))
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
