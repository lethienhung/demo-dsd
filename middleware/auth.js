export default function (context) {
  console.log("[Middleware] Just Auth");
  if (!context.store.getters.isAuthenticated) {
    //alert("Can't make it! Authentication Middleware is Working!")
    context.redirect("/auth")
  }
}
