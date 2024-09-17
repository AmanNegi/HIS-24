import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:my_template/core/auth/application/auth_manager.dart';
import 'package:my_template/core/auth/application/location_service.dart';
import 'package:my_template/globals.dart';
import 'package:my_template/widgets/custom_text_field.dart';
import 'package:my_template/widgets/loading_widget.dart';
import 'package:my_template/widgets/primary_button.dart';

class SignUpPage extends ConsumerStatefulWidget {
  final String role;
  const SignUpPage({super.key, required this.role});

  @override
  ConsumerState<SignUpPage> createState() => _SignUpPageState();
}

class _SignUpPageState extends ConsumerState<SignUpPage> {
  late AuthManager _authManager;
  String dropdownValue = "customer";
  String email = "", password = "", username = "", phone = "";

  @override
  void initState() {
    _authManager = AuthManager(context, ref);
    super.initState();
    if (locationService.locationData == null) {
      locationService.requestLocation();
    }
  }

  @override
  Widget build(BuildContext context) {
    return LoadingWidget(
      isLoading: _authManager.isLoading,
      child: _getSignUpPage(context),
    );
  }

  SingleChildScrollView _getSignUpPage(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 15.0),
      child: Column(
        children: [
          const SizedBox(height: kToolbarHeight),
          Image.asset(
            "assets/logo_app.png",
            height: 100,
            width: 100,
          ),
          SizedBox(height: 0.015 * getHeight(context)),
          const Center(
            child: Text(
              "Fresh Nest",
              style: TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          const Center(
            child: Text(
              "Bringing the farm to your doorstep",
              style: TextStyle(
                fontSize: 12,
              ),
            ),
          ),
          SizedBox(height: 0.025 * getHeight(context)),
          CustomTextField(
            value: username,
            onChanged: (v) => username = v,
            label: "Username",
          ),
          const SizedBox(height: 10),
          CustomTextField(
            value: email,
            keyboardType: TextInputType.emailAddress,
            onChanged: (v) => email = v,
            label: "Email",
          ),
          const SizedBox(height: 10),
          CustomTextField(
            value: password,
            keyboardType: TextInputType.visiblePassword,
            isPassword: true,
            onChanged: (v) => password = v,
            label: "Password",
          ),
          const SizedBox(height: 10),
          CustomTextField(
            value: phone,
            keyboardType: TextInputType.phone,
            onChanged: (v) => phone = v,
            label: "Phone",
          ),
          _getUserTypeDropDown(context),
          SizedBox(height: 0.025 * getHeight(context)),
          PrimaryButton(
            onPressed: () async {
              if (locationService.locationData == null &&
                  locationService.locationData!.latitude == null &&
                  locationService.locationData!.longitude == null) {
                showToast("Location not found!");
                locationService.requestLocation();
                return;
              }
              final location = LatLng(
                locationService.locationData!.latitude!,
                locationService.locationData!.longitude!,
              );

              final res = await _authManager.signUpUsingEmailPassword(
                email: email.trim(),
                name: username.trim(),
                password: password.trim(),
                phone: phone.trim(),
                userType: dropdownValue,
                location: location,
              );
              if (res == 1 && mounted) {
                // goToPage(context, const RolePage(), clearStack: true);
              }
            },
            text: "Sign up",
          ),
          SizedBox(height: 0.015 * getHeight(context)),
          GestureDetector(
            onTap: () {
              Navigator.pop(context);
            },
            child: RichText(
              text: TextSpan(
                style: Theme.of(context).textTheme.bodyMedium,
                children: [
                  const TextSpan(text: "Already have an account?"),
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
    );
  }

  _getUserTypeDropDown(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10.0),
      child: DropdownButtonFormField(
        value: dropdownValue,
        items: const [
          DropdownMenuItem(value: "customer", child: Text("Customer")),
          DropdownMenuItem(value: "farmer", child: Text("Farmer")),
        ],
        onChanged: (v) {
          dropdownValue = v ?? dropdownValue;
          setState(() {});
        },
      ),
    );
  }
}
