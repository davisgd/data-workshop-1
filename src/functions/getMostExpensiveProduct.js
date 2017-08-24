// const getMostExpensiveProduct = (DATA) => {
//   if (DATA == null || DATA.products == null) {
//     return null
//   }
//
//   let mostExpensiveProduct = {}
//   DATA.products.forEach((m) => {
//     if (m.price > mostExpensiveProduct.price) {
//       mostExpensiveProduct = DATA.products.mostExpensiveProduct
//     }
//   })
//   return mostExpensiveProduct
// }

export default (data) => {
  if (data == null || data.products == null) {
    return null
  }

  return data.products.reduce((mostExpensiveProduct, p) => {
    if (p.price > mostExpensiveProduct.price) {
      return p
    } else {
      return mostExpensiveProduct
    }
  })
}

// export default getMostExpensiveProduct
