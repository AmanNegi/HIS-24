import 'dart:convert';

class User {
  final String id;
  final String name;
  final String email;
  final String phone;
  final String role;
  final String aadhar;

  User({
    required this.id,
    required this.name,
    required this.email,
    required this.phone,
    required this.role,
    required this.aadhar,
  });

  User copyWith({
    String? id,
    String? name,
    String? email,
    String? phone,
    String? role,
    String? aadhar,
  }) {
    return User(
      id: id ?? this.id,
      name: name ?? this.name,  
      email: email ?? this.email,
      phone: phone ?? this.phone,
      role: role ?? this.role,
      aadhar: aadhar ?? this.aadhar,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'phone': phone,
      'role': role,
      'aadhar': aadhar,
    };
  }

  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      id: map['id'] ?? '',
      name: map['name'] ?? '',
      email: map['email'] ?? '',
      phone: map['phone'] ?? '',
      role: map['role'] ?? '',
      aadhar: map['aadhar'] ?? '',
    );
  }

  String toJson() => json.encode(toMap());

  factory User.fromJson(String source) => User.fromMap(json.decode(source));

  @override
  String toString() {
    return 'User(id: $id, name: $name, email: $email, phone: $phone, role: $role, aadhar: $aadhar)';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
  
    return other is User &&
      other.id == id &&
      other.name == name &&
      other.email == email &&
      other.phone == phone &&
      other.role == role &&
      other.aadhar == aadhar;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      name.hashCode ^
      email.hashCode ^
      phone.hashCode ^
      role.hashCode ^
      aadhar.hashCode;
  }
}

class Address {
  final String street;
  final String city;
  final String state;
  final String zipCode;
  Address({
    required this.street,
    required this.city,
    required this.state,
    required this.zipCode,
  });

  Address copyWith({
    String? street,
    String? city,
    String? state,
    String? zipCode,
  }) {
    return Address(
      street: street ?? this.street,
      city: city ?? this.city,
      state: state ?? this.state,
      zipCode: zipCode ?? this.zipCode,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'street': street,
      'city': city,
      'state': state,
      'zipCode': zipCode,
    };
  }

  factory Address.fromMap(Map<String, dynamic> map) {
    return Address(
      street: map['street'] ?? '',
      city: map['city'] ?? '',
      state: map['state'] ?? '',
      zipCode: map['zipCode'] ?? '',
    );
  }

  String toJson() => json.encode(toMap());

  factory Address.fromJson(String source) =>
      Address.fromMap(json.decode(source));

  @override
  String toString() {
    return 'Address(street: $street, city: $city, state: $state, zipCode: $zipCode)';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is Address &&
        other.street == street &&
        other.city == city &&
        other.state == state &&
        other.zipCode == zipCode;
  }

  @override
  int get hashCode {
    return street.hashCode ^ city.hashCode ^ state.hashCode ^ zipCode.hashCode;
  }
}
