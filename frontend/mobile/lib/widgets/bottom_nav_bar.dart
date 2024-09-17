import "package:flutter/material.dart";

class BottomNavBar extends StatelessWidget {
  final Function onClick;
  final int currentIndex;
  const BottomNavBar({
    Key? key,
    required this.onClick,
    required this.currentIndex,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      onTap: (e) {
        onClick(e);
      },
      currentIndex: currentIndex,
      items: const <BottomNavigationBarItem>[
        BottomNavigationBarItem(
          icon: Icon(Icons.home),
          label: 'Home',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.business),
          label: 'Contracts',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.school),
          label: 'Chats',
        ),
      ],
      selectedItemColor: Colors.amber[800],
    );
  }
}
