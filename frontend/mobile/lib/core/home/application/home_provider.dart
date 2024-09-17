import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/core/home/application/models/farm.dart';

final homeProvider =
    ChangeNotifierProvider<HomeProvider>((ref) => HomeProvider());

class HomeProvider extends ChangeNotifier {
  List<Farm> _items = [];

  List<Farm> getItems() => [..._items];

  void updateItems(List<Farm> items) {
    if (listEquals(items, _items)) return;
    _items = items;
    notifyListeners();
  }
}
