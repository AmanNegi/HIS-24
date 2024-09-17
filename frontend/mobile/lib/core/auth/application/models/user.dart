import 'dart:convert';

import 'package:collection/collection.dart';
import 'package:flutter/foundation.dart';

class User {
  final String id;
  final String name;
  final String email;
  final String phone;
  final String role;
  final String aadhar;
  final Address address;


  User({
    required this.id,
    required this.name,
    required this.email,
    required this.phone,
    required this.role,
    required this.aadhar,
    required this.address,
  });

  User copyWith({
    String? id,
    String? name,
    String? email,
    String? phone,
    String? role,
    String? aadhar,
    Address? address,
  }) {
    return User(
      id: id ?? this.id,
      name: name ?? this.name,
      email: email ?? this.email,
      phone: phone ?? this.phone,
      role: role ?? this.role,
      aadhar: aadhar ?? this.aadhar,
      address: address ?? this.address,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      '_id': id,
      'name': name,
      'email': email,
      'phone': phone,
      'role': role,
      'aadhar': aadhar,
      'address': address.toMap(),
    };
  }

  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      id: map['_id'] ?? '',
      name: map['name'] ?? '',
      email: map['email'] ?? '',
      phone: map['phone'] ?? '',
      role: map['role'] ?? '',
      aadhar: map['aadhar'] ?? '',
      address: Address.fromMap(map['address']),
    );
  }

  String toJson() => json.encode(toMap());

  factory User.fromJson(String source) => User.fromMap(json.decode(source));

  @override
  String toString() {
    return 'User(id: $id, name: $name, email: $email, phone: $phone, role: $role, aadhar: $aadhar, address: $address)';
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
      other.aadhar == aadhar &&
      other.address == address;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      name.hashCode ^
      email.hashCode ^
      phone.hashCode ^
      role.hashCode ^
      aadhar.hashCode ^
      address.hashCode;
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

class Location {
  String type;
  List<double> coordinates;

  Location({
    required this.type,
    required this.coordinates,
  });

  Location copyWith({
    String? type,
    List<double>? coordinates,
  }) {
    return Location(
      type: type ?? this.type,
      coordinates: coordinates ?? this.coordinates,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'type': type,
      'coordinates': coordinates,
    };
  }

  factory Location.fromMap(Map<String, dynamic> map) {
    return Location(
      type: map['type'] ?? '',
      coordinates: List<double>.from(map['coordinates']),
    );
  }

  String toJson() => json.encode(toMap());

  factory Location.fromJson(String source) =>
      Location.fromMap(json.decode(source));

  @override
  String toString() => 'Location(type: $type, coordinates: $coordinates)';

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    final listEquals = const DeepCollectionEquality().equals;

    return other is Location &&
        other.type == type &&
        listEquals(other.coordinates, coordinates);
  }

  @override
  int get hashCode => type.hashCode ^ coordinates.hashCode;
}
