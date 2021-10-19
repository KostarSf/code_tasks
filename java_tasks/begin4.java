package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите диаметр окружности: ");
        float d = scanner.nextFloat();

        float L = 3.14f * d;

        System.out.println("Длина окружности: " + L);
        scanner.close();
    }
}
