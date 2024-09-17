import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'package:my_template/core/auth/application/models/user.dart';

class Farm {
  final String title;
  final String id;
  final String owner;
  final double size;
  final String state;
  final Location location;
  final String waterSource;
  final List<String> images;
  final List<String> crops;
  Farm({
    required this.title,
    required this.id,
    required this.owner,
    required this.size,
    required this.state,
    required this.location,
    required this.waterSource,
    required this.images,
    required this.crops,
  });

  Farm copyWith({
    String? title,
    String? id,
    String? owner,
    double? size,
    String? state,
    Location? location,
    String? waterSource,
    List<String>? images,
    List<String>? crops,
  }) {
    return Farm(
      title: title ?? this.title,
      id: id ?? this.id,
      owner: owner ?? this.owner,
      size: size ?? this.size,
      state: state ?? this.state,
      location: location ?? this.location,
      waterSource: waterSource ?? this.waterSource,
      images: images ?? this.images,
      crops: crops ?? this.crops,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'title': title,
      '_id': id,
      'owner': owner,
      'size': size,
      'state': state,
      'location': location.toMap(),
      'waterSource': waterSource,
      'images': images,
      'crops': crops,
    };
  }

  factory Farm.fromMap(Map<String, dynamic> map) {
    return Farm(
      title: map['title'] ?? '',
      id: map['_id'] ?? '',
      owner: map['owner'] ?? '',
      size: map['size']?.toDouble() ?? 0.0,
      state: map['state'] ?? '',
      location: Location.fromMap(map['location']),
      waterSource: map['waterSource'] ?? '',
      images: List<String>.from(map['images']),
      crops: List<String>.from(map['crops']),
    );
  }

  String toJson() => json.encode(toMap());

  factory Farm.fromJson(String source) => Farm.fromMap(json.decode(source));

  @override
  String toString() {
    return 'Farm(title: $title, id: $id, owner: $owner, size: $size, state: $state, location: $location, waterSource: $waterSource, images: $images, crops: $crops)';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
  
    return other is Farm &&
      other.title == title &&
      other.id == id &&
      other.owner == owner &&
      other.size == size &&
      other.state == state &&
      other.location == location &&
      other.waterSource == waterSource &&
      listEquals(other.images, images) &&
      listEquals(other.crops, crops);
  }

  @override
  int get hashCode {
    return title.hashCode ^
      id.hashCode ^
      owner.hashCode ^
      size.hashCode ^
      state.hashCode ^
      location.hashCode ^
      waterSource.hashCode ^
      images.hashCode ^
      crops.hashCode;
  }
}
