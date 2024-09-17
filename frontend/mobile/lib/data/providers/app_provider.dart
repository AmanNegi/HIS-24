import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/data/app_state.dart';

final appStateProvider = ChangeNotifierProvider<AppStateNotifier>((ref) {
  final storage = AppStateNotifier();
  return storage;
});

class AppStateNotifier extends ChangeNotifier {
  AppState _appState = AppState.initial();

  AppState get appState => _appState;

  void updateAppState(AppState state) {
    _appState = state;
    notifyListeners();
  }

  void clearAppState() {
    _appState = AppState.initial();
    notifyListeners();
  }

  bool isDarkTheme() {
    return _appState.isDarkTheme;
  }

  void toggleTheme() {
    _appState = _appState.copyWith(isDarkTheme: !_appState.isDarkTheme);
    notifyListeners();
  }
}
