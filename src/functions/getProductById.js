// returns product object based on product ID #
const getProductById = (DATA, productId) => {
  if (!DATA || !DATA.products || !productId) {
    return null
  }
  let product = {}
  for (let n = 0; n < DATA.products.length; n += 1) {
    if (DATA.products[n].productId === productId) {
      product = DATA.products[n]
    }
  }
  return product
}
export default getProductById
