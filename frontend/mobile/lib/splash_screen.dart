import 'package:flutter/material.dart';
import 'package:my_template/core/auth/views/login_page.dart';
import 'package:my_template/globals.dart';
import 'package:my_template/utils/style.dart';
import 'package:my_template/widgets/primary_button.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: Spacing.p16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Center(
            //   child: Image.asset(
            //     'assets/images/logo.png',
            //     width: 200,
            //     height: 200,
            //   ),
            // ),
            Text(
              "Select your role",
              style: Theme.of(context).textTheme.titleLarge,
            ),
            verticalSpace20,
            PrimaryButton(
              text: "Farmer",
              onPressed: () {
                goToPage(context, const LoginPage(role: "farmer"));
              },
            ),
            verticalSpace12,
            PrimaryButton(
              text: "Sponser",
              onPressed: () {
                goToPage(context, const LoginPage(role: "contractor"));
              },
            ),
            verticalSpace12,
            GestureDetector(
              onTap: () {},
              child: RichText(
                text: TextSpan(
                  style: Theme.of(context).textTheme.bodyMedium,
                  children: [
                    const TextSpan(text: "Part of Authority?"),
                    TextSpan(
                      text: " Login",
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                        color: Theme.of(context).primaryColor,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
