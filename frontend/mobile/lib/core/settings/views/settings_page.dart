import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/data/providers/app_provider.dart';
import 'package:my_template/widgets/primary_button.dart';

class SettingsPage extends ConsumerStatefulWidget {
  const SettingsPage({super.key});

  @override
  ConsumerState<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends ConsumerState<SettingsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(tr("settings")),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            ListTile(
              onTap: () {
                context.setLocale((context.locale == const Locale('en'))
                    ? const Locale('hi')
                    : const Locale('en'));
              },
              title: const Text('Change Language'),
            ),
            ListTile(
              onTap: () {
                ref.read(appStateProvider).toggleTheme();
              },
              title: const Text('Dark Mode'),
            ),
          ],
        ),
      ),
    );
  }
}
