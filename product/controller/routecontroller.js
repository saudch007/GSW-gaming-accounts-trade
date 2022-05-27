
const errorView = (req, res) => {
    res.render("../view/404.ejs");
    }
 const paymentView = (req, res) => {
    res.render("../view/payment.ejs");
}
module.exports =  {
  
    errorView,
    paymentView
};