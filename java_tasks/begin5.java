package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите длину ребра куба: ");
        float a = scanner.nextFloat();

        float V = (float) Math.pow(a, 3);
        float S = 6 * (float) Math.pow(a, 2);

        System.out.println("Объём куба: " + V);
        System.out.println("Площадь поверхности куба: " + S);
        scanner.close();
    }
}
