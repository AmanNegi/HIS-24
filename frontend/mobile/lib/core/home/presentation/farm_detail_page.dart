import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:my_template/core/home/application/home_manager.dart';
import 'package:my_template/core/home/application/models/farm.dart';
import 'package:my_template/core/home/models/contract.dart';
import 'package:my_template/data/app_state.dart';
import 'package:my_template/globals.dart';
import 'package:my_template/utils/style.dart';
import 'package:my_template/widgets/primary_button.dart';

class FarmDetailPage extends StatefulWidget {
  final Farm farm;
  const FarmDetailPage({super.key, required this.farm});

  @override
  State<FarmDetailPage> createState() => _FarmDetailPageState();
}

class _FarmDetailPageState extends State<FarmDetailPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Farm Detail'),
      ),
      body: ListView(
        children: [
          CachedNetworkImage(
            imageUrl: widget.farm.images[0],
            height: 0.3 * getHeight(context),
            fit: BoxFit.cover,
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 15.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(height: 20),
                Text(
                  'Farm Name: ${widget.farm.title}',
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  'Farm Size: ${widget.farm.size} acres',
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  'Water Sources: ${widget.farm.waterSource}',
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 10),
                Wrap(
                  spacing: 8.0,
                  children: widget.farm.crops
                      .map(
                        (crop) => Chip(
                          label: Text(crop),
                          shape: const StadiumBorder(
                              side: BorderSide(color: Colors.grey)),
                        ),
                      )
                      .toList(),
                ),
                SizedBox(height: 0.15 * getHeight(context)),
                if (widget.farm.owner != appState.value.user!.id &&
                    appCache.isContractor())
                  PrimaryButton(
                    text: 'Propose Contract',
                    onPressed: () {
                      showModalBottomSheet(
                        context: context,
                        isScrollControlled: true,
                        builder: (context) {
                          return BottomSheetWidget(farm: widget.farm);
                        },
                      );
                    },
                  ),
              ],
            ),
          )
        ],
      ),
    );
  }
}

class BottomSheetWidget extends StatefulWidget {
  final Farm farm;
  const BottomSheetWidget({super.key, required this.farm});

  @override
  State<BottomSheetWidget> createState() => _BottomSheetWidgetState();
}

class _BottomSheetWidgetState extends State<BottomSheetWidget> {
  final TextEditingController _cropController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();
  final TextEditingController _quantityController = TextEditingController();
  DateTime? _startDate;
  DateTime? _endDate;
  bool _cropInsurance = false;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Text("Propose Contract",
              style: Theme.of(context).textTheme.titleLarge),
          verticalSpace24,
          TextField(
            controller: _cropController,
            decoration: const InputDecoration(labelText: 'Crop'),
          ),
          TextField(
            controller: _priceController,
            decoration: const InputDecoration(labelText: 'Price'),
            keyboardType: TextInputType.number,
          ),
          TextField(
            controller: _quantityController,
            decoration: const InputDecoration(labelText: 'Quantity'),
            keyboardType: TextInputType.number,
          ),
          ListTile(
            title: Text(
                'Start Date: ${_startDate != null ? _startDate!.toLocal().toString().split(' ')[0] : ''}'),
            trailing: const Icon(Icons.calendar_today),
            onTap: () async {
              DateTime? picked = await showDatePicker(
                context: context,
                initialDate: DateTime.now(),
                firstDate: DateTime(2000),
                lastDate: DateTime(2101),
              );
              if (picked != null && picked != _startDate) {
                setState(() {
                  _startDate = picked;
                });
              }
            },
          ),
          ListTile(
            title: Text(
                'End Date: ${_endDate != null ? _endDate!.toLocal().toString().split(' ')[0] : ''}'),
            trailing: const Icon(Icons.calendar_today),
            onTap: () async {
              DateTime? picked = await showDatePicker(
                context: context,
                initialDate: DateTime.now(),
                firstDate: DateTime(2000),
                lastDate: DateTime(2101),
              );
              if (picked != null && picked != _endDate) {
                setState(() {
                  _endDate = picked;
                });
              }
            },
          ),
          ListTile(
            title: const Text('Crop Insurance'),
            trailing: Switch(
              value: _cropInsurance,
              onChanged: (value) {
                setState(() {
                  _cropInsurance = value;
                });
              },
            ),
          ),
          verticalSpace12,
          PrimaryButton(
            onPressed: () {
              // Handle form submission
              // createContract(
              // Contract(farmer: widget.farm.id, contractor: , crop: crop, area: area, price: price, quantity: quantity, contractStartDate: contractStartDate, contractEndDate: contractEndDate, paymentStatus: paymentStatus, paymentMilestones: paymentMilestones, cropInsurance: cropInsurance, signedDate: signedDate, status: status,)
              // );
              // Navigator.pop(context);
            },
            text: ('Submit'),
          ),
          verticalSpace12,
        ],
      ),
    );
  }
}
