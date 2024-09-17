class PaymentMilestone {
  final double amount;
  final bool paid;

  PaymentMilestone({
    required this.amount,
    required this.paid,
  });

  factory PaymentMilestone.fromJson(Map<String, dynamic> json) {
    return PaymentMilestone(
      amount: json['amount'],
      paid: json['paid'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'amount': amount,
      'paid': paid,
    };
  }
}

class PaymentMilestones {
  final PaymentMilestone milestone1;
  final PaymentMilestone milestone2;
  final PaymentMilestone milestone3;

  PaymentMilestones({
    required this.milestone1,
    required this.milestone2,
    required this.milestone3,
  });

  factory PaymentMilestones.fromJson(Map<String, dynamic> json) {
    return PaymentMilestones(
      milestone1: PaymentMilestone.fromJson(json['milestone1']),
      milestone2: PaymentMilestone.fromJson(json['milestone2']),
      milestone3: PaymentMilestone.fromJson(json['milestone3']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'milestone1': milestone1.toJson(),
      'milestone2': milestone2.toJson(),
      'milestone3': milestone3.toJson(),
    };
  }
}

class Contract {
  final String farmer;
  final String contractor;
  final String crop;
  final double area;
  final double price;
  final double quantity;
  final DateTime contractStartDate;
  final DateTime contractEndDate;
  final String paymentStatus;
  final PaymentMilestones paymentMilestones;
  final bool cropInsurance;
  final DateTime signedDate;
  final String status;

  Contract({
    required this.farmer,
    required this.contractor,
    required this.crop,
    required this.area,
    required this.price,
    required this.quantity,
    required this.contractStartDate,
    required this.contractEndDate,
    required this.paymentStatus,
    required this.paymentMilestones,
    required this.cropInsurance,
    required this.signedDate,
    required this.status,
  });

  factory Contract.fromJson(Map<String, dynamic> json) {
    return Contract(
      farmer: json['farmer'],
      contractor: json['contractor'],
      crop: json['crop'],
      area: json['area'],
      price: json['price'],
      quantity: json['quantity'],
      contractStartDate: DateTime.parse(json['contractStartDate']),
      contractEndDate: DateTime.parse(json['contractEndDate']),
      paymentStatus: json['paymentStatus'],
      paymentMilestones: PaymentMilestones.fromJson(json['paymentMilestones']),
      cropInsurance: json['cropInsurance'],
      signedDate: DateTime.parse(json['signedDate']),
      status: json['status'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'farmer': farmer,
      'contractor': contractor,
      'crop': crop,
      'area': area,
      'price': price,
      'quantity': quantity,
      'contractStartDate': contractStartDate.toIso8601String(),
      'contractEndDate': contractEndDate.toIso8601String(),
      'paymentStatus': paymentStatus,
      'paymentMilestones': paymentMilestones.toJson(),
      'cropInsurance': cropInsurance,
      'signedDate': signedDate.toIso8601String(),
      'status': status,
    };
  }
}
