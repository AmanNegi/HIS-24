import 'package:easy_localization/easy_localization.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/core/home/presentation/role_page.dart';
import 'package:my_template/data/app_state.dart';
import 'package:my_template/data/providers/app_provider.dart';
import 'package:my_template/firebase_options.dart';
import 'package:my_template/splash_screen.dart';
import 'package:my_template/theme.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  await EasyLocalization.ensureInitialized();
  await appCache.getDataFromDevice();

  runApp(
    ProviderScope(
      child: EasyLocalization(
        supportedLocales: const [Locale('en'), Locale('hi')],
        path: 'assets/translations',
        fallbackLocale: const Locale('en'),
        child: const MyApp(),
      ),
    ),
  );
}

class MyApp extends ConsumerWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(appStateProvider);

    return MaterialApp(
      localizationsDelegates: context.localizationDelegates,
      supportedLocales: context.supportedLocales,
      locale: context.locale,
      theme: themeData(
        state.isDarkTheme() ? Brightness.dark : Brightness.light,
        state.isDarkTheme() ? darkColorScheme : lightColorScheme,
      ),
      home: state.appState.isLoggedIn ? const RolePage() : const SplashScreen(),
    );
  }
}
