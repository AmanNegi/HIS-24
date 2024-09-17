import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/core/auth/application/models/user.dart';
import 'package:my_template/data/app_state.dart';

final authProvider =
    ChangeNotifierProvider<AuthProvider>((ref) => AuthProvider());

class AuthProvider extends ChangeNotifier {
  User? _user;

  User? getCurrentUser() => _user;
  bool isLoggedIn() => _user != null;

  bool isAdmin() {
    return _user == null ? false : _user!.type == "admin";
  }
  bool isFarmer() {
    return _user == null ? false : _user!.type == "farmer";
  }

  updateUserData(User user) {
    AppState state = appState.value;
    appCache.updateAppCache(AppState(
      isLoggedIn: true,
      isDarkTheme: state.isDarkTheme,
      user: user, // maintain for non ref based access
    ));
    notifyListeners();
  }

  clearUserData() {
    appCache.clearAppCache();
    notifyListeners();
  }
}

