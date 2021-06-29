import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  // constructor() {}
  // handler: any = null;
  // amount: number = 10;
  // ngOnInit() {
  //   this.loadStripe();
  // }
  // pay() {
  //   var handler = (<any>window).StripeCheckout.configure({
  //     key: "pk_test_51J5ThEKW26TKEWMi4tzPPfbhoSFAUSsTOMMELqSmtQdylvkraxSGa1TPFDolnFapfZAfFIdPo9kYdfsKwr5Xq70U00oXnKHJAZ",
  //     locale: "auto",
  //     token: function (token: any) {
  //       console.log(token);
  //       alert("Token Created!!");
  //     },
  //   });

  //   handler.open({
  //     name: "Payment",
  //     description: "Car",
  //   });
  // }

  // loadStripe() {
  //   if (!window.document.getElementById("stripe-script")) {
  //     var s = window.document.createElement("script");
  //     s.id = "stripe-script";
  //     s.type = "text/javascript";
  //     s.src = "https://checkout.stripe.com/checkout.js";
  //     s.onload = () => {
  //       this.handler = (<any>window).StripeCheckout.configure({
  //         key: "pk_test_51J5ThEKW26TKEWMi4tzPPfbhoSFAUSsTOMMELqSmtQdylvkraxSGa1TPFDolnFapfZAfFIdPo9kYdfsKwr5Xq70U00oXnKHJAZ",
  //         amount: this.amount * 100,
  //         locale: "auto",
  //         token: function (token: any) {
  //           console.log(token);
  //           alert("Payment Success!!");
  //         },
  //       });
  //     };

  //     window.document.body.appendChild(s);
  //   }
  // }
  amount: number;
  firstName: string ;
  lastName: string ;
  phoneNumber: string ;
  email: string ;
  orderId: string ;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}
  onSubmitPayment() {
    const obj = {
      receiverWallet: "660d5dfaee1add7620c68fb02",
      amount: 100,
      selectedPaymentMethod: "gateway",
      token: "TND",
      firstName: "Mohamed",
      lastName: "Haouari",
      phoneNumber: "55967825",
      email: "medhaouari025@gmail.com",
      orderId: "1234657",
      successUrl:
        "http://localhost:4200/#/payment/successPayment?user=mohamed&anyinfo=myinfo",
      failUrl:
        "http://localhost:4200/#/payment/failPayment?user=mohamed&anyinfo=myinfo",
    };
    this.postService.postPayment(obj).subscribe((payment) => {
      // this.router.navigate(payment);
      console.log('ddd',payment);
      window.location.href = payment.payUrl;
    });

    // this.amount = null;
    // this.firstName = "";
    // this.lastName = "";
    // this.phoneNumber = "";
    // this.email = "";
    // this.orderId = "";
  }
}
