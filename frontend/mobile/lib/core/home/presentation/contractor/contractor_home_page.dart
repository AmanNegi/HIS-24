import 'package:cached_network_image/cached_network_image.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/core/home/application/home_manager.dart';
import 'package:my_template/core/home/application/home_provider.dart';
import 'package:my_template/core/home/application/models/farm.dart';
import 'package:my_template/core/home/presentation/farm_detail_page.dart';
import 'package:my_template/globals.dart';
import 'package:my_template/utils/style.dart';

class ContractorHomePage extends ConsumerStatefulWidget {
  const ContractorHomePage({super.key});

  @override
  ConsumerState<ContractorHomePage> createState() => _ContractorHomePageState();
}

class _ContractorHomePageState extends ConsumerState<ContractorHomePage> {
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
      body: ListView(
        children: [
          verticalSpace48,
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 15.0),
            child: Text(
              tr("nearbyFarms"),
              style: const TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
          verticalSpace16,
          ...items.map((e) {
            return GestureDetector(
              onTap: () {
                goToPage(context, FarmDetailPage(farm: e));
              },
              child: Container(
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
              ),
            );
          }).toList(),
        ],
      ),
    );
  }
}
