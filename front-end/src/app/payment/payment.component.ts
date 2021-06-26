import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  constructor() {}
  handler: any = null;
  ngOnInit() {
    this.loadStripe();
  }
  pay(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: "pk_test_51J5ThEKW26TKEWMi4tzPPfbhoSFAUSsTOMMELqSmtQdylvkraxSGa1TPFDolnFapfZAfFIdPo9kYdfsKwr5Xq70U00oXnKHJAZ",
      locale: "auto",
      token: function (token: any) {
        console.log(token);
        alert("Token Created!!");
      },
    });

    handler.open({
      name: "Payment",
      description: "Car",
      amount: amount * 100,
    });
  }

  loadStripe() {
    if (!window.document.getElementById("stripe-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: "pk_test_51J5ThEKW26TKEWMi4tzPPfbhoSFAUSsTOMMELqSmtQdylvkraxSGa1TPFDolnFapfZAfFIdPo9kYdfsKwr5Xq70U00oXnKHJAZ",
          locale: "auto",
          token: function (token: any) {
            console.log(token);
            alert("Payment Success!!");
          },
        });
      };

      window.document.body.appendChild(s);
    }
  }
}    
   
//connect