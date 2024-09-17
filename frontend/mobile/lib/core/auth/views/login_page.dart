import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/core/auth/application/auth_manager.dart';
import 'package:my_template/core/auth/application/location_service.dart';
import 'package:my_template/core/auth/views/signup_page.dart';
import 'package:my_template/core/home/presentation/role_page.dart';
import 'package:my_template/globals.dart';
import 'package:my_template/widgets/custom_text_field.dart';
import 'package:my_template/widgets/loading_widget.dart';
import 'package:my_template/widgets/primary_button.dart';

class LoginPage extends ConsumerStatefulWidget {
  final String role;
  const LoginPage({super.key, required this.role});

  @override
  ConsumerState<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends ConsumerState<LoginPage> {
  late AuthManager _authManager;
  String phone = "", password = "";

  @override
  void initState() {
    _authManager = AuthManager(context, ref);
    super.initState();
    locationService.requestLocation();
  }

  @override
  Widget build(BuildContext context) {
    return LoadingWidget(
      isLoading: _authManager.isLoading,
      child: _buildLoginPage(context),
    );
  }

  SingleChildScrollView _buildLoginPage(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 15.0),
      child: Column(
        children: [
          const SizedBox(height: kToolbarHeight),
          // Image.asset(
          //   "assets/logo_app.png",
          //   height: 100,
          //   width: 100,
          // ),
          SizedBox(height: 0.025 * getHeight(context)),
          const Center(
            child: Text(
              "XYZ",
              style: TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          const Center(
            child: Text(
              "Your motto here",
              style: TextStyle(
                fontSize: 12,
              ),
            ),
          ),
          SizedBox(height: 0.025 * getHeight(context)),
          CustomTextField(
            value: phone,
            keyboardType: TextInputType.phone,
            onChanged: (v) => phone = v,
            label: "Phone",
          ),
          const SizedBox(height: 10),
          CustomTextField(
            value: password,
            isPassword: true,
            onChanged: (v) => password = v,
            label: "Password",
          ),
          SizedBox(height: 0.3 * getHeight(context)),
          PrimaryButton(
            onPressed: () async {
              if (phone.trim().isEmpty) {
                showToast("Enter a valid email");
                return;
              }

              if (password.trim().isEmpty) {
                showToast("Enter a valid password");
                return;
              }

              var res = await _authManager.loginUsingPhonePassword(
                phone: phone.trim(),
                password: password.trim(),
              );

              if (res == 1 && mounted) {
                goToPage(context, const RolePage(), clearStack: true);
              }
            },
            text: "Log in",
          ),
          SizedBox(height: 0.015 * getHeight(context)),
          GestureDetector(
            onTap: () => goToPage(
              context,
              SignUpPage(role: widget.role),
              clearStack: true,
            ),
            child: RichText(
              text: TextSpan(
                style: Theme.of(context).textTheme.bodyMedium,
                children: [
                  TextSpan(
                      text: widget.role == "farmer"
                          ? "Don't have a Farmer account?"
                          : "Don't have a Sponser account?"),
                  TextSpan(
                    text: " SignUp",
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
    );
  }
}
