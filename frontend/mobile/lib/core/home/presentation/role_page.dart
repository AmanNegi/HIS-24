import 'dart:collection';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_template/core/auth/application/providers/auth_provider.dart';
import 'package:my_template/core/home/presentation/contractor/contractor_multi_page.dart';
import 'package:my_template/core/home/presentation/farmer/farmer_multi_page.dart';

class RolePage extends ConsumerWidget {
  const RolePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final data = ref.watch(authProvider);
    if (data.isFarmer()) {
      return const FarmerMultiPage();
    }
    return const ContractorMultiPage();
  }
}
