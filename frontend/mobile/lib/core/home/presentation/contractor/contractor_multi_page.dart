import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:my_template/core/home/presentation/contractor/contractor_home_page.dart';
import 'package:my_template/core/home/presentation/farmer/farmer_home_page.dart';
import 'package:my_template/core/settings/views/settings_page.dart';
import 'package:my_template/data/app_state.dart';
import 'package:my_template/theme.dart';
import 'package:my_template/widgets/bottom_nav_bar.dart';

class ContractorMultiPage extends StatefulWidget {
  const ContractorMultiPage({super.key});

  @override
  State<ContractorMultiPage> createState() => _ContractorMultiPageState();
}

class _ContractorMultiPageState extends State<ContractorMultiPage>
    with SingleTickerProviderStateMixin {
  int currentIndex = 0;
  late TabController tabController;

  @override
  void initState() {
    tabController = TabController(length: 4, vsync: this);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        onTap: (e) {
          setState(() {
            currentIndex = e;
          });
          tabController.animateTo(e);
        },
        currentIndex: currentIndex,
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: const Icon(Icons.explore_outlined),
            label: tr("explore"),
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.business_outlined),
            label: tr("contracts"),
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.chat_outlined),
            label: tr("chat"),
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.settings_outlined),
            label: tr("settings"),
          ),
        ],
        selectedItemColor: primary,
      ),
      body: TabBarView(
        controller: tabController,
        children: const [
          ContractorHomePage(),
          Center(child: Text("Under Progress")),
          Center(child: Text("Under Progress")),
          SettingsPage(),
        ],
      ),
    );
  }
}
