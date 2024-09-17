import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:my_template/core/home/presentation/farmer/farmer_home_page.dart';
import 'package:my_template/core/settings/views/settings_page.dart';
import 'package:my_template/data/app_state.dart';
import 'package:my_template/theme.dart';
import 'package:my_template/widgets/bottom_nav_bar.dart';

class FarmerMultiPage extends StatefulWidget {
  const FarmerMultiPage({super.key});

  @override
  State<FarmerMultiPage> createState() => _FarmerMultiPageState();
}

class _FarmerMultiPageState extends State<FarmerMultiPage>
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
            icon: const Icon(Icons.home),
            label: tr("home"),
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.business),
            label: tr("contracts"),
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.chat),
            label: tr("chats"),
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.settings),
            label: tr("settings"),
          ),
        ],
        selectedItemColor: primary,
      ),
      body: TabBarView(
        controller: tabController,
        children: const [
          FarmerHomePage(),
          Center(
            child: Text("Contracts Page"),
          ),
          Center(
            child: Text("Chats Page"),
          ),
          SettingsPage(),
        ],
      ),
    );
  }
}
