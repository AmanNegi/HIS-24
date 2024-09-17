import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:http/http.dart' as http;
import 'package:my_template/constants.dart';
import 'package:my_template/core/home/application/home_provider.dart';
import 'package:my_template/core/home/application/models/farm.dart';
import 'package:my_template/data/app_state.dart';

class HomeManager {
  final BuildContext context;
  Timer? timer;
  final WidgetRef ref;

  HomeManager(this.context, this.ref) {
    attach();
  }

  dispose() {
    debugPrint("[home_manager] Detaching Listeners...");
    if (timer != null) {
      timer!.cancel();
    }
  }

  // Using Polling instead of WebSockets
  attach() async {
    debugPrint("[home_manager] Attaching Listeners...");
    var data = await getAllItems();
    ref.read(homeProvider).updateItems(data);

    timer = Timer.periodic(
      const Duration(seconds: 10),
      (timer) async {
        if (context.mounted) {
          var data = await getAllItems();
          ref.read(homeProvider).updateItems(data);
        }
      },
    );
  }

  Future<List<Farm>> getAllItems() async {
    return await getAllFarmerItems(appState.value.user!.id);
  }

  Future<List<Farm>> getAll() async {
    var response = await http.get(
      Uri.parse("$API_URL/list/getAll"),
    );

    Map data = json.decode(response.body);
    if (response.statusCode == 200) {
      List dataMap = data["data"];
      List<Farm> list = [];

      for (var e in dataMap) {
        list.add(Farm.fromMap(e));
      }
      return list;
    }
    return [];
  }
}

Future<List<Farm>> getAllFarmerItems(String id) async {
  var response = await http.get(
    Uri.parse("$API_URL/farmer/getAllFarms/$id"),
  );

  debugPrint(response.request!.url.toString());
  Map data = json.decode(response.body);

  if (response.statusCode == 200) {
    List dataMap = data["data"];
    List<Farm> list = [];

    for (var e in dataMap) {
      list.add(Farm.fromMap(e));
    }
    debugPrint("Farmer Items $list");

    return list;
  }
  return [];
}

Future<void> addItem(Farm item) async {
  await http.post(
    Uri.parse("$API_URL/farmer/addFarm/${appState.value.user!.id}"),
    headers: {"content-type": "application/json"},
    body: json.encode(
      {
        "owner": item.owner,
        "size": item.size,
        "images": item.images,
        "location": item.location.toMap(),
        "state": item.state,
        "waterSource": item.waterSource,
        "crops": item.crops,
      },
    ),
  );
}

Future<Farm?> getItemById(String id) async {
  var response = await http.get(Uri.parse("$API_URL/list/getItem/$id"));
  Map data = json.decode(response.body);

  if (data["statusCode"] == 200) {
    Farm item = Farm.fromMap(data["data"]);
    return item;
  }
  return null;
}

// Future<User?> getUserById(String id) async {
//   var response = await http.get(Uri.parse("$API_URL/auth/$id"));
//   print(response);
//   Map data = json.decode(response.body);

//   if (data["statusCode"] == 200) {
//     User user = User.fromMap(data["data"]);
//     return user;
//   }
//   return null;
// }

// Future<void> deleteItem(String id) async {
//   if (!appState.value.isLoggedIn || appState.value.user == null) {
//     showToast("You need to login to perform this action");
//     return;
//   }

//   var response = await http.post(
//     Uri.parse("$API_URL/admin/deleteItem"),
//     headers: {"content-type": "application/json"},
//     body: json.encode(
//       {"itemId": id, "adminId": appState.value.user!.id},
//     ),
//   );

//   debugPrint(response.body.toString());
//   var data = json.decode(response.body);
//   showToast(data["message"]);
// }
