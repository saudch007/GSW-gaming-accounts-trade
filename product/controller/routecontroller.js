
const errorView = (req, res) => {
    res.render("D:/main web project/my side web project/product/view/404.ejs");
    }
 const paymentView = (req, res) => {
    res.render("D:/main web project/my side web project/product/view/payment.ejs");
}
module.exports =  {
  
    errorView,
    paymentView
};