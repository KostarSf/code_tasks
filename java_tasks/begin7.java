package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите радиус круга: ");
        float R = scanner.nextFloat();

        float L = 2 * 3.14f * R;
        float S = 3.14f * (float) Math.pow(R, 2);

        System.out.println("Длина окружности: " + L);
        System.out.println("Площадь круга: " + S);
        scanner.close();
    }
}
