package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите сторону квадрата: ");
        float a = scanner.nextFloat();

        float S = a * a;

        System.out.println("Площадь квадрата: " + S);
        scanner.close();
    }
}
