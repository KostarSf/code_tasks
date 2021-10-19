package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите сторону квадрата: ");
        float a = scanner.nextFloat();

        float P = 4 * a;

        System.out.println("Периметр квадрата: " + P);
        scanner.close();
    }
}
