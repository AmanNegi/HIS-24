import 'dart:io';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:image_picker/image_picker.dart';
import 'package:my_template/core/auth/application/location_service.dart';
import 'package:my_template/core/auth/application/models/user.dart';
import 'package:my_template/core/home/application/home_manager.dart';
import 'package:my_template/core/home/application/models/farm.dart';
import 'package:my_template/data/app_state.dart';
import 'package:my_template/globals.dart';
import 'package:my_template/utils/firebase_storage.dart';
import 'package:my_template/widgets/loading_widget.dart';
import 'package:my_template/widgets/primary_button.dart';
import 'package:uuid/uuid.dart';

class AddItemPage extends StatefulWidget {
  final HomeManager homeManager;
  const AddItemPage({Key? key, required this.homeManager}) : super(key: key);

  @override
  AddItemPageState createState() => AddItemPageState();
}

class AddItemPageState extends State<AddItemPage> {
  late double height, width;
  String waterSource = '', title = "";

  double size = 0.0;
  String imageUrl = "";
  bool pickedImage = false;
  final TextEditingController _cropController = TextEditingController();
  final List<String> _crops = [];

  void _addCrop() {
    setState(() {
      if (_cropController.text.isNotEmpty) {
        _crops.add(_cropController.text);
        _cropController.clear();
      }
    });
  }

  ValueNotifier<bool> isLoading = ValueNotifier(false);

  @override
  initState() {
    super.initState();
    locationService.requestLocation();
  }

  @override
  Widget build(BuildContext context) {
    height = MediaQuery.of(context).size.height;
    width = MediaQuery.of(context).size.width;
    return LoadingWidget(
      isLoading: isLoading,
      child: _getAddItemPage(context),
    );
  }

  Scaffold _getAddItemPage(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios),
          onPressed: () => Navigator.pop(context),
        ),
        centerTitle: true,
        title: const Text(
          "Add Farm",
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: _getFloatingActionButton(context),
      body: _getBody(),
    );
  }

  _getFloatingActionButton(BuildContext context) {
    return FloatingActionButton.extended(
      onPressed: () async {
        if (locationService.locationData == null ||
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
        isLoading.value = true;
        String itemId = const Uuid().v1();

        String url =
            await storageManager.uploadItemImage(itemId, File(imageUrl));

        await addItem(
          Farm(
            id: "x",
            title: title,
            owner: appState.value.user!.id,
            size: size,
            state: appState.value.user!.address.state,
            location: Location(
              type: "Point",
              coordinates: [
                location.latitude,
                location.longitude,
              ],
            ),
            waterSource: waterSource,
            images: [url],
            crops: _crops,
          ),
        );
        isLoading.value = false;

        if (mounted) {
          Navigator.pop(context);
        }
      },
      label: const Row(
        children: [
          Text("Continue"),
          SizedBox(width: 5),
          Icon(
            Icons.arrow_forward_ios,
            size: 14,
          ),
        ],
      ),
    );
  }

  _getBody() {
    return SingleChildScrollView(
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 15.0),
        height: height,
        child: Column(
          children: [
            SizedBox(height: 0.02 * height),
            AnimatedSwitcher(
              duration: const Duration(seconds: 1),
              reverseDuration: const Duration(seconds: 1),
              child: _getImageSelector(),
              layoutBuilder: (currentChild, previousChildren) =>
                  currentChild ?? Container(),
            ),
          ],
        ),
      ),
    );
  }

  _getImageSelector() {
    return Column(
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(10.0),
          child: SizedBox(
            height: 0.3 * height,
            width: double.infinity,
            child: pickedImage
                ? GestureDetector(
                    onTap: () {
                      pickAnImage();
                    },
                    child: Image.file(
                      File(imageUrl),
                      fit: BoxFit.contain,
                    ),
                  )
                : PrimaryButton(
                    onPressed: () async {
                      await pickAnImage();
                    },
                    text: ("Pick an Image"),
                  ),
          ),
        ),
        Container(
          height: 0.025 * height,
        ),
        _getTextField(
          "Title",
          ((e) => title = e),
          TextInputType.text,
        ),
        _getTextField(
          "Water Source on Farm",
          ((e) => waterSource = e),
          TextInputType.text,
        ),
        _getTextField(
          "Area (acre)",
          ((e) => size = double.parse(e)),
          TextInputType.number,
        ),
        Row(
          children: [
            Expanded(
              child: Container(
                margin: const EdgeInsets.only(bottom: 10.0),
                padding: const EdgeInsets.symmetric(
                  horizontal: 10.0,
                  vertical: 5.0,
                ),
                decoration: BoxDecoration(
                  color: Theme.of(context).cardColor,
                  borderRadius: BorderRadius.circular(8.0),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.025),
                      spreadRadius: 1.0,
                      blurRadius: 8.0,
                    ),
                  ],
                ),
                child: TextField(
                  controller: _cropController,
                  decoration: const InputDecoration(
                    hintText: "Crops",
                    hintStyle: TextStyle(fontSize: 15),
                    border: InputBorder.none,
                  ),
                ),
              ),
            ),
            IconButton(
              icon: const Icon(Icons.add),
              onPressed: _addCrop,
            ),
          ],
        ),
        const SizedBox(height: 10),
        Align(
          alignment: Alignment.centerLeft,
          child: Wrap(
            spacing: 8.0,
            children: _crops
                .map((crop) => Chip(
                      label: Text(crop),
                      onDeleted: () {
                        setState(() {
                          _crops.remove(crop);
                        });
                      },
                    ))
                .toList(),
          ),
        ),
      ],
    );
  }

  _getTextField(
    String hintText,
    Function onChange,
    TextInputType keyboardType,
  ) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10.0),
      padding: const EdgeInsets.symmetric(
        horizontal: 10.0,
        vertical: 5.0,
      ),
      decoration: BoxDecoration(
        color: Theme.of(context).cardColor,
        borderRadius: BorderRadius.circular(8.0),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.025),
            spreadRadius: 1.0,
            blurRadius: 8.0,
          ),
        ],
      ),
      child: TextField(
        maxLines: null,
        keyboardType: keyboardType,
        onChanged: (value) {
          onChange(value);
          setState(() {});
        },
        decoration: InputDecoration(
          hintText: hintText,
          hintStyle: const TextStyle(fontSize: 15),
          border: InputBorder.none,
        ),
      ),
    );
  }

  Future<bool> pickAnImage() async {
    XFile? file = await ImagePicker().pickImage(
      source: ImageSource.gallery,
      imageQuality: 50,
    );
    if (file != null) {
      imageUrl = file.path;
      pickedImage = true;
      setState(() {});
      return true;
    }
    return false;
  }
}
