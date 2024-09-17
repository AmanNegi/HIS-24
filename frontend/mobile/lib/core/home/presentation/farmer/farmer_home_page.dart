import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/core/home/application/home_manager.dart';
import 'package:my_template/core/home/presentation/farmer/add_farm_page.dart';
import 'package:my_template/data/app_state.dart';
import 'package:my_template/globals.dart';
import 'package:my_template/utils/style.dart';
import "package:material_design_icons_flutter/material_design_icons_flutter.dart";

class FarmerHomePage extends ConsumerStatefulWidget {
  const FarmerHomePage({super.key});

  @override
  ConsumerState<FarmerHomePage> createState() => _FarmerHomePageState();
}

class _FarmerHomePageState extends ConsumerState<FarmerHomePage> {
  late HomeManager homeManager;

  @override
  initState() {
    homeManager = HomeManager(context, ref);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Welcome ${appState.value.user!.name}"),
      ),
      floatingActionButton: FloatingActionButton(
        elevation: 0,
        onPressed: () {
          goToPage(context, AddItemPage(homeManager: homeManager));
        },
        child: const Icon(Icons.add),
      ),
      body: Column(
        children: [
          SizedBox(
            height: 0.25 * getHeight(context),
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 15.0),
              scrollDirection: Axis.horizontal,
              children: [
                _getListItem("assets/farming.jpg"),
                _getListItem("assets/farming2.jpg"),
              ],
            ),
          ),
          verticalSpace20,
          SizedBox(
            height: 0.21 * getWidth(context),
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 15.0),
              scrollDirection: Axis.horizontal,
              children: [
                _getCategory(
                    "Insurance", Colors.blue, MdiIcons.bankCircleOutline),
                _getCategory("Profile", Colors.amber, MdiIcons.accountGroup),
                _getCategory("Prices", Colors.green, MdiIcons.cash100),
                _getCategory("Schemes", Colors.green, MdiIcons.cash100),
              ],
            ),
          )
        ],
      ),
    );
  }

  _getListItem(String img) {
    return Padding(
      padding: const EdgeInsets.only(right: 10.0),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(15.0),
        child: SizedBox(
          width: 0.9 * getWidth(context),
          child: Image.asset(
            img,
            width: 0.9 * getWidth(context),
            fit: BoxFit.cover,
          ),
        ),
      ),
    );
  }

  Container _getCategory(String text, MaterialColor color, IconData icon) {
    return Container(
      width: 0.2 * getWidth(context),
      height: 0.2 * getWidth(context),
      margin: const EdgeInsets.only(right: 10.0),
      decoration: BoxDecoration(
        color: color.withOpacity(0.2),
        borderRadius: BorderRadius.circular(5.0),
      ),
      padding: const EdgeInsets.all(2),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Icon(icon),
          Text(
            tr(text),
            style: const TextStyle(fontSize: 12),
          )
        ],
      ),
    );
  }
}
