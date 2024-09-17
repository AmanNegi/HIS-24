import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:my_template/core/auth/application/models/user.dart';

ValueNotifier<AppState> appState = ValueNotifier(AppState.initial());

class AppCache {
  final String _prefsKey = "fresh_nest";
  LatLng? currentLocation;

  getDataFromDevice() async {
    var sharedPreferences = await SharedPreferences.getInstance();
    String? data = sharedPreferences.getString(_prefsKey);
    if (data == null) return;
    appState.value = (AppState.fromJson(data));
    debugPrint("Data From Device: $data");
  }

  saveDataToDevice() async {
    var sharedPreferences = await SharedPreferences.getInstance();
    await sharedPreferences.setString(_prefsKey, appState.value.toJson());
    debugPrint("Saved Data to Device...");
  }

  updateAppCache(AppState state) {
    appState.value = (AppState.fromMap(state.toMap()));
    saveDataToDevice();
  }

  clearAppCache() {
    appState.value = (AppState.initial());
    saveDataToDevice();
  }

  bool isLoggedIn() {
    // if (appState.value.user == null || appState.value.user!.id == "") {
    //   return false;
    // }

    return appState.value.isLoggedIn;
  }
}

/*  
@AppState: Stores App State and Credentials.
**/
class AppState {
  final bool isLoggedIn;
  final bool isDarkTheme;
  final User? user;

  const AppState({
    this.isLoggedIn = false,
    this.isDarkTheme = false,
    this.user,
  });

  factory AppState.initial() {
    return const AppState(isLoggedIn: false, isDarkTheme: false);
  }

  AppState copyWith({
    bool? isLoggedIn,
    bool? isDarkTheme,
    User? user,
  }) {
    return AppState(
      isLoggedIn: isLoggedIn ?? this.isLoggedIn,
      isDarkTheme: isDarkTheme ?? this.isDarkTheme,
      user: user ?? this.user,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'isLoggedIn': isLoggedIn,
      'isDarkTheme': isDarkTheme,
      'user': user?.toMap(),
    };
  }

  factory AppState.fromMap(Map<String, dynamic> map) {
    return AppState(
      isLoggedIn: map['isLoggedIn'] ?? false,
      isDarkTheme: map['isDarkTheme'] ?? false,
      user: User.fromMap(map['user']),
    );
  }

  String toJson() => json.encode(toMap());

  factory AppState.fromJson(String source) =>
      AppState.fromMap(json.decode(source));

  @override
  String toString() =>
      'AppState(isLoggedIn: $isLoggedIn, isDarkTheme: $isDarkTheme, user: $user)';

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is AppState &&
        other.isLoggedIn == isLoggedIn &&
        other.isDarkTheme == isDarkTheme &&
        other.user == user;
  }

  @override
  int get hashCode =>
      isLoggedIn.hashCode ^ isDarkTheme.hashCode ^ user.hashCode;
}

AppCache appCache = AppCache();
