export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://bike.shimano.com/en-NZ/product/component/alivio-m4000.html', 302)
})