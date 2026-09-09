import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Monetiza',

theme: ThemeData(
  primaryColor: const Color.fromARGB(255, 48, 0, 155),
  scaffoldBackgroundColor: Colors.white,

  colorScheme: const ColorScheme.light(
    primary: Color.fromARGB(255, 48, 0, 115),
    secondary: Color.fromARGB(255, 48, 0, 115),
  ),

  useMaterial3: true,
),

      home: const SplashScreen(),
    );
  }
}

// Tela de Splash
class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {

  @override
  void initState() {
    // Geralmente se diz aqui as ações da página
    super.initState();

    // Aguarda 2 segundos e depois vai para a HomeScreen
    Future.delayed(const Duration(seconds: 2), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => const HomeScreen(),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.primary,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,

          children: [
            Image.asset(
              'assets/images/Monetiza.png',
              width: 200,
              height: 200,
            ),
            const SizedBox(height: 16),
            const Text(
              'Monetiza',
              style: TextStyle(
                color: Colors.white,
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// Tela principal
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Monetiza'),
      ),

      body: const Center(
        child: Text(
          'Em construção...',
        ),
      ),
    );
  }
}