import getUserById from './getUserById'
import getProductById from './getProductById'

// Works like a charm
// const getOrderInfo = (id) => {
//   let orderArray = []
//   DATA.orders.forEach((o) => {
//     orderArray.push({
//       userName: getUserById(o.userId).name,
//       orderId: o.id,
//       price: getProductById(o.productId).price
//     })
//   })
//   return orderArray
// }

export default (data) => {
  if (data == null || data.orders == null) {
    return null
  }

  return data.orders.map(o => {
    return {
      orderId: o.id,
      userName: getUserById(data, o.userId).name,
      price: getProductById(data, o.productId).price
    }
  })
}
