import 'package:cached_network_image/cached_network_image.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/core/home/application/home_manager.dart';
import 'package:my_template/core/home/application/home_provider.dart';
import 'package:my_template/core/home/application/models/farm.dart';
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
  List<Farm> items = [];

  @override
  initState() {
    homeManager = HomeManager(context, ref);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    items = ref.watch(homeProvider).getItems();
    return Scaffold(
      appBar: AppBar(
        title: Text("${tr("welcome")} ${appState.value.user!.name}"),
      ),
      floatingActionButton: FloatingActionButton(
        elevation: 0,
        onPressed: () {
          goToPage(context, AddItemPage(homeManager: homeManager));
        },
        child: const Icon(Icons.add),
      ),
      body: ListView(
        children: [
          SizedBox(
            height: 0.3 * getHeight(context),
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 15.0),
              scrollDirection: Axis.horizontal,
              children: [
                // _getListItem("assets/farming.jpg"),
                // _getListItem("assets/farming2.jpg"),
                _getListItem("assets/ppmfy.png"),
                _getListItem("assets/pmksy.jpeg"),
                // _getListItem(
                // "https://i0.wp.com/www.insurancesamadhan.com/blog/wp-content/uploads/2022/09/Pradhan-Mantri-Fasal-Bima-Yojana.jpg?resize=768%2C432&ssl=1"),
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
                    "insurance", Colors.blue, MdiIcons.bankCircleOutline),
                _getCategory("profile", Colors.amber, MdiIcons.accountGroup),
                _getCategory("prices", Colors.green, MdiIcons.cash100),
                _getCategory("schemes", Colors.green, MdiIcons.fileDocument),
              ],
            ),
          ),
          verticalSpace20,
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 15.0),
            child: Text(
              tr("yourFarms"),
              style: const TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
          verticalSpace16,
          ...items.map((e) {
            return Container(
              height: 0.15 * getHeight(context),
              margin: const EdgeInsets.only(
                left: 15.0,
                right: 15.0,
                bottom: 10.0,
              ),
              decoration: BoxDecoration(
                color: Theme.of(context).cardColor,
                borderRadius: BorderRadius.circular(15.0),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.045),
                    spreadRadius: 1.0,
                    blurRadius: 8.0,
                  ),
                ],
              ),
              child: Row(
                children: [
                  ClipRRect(
                    borderRadius: const BorderRadius.only(
                      topLeft: Radius.circular(15.0),
                      bottomLeft: Radius.circular(15.0),
                    ),
                    child: CachedNetworkImage(
                      imageUrl: e.images[0],
                      width: 0.3 * getWidth(context),
                      height: double.infinity,
                      fit: BoxFit.cover,
                    ),
                  ),
                  horizontalSpace8,
                  Expanded(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          e.title,
                          style: const TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text("${e.size} sq. m"),
                        Wrap(
                          children: e.crops.map((crop) {
                            return Container(
                              decoration: BoxDecoration(
                                color: Colors.grey[200],
                                borderRadius: BorderRadius.circular(5.0),
                              ),
                              padding: const EdgeInsets.all(2.0),
                              margin: const EdgeInsets.all(2.0),
                              child: Text(crop),
                            );
                          }).toList(),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          }).toList(),
        ],
      ),
    );
  }

  _getListItem(String img) {
    return Padding(
      padding: const EdgeInsets.only(right: 10.0),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(15.0),
          border: Border.all(
            color: Colors.grey[200]!,
          ),
        ),
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
