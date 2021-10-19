package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите сторону 'a' прямоугольника: ");
        float a = scanner.nextFloat();

        System.out.print("Введите сторону 'b' прямоугольника: ");
        float b = scanner.nextFloat();

        float S = a * b;
        float P = 2 * (a + b);

        System.out.println("Площадь прямоугольника: " + S);
        System.out.println("Периметр прямоугольника: " + P);
        scanner.close();
    }
}
