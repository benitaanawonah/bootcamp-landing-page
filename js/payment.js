$(document).ready(function(){
    $('.payment').click(function(){
        amount = $(this).data('amount')
        desc = $(this).data('desc')
        console.log(amount)
        console.log(desc)
        $('#exampleModal').modal('show')
        $('#proceed').click(function(){
            fullname = $('#name').val()
            email = $('#email').val()
            phone = $('#phone').val()
            makePayment(amount,desc,fullname,email,phone)
        })
    })

    function makePayment(amount, desc,fullname,email,phone) {
        FlutterwaveCheckout({
          public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
          tx_ref: "titanic-48981487343w22I0NzMx",
          amount: amount,
          currency: "NGN",
          payment_options: "card, mobilemoneyghana, ussd",
          //redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
          meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
          },
          customer: {
            email: email,
            phone_number: phone,
            name: fullname,
          },
          callback : function (data){
            if(data.status == 'successful'){
                alert('Payment was successful')
                window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfJqxKMj5VgNlggQkfV6Rf702r8goKGXKcLkSQJovylJ3Ge0w/viewform?embedded=true'
            }
          },
          customizations: {
            title: `${desc}`,
            description: `${desc}`,
            logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
          },
        });
      }

})