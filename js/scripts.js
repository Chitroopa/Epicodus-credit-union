//business logic
function BankAccount(name, initDeposit, deposit, withdraw) {
  this.nameAccount = name;
  this.initDeposit = initDeposit;
  this.deposit = deposit;
  this.withdraw = withdraw;
}
BankAccount.prototype.depositCalculation = function() {
  return this.initDeposit += this.deposit;
}

BankAccount.prototype.withdrawCalculation = function() {

  if (this.withdraw > this.initDeposit) {
    alert("You have no money!");
  } else {
      return this.initDeposit -= this.withdraw;
  }
}




// user interface logic
$(document).ready(function() {
  $("#new-account").submit(function(event) {
  event.preventDefault();
  var nameInput = $("#account-name").val();
  var initDepositInput = parseInt($("#init-deposit").val());
  var depositInput = parseInt($("#account-deposit").val());
  var withdrawInput = parseInt($("#account-withdraw").val());
  //console.log(nameInput, initDepositInput, depositInput, withdrawInput);
  if(!initDepositInput)
  {
    initDepositInput = 0;
  }
  if(!depositInput)
  {
    depositInput = 0;
  }
  if(!withdrawInput)
  {
    withdrawInput = 0;
  }
  var newBankAccount = new BankAccount(nameInput, initDepositInput, depositInput, withdrawInput);
    console.log(newBankAccount.depositCalculation());
    console.log(newBankAccount.withdrawCalculation());
    $("#balance").show();
    $(".balance").text(newBankAccount.initDeposit);


  });
});
